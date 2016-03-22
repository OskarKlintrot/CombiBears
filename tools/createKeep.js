var fs = require('fs')
var path = require('path')
var keepPath = path.resolve(__dirname, '../cordova/www/.keep')

try {
  fs.closeSync(fs.openSync(keepPath, 'w'))
} catch (e) {
  console.error(e);
}
