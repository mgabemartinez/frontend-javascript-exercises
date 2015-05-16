module.exports.addItem = function (item, array) {
  
  if (array.indexOf(item) === -1) {
    array.splice(array.length + 1, 0, item);
  }
  return array;
};


module.exports.reverseSortedList = function (array){

  return array.sort().reverse();

}