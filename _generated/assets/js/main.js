'use strict';

require.config({
	baseUrl: '/assets/',

	paths: {
		jquery: 'vendor/jquery/dist/jquery.min'
	}
});

require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use');
	});

	$('a').click(function (a) {
		ga('send', 'Links', 'Clicks', a.target.innerText);
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImJhc2VVcmwiLCJwYXRocyIsImpxdWVyeSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29uc29sZSIsImxvZyIsImNsaWNrIiwiYSIsImdhIiwidGFyZ2V0IiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWU7QUFDZEMsVUFBUyxVQURLOztBQUdkQyxRQUFPO0FBQ05DLFVBQVE7QUFERjtBQUhPLENBQWY7O0FBUUFKLFFBQVEsQ0FBRSxRQUFGLENBQVIsRUFBc0IsVUFBU0ssQ0FBVCxFQUFZO0FBQ2pDQSxHQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUM1QkMsVUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0EsRUFGRDs7QUFJQUosR0FBRSxHQUFGLEVBQU9LLEtBQVAsQ0FBYSxVQUFTQyxDQUFULEVBQVk7QUFDeEJDLEtBQUcsTUFBSCxFQUFXLE9BQVgsRUFBb0IsUUFBcEIsRUFBOEJELEVBQUVFLE1BQUYsQ0FBU0MsU0FBdkM7QUFDQSxFQUZEO0FBR0EsQ0FSRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZS5jb25maWcoe1xuXHRiYXNlVXJsOiAnL2Fzc2V0cy8nLFxuXG5cdHBhdGhzOiB7XG5cdFx0anF1ZXJ5OiAndmVuZG9yL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4nXG5cdH1cbn0pO1xuXG5yZXF1aXJlKFsgJ2pxdWVyeScgXSwgZnVuY3Rpb24oJCkge1xuXHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygncmVxdWlyZWpzIHJlYWR5IHRvIHVzZScpO1xuXHR9KTtcblxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24oYSkge1xuXHRcdGdhKCdzZW5kJywgJ0xpbmtzJywgJ0NsaWNrcycsIGEudGFyZ2V0LmlubmVyVGV4dCk7XG5cdH0pO1xufSk7XG4iXX0=
