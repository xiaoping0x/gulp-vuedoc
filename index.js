var doc = require('./gulp-doc');
var parseComponent = require("vue-template-compiler").parseComponent;

function parseScript(file, opts) {
  var fileContent = file.contents.toString("utf8");

  if (file.isBuffer()) {
    var sfc = parseComponent(fileContent, opts);
    var script = sfc.script ? sfc.script.content : null;

    return script;
  }
}

module.exports = function (format, options, formatterOptions) {
  options = options || {};
  options.transform = options.transform || function(file) {
    return /\.vue$/i.test(file.path) ? parseScript(file) : null;
  };

  return doc(format, options, formatterOptions);
};
