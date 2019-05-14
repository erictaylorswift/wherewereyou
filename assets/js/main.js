require.config({
	baseUrl: '/assets/',

	paths: {
		jquery: 'vendor/jquery/dist/jquery.min'
	}
});

require([ 'jquery' ], function($) {
	$(document).ready(function() {
		console.log('requirejs ready to use');
	});

	$('a').click(function(a) {
		gtag('event', 'click', {
			event_category: 'links',
			event_label: a.target.innerText
		});
	});
});
