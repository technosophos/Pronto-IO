var ReadFile = require('../lib/readfile');
var pronto = require('pronto');
var assert = require('assert');
var fs = require('fs');

var registry = new pronto.Registry();
var router = new pronto.Router(registry);

registry.route('test')
  .does(ReadFile, 'file')
    .using('path', '/etc/hosts')
    .using('options', {'encoding': 'utf8'})
  .does(pronto.command.Closure, 'out')
    .using('fn', function (cxt, param, cmd) {
      var f = cxt.get('file');
      assert.ok(f instanceof fs.ReadStream);
      var out = [];
      f.on('data', function (data) {
        out.push(Data);
      });
      f.on('end', function (e) {
        assert.ok(out.length > 0);
        console.log('done');
      });


    })
