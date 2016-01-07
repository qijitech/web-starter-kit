var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var notify = require('gulp-notify');
var gulpIf = require('gulp-if');
var filter = require('gulp-filter');
var minify = require('gulp-minify-css');

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('vendor', function (jsOutputFile, jsOutputFolder, cssOutputFile, cssOutputFolder) {

	var baseBowerDir = './bower_components/';

	var cssFile = cssOutputFile || 'vendor.css';
	var jsFile = jsOutputFile || 'vendor.js';

	var onError = function (err) {
		notify.onError({
			title: "Laravel Elixir",
			subtitle: "Bower Files Compilation Failed!",
			message: "Error: <%= error.message %>",
			icon: __dirname + '/../node_modules/laravel-elixir/icons/fail.png'
		})(err);
		this.emit('end');
	};

	var orderJsSrc = [
		baseBowerDir + 'jquery/dist/jquery.js',
		baseBowerDir + 'jquery-ui/jquery-ui.js',
		baseBowerDir + 'bootstrap/dist/js/bootstrap.js',
		baseBowerDir + 'metisMenu/dist/metisMenu.js',
		baseBowerDir + 'jquery-slimscroll/jquery.slimscroll.js',
		baseBowerDir + 'PACE/pace.js',
		Elixir.config.assetsPath + '/js/main.js',
		baseBowerDir + 'angular/angular.js',
		baseBowerDir + 'angular-sanitize/angular-sanitize.js',
		baseBowerDir + 'oclazyload/dist/ocLazyLoad.js',
		baseBowerDir + 'angular-ui-router/release/angular-ui-router.js',
		baseBowerDir + 'angular-bootstrap/ui-bootstrap-tpls.js',
		baseBowerDir + 'ng-idle/angular-idle.js',
		baseBowerDir + 'w5c-validator/w5cValidator.js'
	];

	new Task('vendor js', function () {
		return gulp.src(orderJsSrc)
			.on('error', onError)
			.pipe(concat(jsFile, {
				newLine: '\n;' // the newline is needed in case the file ends with a line comment, the semi-colon is needed if the last statement wasn't terminated
			}))
			.pipe(gulpIf(Elixir.config.production, uglify()))
			.pipe(gulp.dest(jsOutputFolder || Elixir.config.js.outputFolder))
			.pipe(notify({
				title: 'Laravel Elixir',
				subtitle: 'Javascript Vendor Files Imported!',
				icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
				message: ' '
			}));
	}).watch(orderJsSrc);

	var orderCssSrc = [
		baseBowerDir + 'bootstrap/dist/css/bootstrap.css',
		baseBowerDir + 'font-awesome/css/font-awesome.css',
		baseBowerDir + 'animate.css/animate.css',
		Elixir.config.assetsPath + '/css/style.css'
	];
	new Task('vendor css', function () {
		return gulp.src(orderCssSrc)
			.on('error', onError)
			.pipe(concat(cssFile))
			.pipe(gulpIf(config.production, minify()))
			.pipe(gulp.dest(cssOutputFolder || config.css.outputFolder))
			.pipe(notify({
				title: 'Laravel Elixir',
				subtitle: 'CSS Vendor Files Imported!',
				icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
				message: ' '
			}));
	}).watch(orderCssSrc);
});