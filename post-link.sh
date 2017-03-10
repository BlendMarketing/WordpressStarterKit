# Clear opcache to get valid script locations within php-fpm
php-fpm-cli -r "opcache_reset();"
