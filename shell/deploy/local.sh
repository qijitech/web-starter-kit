#!/bin/bash
cd /var/www/qijitech-core
npm install
bower install
sudo chmod +x shell/deploy/local.sh
sudo chmod -R 777 /var/www/qijitech-core/bootstrap
sudo chmod -R 777 /var/www/qijitech-core/storage
composer install
composer dump-autoload
php artisan migrate
gulp && gulp watch
sudo chmod -R 777 /var/www/qijitech-core/public
