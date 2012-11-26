var pronto = require('pronto');
var assert = require('assert');
var GuessContentType = require('../lib/guesscontenttype');

var registry = new pronto.Registry();
var router = new pronto.Router(registry);

registry.route('test')
  .does(GuessContentType, 'type')
    .using('name', 'foo/bar/baz.html')
  .does(pronto.commands.Closure, 'out')
    .using('fn', function (cxt, param, cmd) {
      assert.ok(cxt.get('type') == 'text/html');
    })
;
registry.route('test2')
  .does(GuessContentType, 'type')
    .using('name', 'foo/bar/baz.nosuchext')
  .does(pronto.commands.Closure, 'out')
    .using('fn', function (cxt, param, cmd) {
      assert.ok(cxt.get('type') == 'application/octet-stream');
    })
;

router.handleRequest('test');
router.handleRequest('test2');
