karma-proclaim
==========

[Proclaim](https://github.com/rowanmanning/proclaim) assertion library for [Karma](http://karma-runner.github.io).

Proclaim is a simple assertion library for server and client side JavaScript.
It can be used with most test frameworks and is compatible with IE6+. Proclaim
is an attempt to achieve the simplicity of [Node.js assert][node-assert] with
the extra assertions of [Chai][chai].


Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-proclaim --save-dev
```

Or from Github:

```sh
$ npm install 'git+https://github.com/bcbailey/karma-proclaim.git' --save-dev
```

Add `proclaim` to the `frameworks` key in your Karma configuration:

```javascript
module.exports = function(config) {
  config.set({
    // frameworks to use
    frameworks: [ 'mocha', 'proclaim' ]

    // ...
  });
});
```


Usage
-----

```javascript
describe('mocha tests with proclaim', function() {
  it('should expose proclaim', function() {
    proclaim.ok('everything', 'everything is ok');
    proclaim.notEqual('foo', 'bar');
    proclaim.isTrue(true);
  });
});
```