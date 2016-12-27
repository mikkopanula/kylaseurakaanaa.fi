var _ = require('underscore');
var s = require("underscore.string");
_.mixin(s.exports());

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('metadata.txt')
});

var isCategoryStart = function (line) { return line.indexOf('-') == 0; };
var parseCategoryName = function (line) {
  var re = /^-+(.+)/;
  var name = re.exec(line)[1];
  return _.capitalize(name);
};

var parentCategory = undefined;
var categories = {};

lineReader.on('line', function (line) {
  if (isCategoryStart(line)) {
    console.log(parseCategoryName(line));
  }
});