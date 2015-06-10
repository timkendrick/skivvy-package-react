'use strict';

var chai = require('chai');
var expect = chai.expect;

var packageModule = require('../..');

describe('package', function() {

	it('should export the correct tasks', function() {
		expect(packageModule.tasks['test']).to.be.a('function');
		expect(packageModule.tasks['build']).to.be.a('function');
		expect(packageModule.tasks['serve']).to.be.a('function');
	});

	it('should specify default package configuration', function() {
		expect(packageModule.defaults).to.eql({
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
		});
	});
});
