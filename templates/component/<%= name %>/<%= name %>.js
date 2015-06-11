var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var <%= name %> = React.createClass({

	render: require('./<%= name %>.jsx'),

	propTypes: {
	},

	mixins: [
		PureRenderMixin
	]
});

module.exports = <%= name %>;
