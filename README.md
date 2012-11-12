# Pronto-IO: File IO for the Pronto framework

This package provides File IO commands to Pronto.

## Installation

Via NPM:

Add 'Pronto-IO' as a dependency to your existing applicaiton and use
`npm install`.

(This package is not yet in NPM, but will be soon.)

Manually:

Clone the GitHub repo. You can install it into an application with:

`npm install -f path/to/Pronto-IO`

## Usage

This example opens `/etc/hosts` (with ReadFile) and then prints the file
to the console with `PrintStream`.

```javascript

var prontoIO = require('pronto-io');
var pronto = require('pronto');

registry.route('test')
  .does(prontoIO.ReadFile, 'file')
    .using('path', '/etc/hosts')
    .using('options', {'encoding': 'utf8'})
  .does(prontoIO.PrintStream, 'out')
    .using('stream').from('cxt:file')
;

router.handleRequest('test');

```

## Commands

- prontoIO.ReadFile: Given a path, open a read stream to the file and
put the stream in the context.
- prontoIO.PrintStream: A utility for dumping a stream into the console.
