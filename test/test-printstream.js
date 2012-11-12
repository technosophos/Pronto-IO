
var ReadFile = require('../lib/readfile');
var PrintStream= require('../lib/printstream');
var pronto = require('pronto');

var registry = new pronto.Registry();
var router = new pronto.Router(registry);

registry.route('test')
  .does(ReadFile, 'file')
    .using('path', '/etc/hosts')
    .using('options', {'encoding': 'utf8'})
  .does(PrintStream, 'out')
    .using('stream').from('cxt:file')
;

router.handleRequest('test');
