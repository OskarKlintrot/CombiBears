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
RANDOMVAR=$(date | md5sum)
# SEEDVALUE="StringToBeReplacedAtDeployment"
# sed -i "s/$SEEDVALUE/$RANDOMVAR/" manifest.appcache
RANDOMVAR="# "$RANDOMVAR        # Turns the random string into a comment
sed -i "$ d" manifest.appcache  # Removes the last line
$RANDOMVAR >> manifest.appcache # Append the ranom string to the bottom
echo "Appended \""$RANDOMVAR"\" to the bottom of the appcache manifest"
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
