module.exports.sumNumbers = function (array) {

  var sumOfAll = 0;

  for (var i = 0; i < array.length; i++) {
  sumOfAll += array[i]
  }

  return sumOfAll;
};

module.exports.splitAndLowerCaseString = function(inputString) {

  return inputString.toLowerCase().split(","); 
};

  
module.exports.addIndex = function (array) {

  var newArray = [];

  for (var i = 0; i < array.length; i++) {
  newArray.push(i + " is " + array[i]);
  }

  return newArray;
};
