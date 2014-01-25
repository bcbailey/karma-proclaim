var path = require('path');

function pattern(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
}

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('proclaim'), '../lib/proclaim.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:proclaim': ['factory', framework]};