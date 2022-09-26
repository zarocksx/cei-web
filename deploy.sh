#!/usr/bin/env sh

# avant de lancer ce script faites un merge de main sur la branch deploy

# abort on errors
set -e

git checkout deploy

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
echo 'cei.brussels' > CNAME

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push https://github.com/zarocksx/cei-web.git deploy

git checkout main

cd -
