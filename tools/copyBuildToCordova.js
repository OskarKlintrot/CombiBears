// This script works but can't be used since node is not running
// with proper permission on windows when using npm scripts

var fs = require('fs')
var ncp = require('ncp')
var rimraf = require('rimraf')
var path = require('path')
var buildPath = path.resolve(__dirname, '../build')
var cordovaPath = path.resolve(__dirname, '../cordova/www')
var keepPath = path.resolve(__dirname, '../cordova/www/.keep')

try {
  rimraf.sync(cordovaPath)
} catch (e) {
  console.error(e)
} finally {
  ncp(buildPath, cordovaPath, function (err) {
   if (err) {
     return console.error(err)
   }
   fs.closeSync(fs.openSync(keepPath, 'w'))
   console.log('Build copied to Cordova!')
  })
}
