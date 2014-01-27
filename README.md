karma-proclaim
==========

[Proclaim](https://github.com/rowanmanning/proclaim) assertion library for [Karma](http://karma-runner.github.io).


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