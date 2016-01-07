var elixir = require('laravel-elixir');
require('./tasks/angular.task.js');
require('./tasks/vendor.task.js');
require('laravel-elixir-browser-sync-simple');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
	mix
		.vendor()
		.angular('./angular/')
		.less('./angular/**/*.less', 'public/css')
		.copy('./angular/app/**/*.html', 'public/views/app/')
		.copy('./angular/directives/**/*.html', 'public/views/directives/')
		.copy('./angular/dialogs/**/*.html', 'public/views/dialogs/')
		.copy('./bower_components/font-awesome/fonts', 'public/fonts')
		.copy('./bower_components/bootstrap/fonts', 'public/fonts')
		.browserSync({
			files: [
				'public/js/vendor.js',
				'public/js/app.js',
				'public/css/vendor.css',
				'public/css/app.css',
				'public/views/**/*.html'
			],
			proxy: 'localhost:8000',
			logPrefix: "Laravel Eixir BrowserSync",
			logConnections: false,
			reloadOnRestart: false,
			notify: false,
			open: false
		})
		.phpUnit();
})