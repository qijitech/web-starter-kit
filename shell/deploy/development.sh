#!/bin/bash
cd /var/www/jfbang/api
git checkout .
git pull
git rev-parse HEAD > VERSION
gulp
sudo chmod +x shell/deploy/development.sh
sudo chmod -R 777 /var/www/web-starter-kit/bootstrap
sudo chmod -R 777 /var/www/web-starter-kit/storage
sudo chmod -R 777 /var/www/web-starter-kit/public
sudo rm -rf /var/www/web-starter-kit/vendor
composer install
composer dump-autoload
php artisan migrate