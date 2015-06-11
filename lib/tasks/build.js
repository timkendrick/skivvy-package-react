'use strict';

var clean = require('@skivvy/skivvy-package-clean').tasks.clean;
var copy = require('@skivvy/skivvy-package-copy').tasks.copy;
var browserify = require('@skivvy/skivvy-package-browserify').tasks.browserify;
var stylus = require('@skivvy/skivvy-package-stylus').tasks.stylus;
var watch = require('@skivvy/skivvy-package-watch').tasks.watch;

var PACKAGE_NAME = '@timkendrick/react-app';

clean.displayName = PACKAGE_NAME + '::clean';
copy.displayName = PACKAGE_NAME + '::copy';
browserify.displayName = PACKAGE_NAME + '::browserify';
stylus.displayName = PACKAGE_NAME + '::stylus';
watch.displayName = PACKAGE_NAME + '::watch';

module.exports = function(config) {
	var api = this;

	if (!config.source.index) {
		throw new api.errors.TaskError('No index source path specified');
	}
	if (!config.source.js) {
		throw new api.errors.TaskError('No JavaScript source path specified');
	}
	if (!config.source.stylus) {
		throw new api.errors.TaskError('No Stylus source path specified');
	}
	if (!config.source.assets) {
		throw new api.errors.TaskError('No asset source path specified');
	}
	if (!config.destination.root) {
		throw new api.errors.TaskError('No destination root specified');
	}
	if (!config.destination.index) {
		throw new api.errors.TaskError('No index destination path specified');
	}
	if (!config.destination.js) {
		throw new api.errors.TaskError('No JavaScript destination path specified');
	}
	if (!config.destination.css) {
		throw new api.errors.TaskError('No CSS destination path specified');
	}

	var cleanConfig = {
		files: config.destination.root
	};
	var copyConfig = {
		index: {
			source: config.source.index,
			destination: config.destination.index,
			options: {
				overwrite: true
			}
		},
		assets: {
			source: config.source.assets,
			destination: config.destination.root,
			options: {
				overwrite: true
			}
		}
	};
	var browserifyConfig = {
		source: config.source.js,
		destination: config.destination.js,
		options: {
			babelify: true,
			env: config.debug ? 'dev' : 'production',
			watch: config.debug,
			debug: config.debug,
			minify: !config.debug
		}
	};
	var stylusConfig = {
		source: config.source.stylus,
		destination: config.destination.css,
		options: {
			sourcemap: config.debug ? { inline: true } : false,
			'include css': true
		}
	};
	var watchConfig = {
		index: {
			files: config.source.index,
			task: {
				task: copy,
				config: copyConfig.index
			}
		},
		assets: {
			files: config.source.assets + '/**/*',
			task: {
				task: copy,
				config: copyConfig.assets
			}
		},
		styles: {
			files: config.source.styles + '/**/*.styl',
			task: {
				task: stylus,
				config: stylusConfig
			}
		}
	};

	return api.run([
		PACKAGE_NAME + '::test',
		{ task: clean, config: cleanConfig },
		{ task: copy, config: copyConfig.index },
		{ task: copy, config: copyConfig.assets },
		{ task: browserify, config: browserifyConfig },
		{ task: stylus, config: stylusConfig },
		{ task: watch, config: watchConfig.index },
		{ task: watch, config: watchConfig.assets },
		{ task: watch, config: watchConfig.styles }
	]);
};

module.exports.defaults = {
	source: {
		index: '<%= package.source.index %>',
		js: '<%= package.source.scripts %>/index.js',
		styles: '<%= package.source.styles %>',
		stylus: '<%= package.source.styles %>/index.styl',
		assets: '<%= package.source.assets %>'
	},
	destination: {
		root: '<%= package.destination.root %>',
		index: '<%= package.destination.root %>/index.html',
		js: '<%= package.destination.js %>',
		css: '<%= package.destination.css %>'
	},
	debug: '<%= package.debug %>'
};

module.exports.description = 'Test and build the app';
