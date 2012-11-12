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

```javascript

var prontoIO = require('pronto-io');

// With some existing pronto registry....
registry.route('test')
  .does(pio.ReadFile, 'file')
    .using('path', '/etc/hosts')
  // You will now have a stream named `file` in your context.
```

## Commands

- prontoIO.ReadFile: Given a path, open a read stream to the file and
put the stream in the context.
