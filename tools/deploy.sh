#!/bin/sh

# Script from https://rasmus.eneman.eu/continuous-integration-and-deployment-to-gh-pages/

# Only deploy when merged to master
 if [ "$TRAVIS_BRANCH" != "master" ]
 then
   exit 0

 elif [ "$TRAVIS_PULL_REQUEST" != "false" ]
 then
   exit 0
 fi

# Fail fast
set -e

# Build
npm run build
#node ./node_modules/babel-cli/bin/babel-node.js --presets es2015,react tools/bootstrap.js > build/index.html

# Deploy
cd build
ls

git init
git checkout -b gh-pages
git config --global user.email "oskar.klintrot@gmail.com"
git config --global user.name "Travis"

git remote add deploy "https://$GH_USERNAME:$GH_TOKEN@github.com/OskarKlintrot/1dv411-project.git"

git add -A

git commit -am "Deploy of build #$TRAVIS_BUILD_NUMBER of commit $TRAVIS_COMMIT"
echo "Deploying..."
git push deploy gh-pages --force > /dev/null 2>&1
echo "End of deploy"
