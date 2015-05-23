module.exports.getKeys = function (object) {

  var keyArray = [];

  for (var key in object) {
  keyArray.push(key);
  }

  return keyArray;  
};


module.exports.getValues = function (object) {

  var valArray = [];

  for (var val in object) {
  valArray.push(object[val]);
  }

  return valArray;  
};


module.exports.objectToArray = function(object) {

  var newArray = []

  for (var key in object) {
  newArray.push(key + " is " + object[key]);
  }

  return newArray;
};

