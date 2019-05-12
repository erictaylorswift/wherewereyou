/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var abstractor = function() {};

// vendor dependencies
var _ = require('lodash');
var Promise = require('bluebird');

abstractor.prototype.init = function(context) {
	return new Promise(function(resolve, reject) {
		// initialize abstractor
		resolve();
	});
};

abstractor.prototype.abstract = function(context) {
	return new Promise(function(resolve, reject) {
		// will hide the generatod context from admin interface
		context['$marked_blog_text_hidden'] = true;

		// will replace __strong__ to <strong>strong</strong>
		context.marked_blog_text = context.blog_text.replace(/__([^*]+)__/g, '<strong>$1</strong>');

		// abstract directive
		return resolve();
	});
};

module.exports = new abstractor();
