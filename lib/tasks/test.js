'use strict';

var eslint = require('@skivvy/skivvy-package-eslint').tasks.eslint;
var mocha = require('@skivvy/skivvy-package-mocha').tasks.mocha;

var PACKAGE_NAME = '@timkendrick/react-app';

eslint.displayName = PACKAGE_NAME + '::eslint';
mocha.displayName = PACKAGE_NAME + '::mocha';

module.exports = function(config) {
	var api = this;
	if (!config.scripts) {
		throw new api.errors.TaskError('No JavaScript source path specified');
	}
	if (!config.tests) {
		throw new api.errors.TaskError('No test path specified');
	}

	var eslintConfig = {
		files: [config.tests, config.scripts]
	};
	var mochaConfig = {
		files: config.mocha
	};
	return api.run([
		{ task: eslint, config: eslintConfig },
		{ task: mocha, config: mochaConfig }
	]);
};

module.exports.defaults = {
	scripts: '<%= package.source.scripts %>',
	tests: '<%= package.source.tests %>',
	mocha: '<%= package.source.tests %>/**/*.spec.js'
};

module.exports.description = 'Test the app';
