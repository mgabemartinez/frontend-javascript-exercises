module.exports.createCourse = function (courseTitle, courseDuration, courseStudents) {
  return {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents,
  }
};

module.exports.addProperty = function (object, newProp, newValue) { 
  if (!object[newProp]) {
    object[newProp] = newValue
  }
  return object
};

 

module.exports.formLetter = function (letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\n" + "Sincerely,\n" + letter.sender;
};

module.exports.canIGet = function (item, money) {
  var products = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  }

  return products[item] <= money
};











           //object, newProp, newvalue//
//addProperty({}, 'firstName', 'Jim') 
// should return { firstName: 'Jim' }

              //object,           newProp,   newvalue//
//addProperty({firstName: 'Rob'}, 'firstName', 'Jim') 
// should return {firstName: 'Rob'}

