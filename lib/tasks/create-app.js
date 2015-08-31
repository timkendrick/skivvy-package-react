'use strict';

var path = require('path');
var skivvyFactory = require('skivvy-factory');

module.exports = skivvyFactory({
	description: 'Create a new app',
	template: path.join(__dirname, '../../templates/component'),
	placeholders: [
		{
			name: 'name',
			message: 'App name',
			validate: function(value) {
				return Boolean(value);
			}
		}
	],
	options: {
		destination: '<%= package.source.scripts %>/apps'
	},
	getContext: function(context) {
		if (!isSentenceCase(context.name)) {
			context.name = toSentenceCase(context.name);
		}
		var suffix = 'App';
		var hasSuffix = endsWith(context.name, suffix);
		if (!hasSuffix) { context.name += suffix; }
		return context;


		function isSentenceCase(string) {
			return string.charAt(0) === string.charAt(0).toUpperCase();
		}

		function toSentenceCase(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		function endsWith(string, pattern) {
			return string.lastIndexOf(pattern) ===
				string.length - pattern.length;
		}
	}
});
