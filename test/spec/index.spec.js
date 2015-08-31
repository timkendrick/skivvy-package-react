'use strict';

var chai = require('chai');
var expect = chai.expect;

var packageModule = require('../..');

describe('package', function() {

	it('should export the correct tasks', function() {
		expect(packageModule.tasks['test']).to.be.a('function');
		expect(packageModule.tasks['build']).to.be.a('function');
		expect(packageModule.tasks['serve']).to.be.a('function');
		expect(packageModule.tasks['create-app']).to.be.a('function');
		expect(packageModule.tasks['create-view']).to.be.a('function');
		expect(packageModule.tasks['create-component']).to.be.a('function');
	});

	it('should specify default package configuration', function() {
		expect(packageModule.defaults).to.eql({
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
		});
	});
});
