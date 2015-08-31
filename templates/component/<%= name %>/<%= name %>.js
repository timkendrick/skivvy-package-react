import React from 'react';
import addons from 'react/addons';
const { addons: { PureRenderMixin } } = addons;

import <%= name %>Template from './<%= name %>.jsx';

export default React.createClass({

	displayName: '<%= name %>',

	propTypes: {
	},

	mixins: [
		PureRenderMixin
	],

	render: <%= name %>Template
});
