// First class function

// // case 1: Assigning function to a variable
// const value = () => {
//   console.log("Hello 21IT Quest batch");
// }
// value();

// // case 2: Passing function as argument to another function
// function sayHello() {
//   console.log("Hello Sammer Hussain");
// }
// function showValue(sayHelloMessage) {
//   console.log(sayHelloMessage());
// }
// showValue(sayHello);

// case 3: Returning function
// function message() {
//   return () => {
//     console.log("Hey! This is Sammer Hussain");
//   };
// }

// Document.getElementById() method change the content of html with certain id.
//Example: 1
// document.getElementById("demo").innerHTML = "Khaskheli";

// //Example: 2
// document.getElementById("heading").innerHTML =
//   "Hey guys This is Sammer Hussain!";

// //Example: 3
// function clickMe() {
//   document.getElementById("click").innerHTML = "clicked";
// }

// Js can change the content of html by following methods

// // innerHTML

// // document.write()
// document.write("Quest");
// document.write(5 + 6);

// // window.alert()

// // How to open new window
// let newWindow = document.getElementById("btn");

/**** Document Object Model(DOM) ****/

function reverseTheNumber(num) {
  num = num + "";

  return num.split("").reverse().join("");
}
// console.log(Number(reverseTheNumber(12345)));

/* Question #02
Write a JavaScript program to check two
numbers and return true if one of the number
is 100 or if the sum of the two numbers is
100
*/
// Solution
const isNumberEqualTo100 = (num1, num2) =>
  num1 == 100 || num2 == 100 || num1 + num2 == 100;
// console.log(isNumberEqualTo100(50,50));

/* Question #03
Write a JavaScript program to get the extension
of a filename.
*/

// Solution
const getFilenameExtension = (str) => str.slice(str.lastIndexOf("."));
// console.log(getFilenameExtension("webpack.config.js"));

const employeeInfo = {
  name: "Naveed Ahmed",
  id: "21IT-38",
  info: function () {
    return this.name + " " + this.id;
  },
};
// console.log(employeeInfo);

const obj = {
  name: "Sammer Hussain",
  age: 24,
};
const copyObj = obj;
// console.log(copyObj.age = 25);

// Nested objects
const company = {
  name: "Microsoft",
  location: "USA",
  employee: {
    name: "Sammer Hussain",
    position: "Senior Software Engineering",
  },
};
// console.log(company.employee.name);

const myInfo = {
  firstName: "Sammer",
  lastName: "Hussain",
  getFullInfo: function () {
    return this.firstName + " " + this.lastName;
  },
};
let temp = myInfo.getFullInfo();
// console.log(temp);

// Add a new method to object later on
myInfo.name = function () {
  console.log("Hello JS");
};
// console.log(myInfo.name());

// Display object values through loop
const object = {
  institute: "Quest Nawabshah",
  department: "Information Technology",
};
// for (let key in object) {
//   console.log(object[key]);
// }

// Through Object.values()
const newArray = Object.values(object);
// console.log(newArray);

// Through Object.entries()
const fruitPrices = {
  mango: 200,
  apple: 400,
  orange: 150,
};

// for (let [key, values] of Object.entries(fruitPrices)) {
//   console.log(key + ":" + values);
// }

// Through JSON.stringify()
let myObject = JSON.stringify(fruitPrices);
// console.log(myObject);

// delete object property
delete fruitPrices.orange;

// for (let [key, values] of Object.entries(fruitPrices)) {
//   console.log(key + ":" + values);
// }

// Spread Operator [...]
const Quator1 = ["jan", "feb", "mar"];
const Quator2 = ["april", "may", "june"];
const Quator3 = ["july", "aug", "sept"];
const Quator4 = ["oct", "nov", "dec"];

const year = [...Quator1, ...Quator2, ...Quator3, ...Quator4];
// console.log(year);

const randomNumbers = [11, 13, 38, 30, 19];
let maxValue = Math.max(...randomNumbers);
// console.log(maxValue);

/*
The instanceof Operator
The instanceof operator returns true if an object is an instance of a specified object:

Example
const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array)   // Returns true
(cars instanceof Object)  // Returns true
(cars instanceof String)  // Returns false
(cars instanceof Number)  // Returns false
*/

// ############### Promises #################

let promiseOne = new Promise(function (resolve, reject) {
  // Do an async tasks
  // api calls, network requests
  setTimeout(function () {
    // console.log("Async tasks is completed");
    resolve();
  }, 2000);
});
promiseOne.then(function () {
  // console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Async task 2 is completed");
    resolve();
  }, 2000);
}).then(function () {
  // console.log("Promise consumed");
});

let promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve({
    //   username: "Sammer Hussain",
    //   email: "sammerhussain5121472@gmail.com",
    // });
  }, 2000);
});
promiseThree.then(function (user) {
  // console.log(user);
});

let promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      // resolve({ username: "Sammer Hussain", password: "2111" });
    } else {
      // console.log("error! something went wrong");
    }
  }, 2000);
});
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function () {
    // console.log(username);
  })
  .catch(function (error) {
    // console.log(`${error} something went wrong`);
  })
  .finally(function () {
    // console.log("either resolve or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // if (!error) {
    //   resolve({ city: "Karachi", country: "Pakistan" });
    // } else {
    //   reject("error! something went wrong");
    // }
  }, 2000);
});
async function consumedpromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(`${error} something went wrong`);
  }
}
consumedpromiseFive();

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

let promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("I love the JavaScript!\n");
  }, 3000);
}).then((response) => {
  // console.log(`${response} promise resolved`);
});

//################ async & await ##################
/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/

async function HelloWorld() {
  // return "Hello World";
}
// is the same as
// function HelloWorld() {
//   return Promise.resolve("Hello World");
// }
HelloWorld().then((response) => {
  //   console.log(response);
});

/*
The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
*/
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        // resolve({ name: "Sammer Hussain", age: 24 });
      } else {
        // reject("Error fetching user data");
      }
    }, 2000);
  });
}

async function displayUserData() {
  try {
    const userData = await fetchUserData();
    // console.log("User Data:", userData);
  } catch (error) {
    // console.error(error);
  }
}
displayUserData();

/* Number Methods
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
valueOf()	Returns a number as a number
*/

// toString()
let number = 12345;
// console.log(number.toString());

// toExponential
let num = 3.1414;
// console.log(num.toExponential(0));

//################# Arrays ###################

// .length()
const frindsGroup = ["Sammer", "Naveed", "Mujahid", "Kamran"];
// console.log(frindsGroup.length);

// Access array elements
// for (let index = 0; index < frindsGroup.length; index++) {
//   // console.log(frindsGroup[index]);
// }
const fruits = ["Mango", "orange", "apple"];
// fruits.forEach((element) => {
//   console.log(element);
// })

// join()
// console.log(fruits.join(" + "));

// pop() & push()
// console.log(fruits.pop());
// console.log(fruits.push("pineapple"));

/* Shift()
Shifting is equivalent to popping, but working on the first element instead of the last.
*/
// console.log(fruits.shift());

/* unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length:
*/
// console.log(fruits.unshift("kiwi"));

// concat()
let city = ["karachi", "lahore", "islamabad"];
let provience = ["sindh", "punjab", "balochistan"];
let country = city.concat(provience);
// console.log(country);
// console.log(city.concat("rawalpindi"));

// copywithin()
// console.log(provience.copyWithin(1, 0));

// const obj = {
//   name: "Sammer",
//   print: function () {
//     return this.name;
//   },
// };
// console.log(obj.print());

// In arrow function this keyword does not work...

// function sayHello() {
//   const greetings = () => (console.log("hello sammer"));
//   return greetings();
// }
// console.log(sayHello());

// console.log(this); // output empty object {}

// // Array containing objects
// const objectArr = [
//   {
//     key: "value",
//     greet: function () {
//       console.log("Hello from the object!");
//     },
//   },
//   {
//     name: "Sammer",
//     age: 25,
//     sayAge: function () {
//       console.log(`I am ${this.age} years old.`);
//     },
//   },
// ];

// // Array containing functions
// const functionArr = [
//   function () {
//     console.log("JS is a very cool language!");
//   },
//   function () {
//     console.log("This is another function.");
//   },
// ];

// // Array containing strings
// const stringArr = [
//   "Hello",
//   "World",
//   "JavaScript",
// ];

// // Process and log objects
// objectArr.forEach((obj) => {
//   console.log(obj);
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "function") {
//       obj[key](); // Call the function if the property is a function
//     } else {
//       console.log(`${key}: ${obj[key]}`);
//     }
//   });
// });

// // Process and log functions
// functionArr.forEach((func) => {
//   console.log(func);
//   func(); // Call the function
// });

// // Process and log strings
// stringArr.forEach((str) => {
//   console.log(str);
// });

/*
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/

// const arrayContainer = [
//   [11, 12, 13],
//   [8, 9, 10],
//   [19, 30, 38],
// ]; // 3D array
// const newArrayContainer = arrayContainer.flat();
// console.log(newArrayContainer);

/*flatMap() 
The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
*/

// const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(exampleArray.flatMap((x) => [x, x + 10]));

/* slice & splice
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
*/
const fruitNames = ["apple","orange"];
fruitNames.splice("mango","kiwi")
console.log(fruitNames);
