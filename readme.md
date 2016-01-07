## npm
如果你已安装 npm 可跳过此步骤

具体安装步骤见：[链接](https://github.com/nodejs-tw/nodejs-wiki-book/blob/master/zh-tw/node_npm.rst)

## npm install -g gulp bower
如果提示你无权限安装，mac 用户使用 sudo npm install -g gulp bower

安装完成后，项目目录会新增 node_modules 文件夹

## npm install
安装根目录下 package.json 指定的组件

如有警告产生，可忽略

## bower install
安装根目录下 bower.json 指定库

安装完成后，项目目录会新增 bower_components 文件夹

## composer install
安装根目录下 composer.json 指定库

安装完成后，项目目录会新增 vendor 文件夹

## cp .env.example .env
复制 .env.example 并命名为 .env

## php artisan key:generate
生成 Application Key

终端会输出一个随机字符串，并写入 .env 的 APP_KEY

## gulp && gulp watch
gulp 执行 gulpfile.js 文件：

* 将根目录下 angular 目录的 html 复制到 public 目录下
* 处理 css、js文件
* browser-sync 有个本地访问路径的配置，记得更改为自己本地项目的路径

详细的处理见代码，以及处理后的结果

我们安装了 browser-sync 库，对于写前端的朋友非常方便

具体使用，你们可以 Google 下，目前我们博客无此类文章，感兴趣的朋友也可以写写

## php artisan serve
该命令用于装了 homestead 的人

如是自己配置 nginx、php、mysql 的朋友无需执行该命令

## nginx 配置
如果你是自己安装的 nginx，配置文件如下：

	server {
			listen       8000;
			server_name  localhost;
			root       /var/www/core/public/;
			
			access_log  /usr/local/etc/nginx/logs/core.access.log  main;
	
			location ~ \.php$ {
          try_files      $uri = 404;
          fastcgi_pass   127.0.0.1:9000;
          fastcgi_index  index.php;
          fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
          include        fastcgi_params;
      }
	
			location / {
					try_files $uri $uri/ /index.php?$query_string;
			}
	
			error_page  404    /var/www/404.html;
			error_page  403    /var/www/403.html;
	}

## 运行项目
执行 gulp watch 后，会有几个访问链接

依次访问下，就知道了