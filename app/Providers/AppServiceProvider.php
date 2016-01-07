<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		//
	}

	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
		//		if ($this->app->environment('local')) {
		//			// register the service provider
		//			$this->app->register('Barryvdh\Debugbar\ServiceProvider');
		//
		//			// register an alias
		//			$this->app->booting(function () {
		//				$loader = \Illuminate\Foundation\AliasLoader::getInstance();
		//				$loader->alias('Debugbar', 'Barryvdh\Debugbar\Facade');
		//			});
		//		}
	}
}
