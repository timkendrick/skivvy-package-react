'use strict';

var serve = require('@skivvy/skivvy-package-serve').tasks.serve;

var PACKAGE_NAME = '@timkendrick/react-app';

serve.displayName = PACKAGE_NAME + '::serve';

module.exports = function(config) {
	var api = this;

	if (!config.root) {
		throw new api.errors.TaskError('No destination root specified');
	}
	if (!config.port) {
		throw new api.errors.TaskError('No port specified');
	}

	var serveConfig = {
		server: config.root,
		port: config.port,
		files: config.watch ? config.root + '/**/*' : null,
		open: config.open
	};
	return api.run([
		PACKAGE_NAME + '::build',
		{ task: serve, config: serveConfig }
	]);
};

module.exports.defaults = {
	root: '<%= package.destination.root %>',
	port: '<%= package.port %>',
	watch: '<%= package.debug %>',
	open: true
};

module.exports.description = 'Test, build and serve the app';
