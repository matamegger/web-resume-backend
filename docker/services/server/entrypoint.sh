#!/bin/bash
until cd /var/www/public && npm install
do
    echo "Retrying setup of public component"
done

until cd /var/www/server && npm install
do
    echo "Retrying setup of server component"
done
node server.js
