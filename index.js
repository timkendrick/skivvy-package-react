'use strict';

exports.tasks = {
	'test': require('./lib/tasks/test'),
	'build': require('./lib/tasks/build'),
	'serve': require('./lib/tasks/serve'),
	'create-component': require('./lib/tasks/create-component')
};

exports.defaults = {
	source: {
		index: null,
		scripts: null,
		styles: null,
		assets: null,
		tests: null
	},
	destination: {
		root: null,
		js: null,
		css: null
	},
	port: 3000,
	debug: false
};
