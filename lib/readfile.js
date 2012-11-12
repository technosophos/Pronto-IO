var pronto = require('pronto');
var fs= require('fs');

/**
 * Load a file stream.
 *
 * Parameters:
 *
 * - path: The path to the file to open. (REQUIRED)
 * - options: An options object, as described in
 *   http://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
 *   (OPTIONAL)
 */
function ReadFile(){}
pronto.inheritsCommand(ReadFile);
module.exports = ReadFile;

ReadFile.prototype.execute = function (cxt, params) {
  this.required(params, ['path']);
  var path = params.path;
  var options = params.options || {};

  var stream = fs.createReadStream(path, options);

  this.done(stream);
}
