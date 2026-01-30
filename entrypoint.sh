#!/bin/sh
set -e

cp ./env.example ./.env

# Update Email settings in .env

sed -i "s|__ADMIN_USERNAME__|${ADMIN_USERNAME}|g" ./.env
sed -i "s|__ADMIN_PASSWORD__|${ADMIN_PASSWORD}|g" ./.env

sed -i "s|__STRAPI_API_URL__|${STRAPI_API_URL}|g" ./.env
sed -i "s|__STRAPI_API_KEY__|${STRAPI_API_KEY}|g" ./.env

exec "$@"
