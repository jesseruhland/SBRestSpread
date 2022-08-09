/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => nums.reduce((min, next) => next < min ? next : min);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val*2)];

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let newArr = [...items];
    newArr.splice(Math.floor(Math.random()*items.length),1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let result = {...obj};
    result[key] = val;
    return result;
};


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let result = {...obj};
    delete result[key];
    return result;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let result = {...obj};
    result[key] = val;
    return result;
}

