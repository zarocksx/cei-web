#!/usr/bin/env sh

# abort on errors
# set -e

git checkout -b deploy

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
echo 'cei.brussels' > CNAME

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/zarocksx/cei-web.git deploy
git checkout -b main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
