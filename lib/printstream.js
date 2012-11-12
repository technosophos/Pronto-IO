var pronto = require('pronto');
var fs= require('fs');

/**
 * Print the contents of a stream to the console.
 *
 * Parameters:
 *
 * - stream: The stream to print (REQUIRED)
 * - encoding: The encoding of the stream. If this is set, a decoder
 *   will be applied. (OPTIONAL)
 */
function PrintStream(){}
pronto.inheritsCommand(PrintStream);
module.exports = PrintStream;

PrintStream.prototype.execute = function (cxt, params) {
  this.required(params, ['stream']);
  var s = params.stream;
  var encoding = params.encoding;
  var cmd = this;

  if (encoding && s.setEncoding) {
    s.setEncoding(encoding);
  }

  s.on('data', function (data) {
    console.log(data);
  });

  s.on('end', function (e) {
    if (e) {
      console.log(e);
      cmd.error(e);
      return;
    }
    cmd.done();
  });
}
