'use strict';

var path = require('path');
var skivvyFactory = require('skivvy-factory');

module.exports = skivvyFactory({
	description: 'Create a new component',
	template: path.join(__dirname, '../../templates/component'),
	placeholders: [
		{
			name: 'name',
			message: 'Component name',
			validate: function(value) {
				return Boolean(value);
			}
		}
	],
	options: {
		destination: '<%= package.source.scripts %>/components'
	},
	getContext: function(context) {
		if (!isSentenceCase(context.name)) {
			context.name = toSentenceCase(context.name);
		}
		return context;


		function isSentenceCase(string) {
			return string.charAt(0) === string.charAt(0).toUpperCase();
		}

		function toSentenceCase(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
});
