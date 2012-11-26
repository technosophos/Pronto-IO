var pronto = require('pronto');
var Path = require('path');
var Types = require('./mimetypes');

function GuessContentType(){}
pronto.inheritsCommand(GuessContentType);
module.exports = GuessContentType;

GuessContentType.prototype.execute = function (cxt, params) {
  this.required(params, ['name']);

  var name = params.name;
  var ext = Path.extname(name).substring(1);
  if (ext.length < 1) {
    this.done('');
    return;
  }
  this.done(GuessContentType.guess(ext));

}

GuessContentType.guess = function (ext) {
  return Types[ext] || 'application/octet-stream';
}
