<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		\App\User::create([
			'email'    => 'admin@qiji.tech',
			'password' => bcrypt('admin'),
		]);
	}
}
