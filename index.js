'use strict';

exports.tasks = {
	'test': require('./lib/tasks/test'),
	'build': require('./lib/tasks/build'),
	'serve': require('./lib/tasks/serve'),
	'create-app': require('./lib/tasks/create-app'),
	'create-view': require('./lib/tasks/create-view'),
	'create-component': require('./lib/tasks/create-component')
};

exports.defaults = {
	source: {
		scripts: 'src/scripts',
		styles: 'src/styles',
		templates: 'src/templates',
		assets: 'src/assets'
	},
	tests: 'test',
	destination: 'dist',
	port: 3000,
	debug: false
};
