

//=======>
// Problem: 1 - Shopping list application
//____________________

//step (a) - initialize an array
const shoppingList = new Array();
const tem = ["Apple", "Banana", "Milk", "Bread"];
for (let i = 0; i < tem.length; i++) {
  // step(b) - Adding items
  shoppingList.push(tem[i]);
}

// step(c) 
shoppingList.splice(1, 1);

//step(d) 
shoppingList[shoppingList.length - 1] = "Eggs";

//step(d) 
const listLength = shoppingList.length;

//step:(f) 
const message = `I have ${listLength} items in my shopping list: ${shoppingList}`;

// console.log(message)






//=======>
// Problem: 2 - You are working on a word game application. Complete the following steps:
//____________________

//step(a)
const word = "Alex";

//step(b)
const wordLength = word.length;

//step(c)
function countVowels([...arr]) {
  let result = "";

     for (let i = 0; i < arr.length; i++) {
     switch (arr[i]) {
          case "a":
          result += "a";
          break;
          case "e":
          result += "e";
          break;
          case "i":
          result += "i";
          break;
          case "o":
          result += "o";
          break;
          case "u":
          result += "u";
          break;
     }
     }
     return result;
     }

//step(d)
const vowelCount = countVowels(word);

//step(e)
const consonants = Array();

//step(f)
const wordArray = Array.prototype.slice.call(word);

for (let i = 0; i < word.length; i++) {
  if (
    word[i] !== "a" &&
    word[i] !== "e" &&
    word[i] !== "i" &&
    word[i] !== "o" &&
    word[i] != "u"
  ) {
    consonants.push(word[i]);
  }
}

//Step (g)
const wordMessage = `The word '${word}' has ${word.length} characters. It contains ${vowelCount} vowel(s) and ${consonants.length} consonant(s).`;

// log(wordMessage)






//=======>
// Problem: 3 - Title: Random Number Operations
//____________________

//step(a)
const randomFraction = Math.random();

//step(b)
const randomWhole = Math.floor(randomFraction * 10);

//step(c)
function generateRandomInRange(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

//step(d)
const randomInRange = generateRandomInRange(5, 15);

//step(e)
const convertToInteger = (str) => {
  return parseInt(str);
};

//step(f)
const parsedInteger = convertToInteger("42");

//step(g)
const display = `Random Fraction: ${randomFraction}
Random Whole Number: ${randomWhole}
Random Number in Range [5, 15]: ${randomInRange}
Parsed Integer: ${parsedInteger}`;

// display






//=======>

//Problem: 4 Title: Menu Selection
//____________________

const opt = (letter) => {
  if (letter === "A" || letter === "B" || letter === "C") {
    log(`Option ${letter} selected`);
  }
};

//step(a)
let option = "";
//step(b)
switch (option) {
  //step(c)
  case "A":
    opt("A");
    break;
  case "B":
    opt("B");
    break;
  case "C":
    opt("C");
    break;
  //step(d)
  default:
    console.log(("Invalid option selected"))
}

//step(e)
const isOptionValid = (opt) => {
  switch (opt) {
    case "A":
    case "B":
    case "C":
      return true;
    default:
      return false;
  }
};

//step(f)
const isValidOption = isOptionValid(option);






//=======>

//Problem: 5
//____________________

//step(a)
const Course = {
  name: "Mathematics",
  instructor: "John Doe",
  students: ["Alice", "Bob", "Charlie"],
};

//step(b)
Course.students[Course.students.length - 1] = "David";

//step(c)
Course.students.splice(2);

//step(d)
Course.instructor = "Jane Smith";

//step(e)
Course.Duration = 10;

//step(f)
delete Course.name;






//=======>

//Problem: 6 - Title: You are working on a music record collection application.
//____________________

//step(a)
const recordCollection = {
  2468: {
    title: "Song Title 1",
    artist: "Artist 1",
    year: 2020,
  },
  1357: {
    title: "Song Title 2",
    artist: "Artist 2",
    year: 2018,
  },
  9876: {
    title: "Song Title 3",
    artist: "Artist 3",
    year: 2022,
  },
};

//step(b)
const song1 = recordCollection[2468];

//step(c)
const hasSong4321 = recordCollection.hasOwnProperty(4321);

//step(d)
recordCollection[4321] = {
  title: "Song Title 4",
  artist: "Artist 4",
  year: 2019,
};

//step(e)
const songTitle = recordCollection[9876].title;

//step(f)
const songYear = recordCollection[1357].year;






//=======>

//Problem: 7 - title: You are building a ticket booking system for a theater
//____________________

//step(a)
let i = 0;

while (i <= 5) {
  i++;
}

//step(b)
for (let w = 10; w >= 0; w--) {
  // w
}

//step(c)
for (let w = 0; w <= 10; w++) {
  if (w % 2 == 0) {
    //w
  }
}

//step(d)
const seats = [1,2,3,4,5,6,7,8,9,10];
     
     for(let xx = 0; xx < seats.length; xx++){
          // log(`SEATS AT- ${seats[xx]}`)
     }

//step(e)
for (let outStar = 1; outStar <= 10; outStar++) {
     let star = '';
   
     for (let innerStar = 1; innerStar <= outStar; innerStar++) {
       star += '*';
     }
   
     // log(star)
   }
   





//========>

//Problem: 8
//____________________

//step(a)
function countdown(p) {
     if (p > 0) {
       console.log(p);
       countdown(p - 1);
     } else {
       console.log('Countdown complete!');
     }
   }

   console.log(countdown(10))





// //=======>

// //Problem: 9
// //____________________

// //step(a)
// const score = 80;

// //step(b)
// let result = ''
//    const scorecheck = score >= 80? result+= 'Pass': result += 'Fail';
   
// //step(c)
// const grade =
//   score >= 90 ? 'A' :
//   score >= 80 ? 'B' :
//   score >= 70 ? 'C' :
//   'D';







//   //=======>

//  // Problem: 10 HTML MANIPULATION
// //____________________

  
//   // step(a)
//   const parent = document.querySelector('[data-parent]')
  
//   //step(b)
//   const nodeList = document.querySelectorAll('div,ul,li')//[div,ul,li]
  
//   //step(c)
//   const strongOfI = parent.querySelectorAll('i > strong')
  
//   log(strongOfI)
  







// // ============================== ( Es6 ) ======================================
// //=======>

// //Problem:1 - Title: Exploring ES6 Function Features
// //____________________

// //Step(a)
// const multiply = ((a = 1,b) => a * b) 

// //step(b)
// multiply(4,4)

// //step(c)
// const sumAll = (...numbers) => numbers.reduce((acc,cur) => acc + cur);

// //step(d)
// {
//   //step(e)
//   const numbers = [100,50,200];

//   //step(f)
//   const x = sumAll(...numbers);
//   // log(x)

//   //step(g)
//   let MAX = 0;
//   let MIN = 0;
//   numbers.sort((a,b)=>{
//     if(a > b) return 1;
//     if(a < b) return -1;
//               return 0;
//   })

//   MIN = numbers[0]
//   MAX = numbers[numbers.length - 1]
//   // log(`MIN VALUE -${MIN}`)
//   // log(`MAX VALUE - ${MAX}`)
// }







// //=======>

// //Problem: 2 - Title: Managing Data and Functions with Scopes, Mutability, and Arrow Functions
// //____________________

// //step(a)
// var age = 25

// //step(b)
// function updateAge(newAge){
//   //STEP(C)
//   let age = newAge
// }

// updateAge(4)

// //STEP(E)
// const es6Number = [1,2,3]

// //STEP(F)
// const addElement = (Element) =>{

// //STEP(G)
//  es6Number.push(Element)
// }

// //STEP(H)
// addElement(4);

// //StEP(I)..

// //STEP(J)
// const person = {
//   name : 'Sakil',
//   age : 21
// };

// //STEP(K)
// function updatePersonAge(newAge){
// //STEP(L)
//   // Object.freeze(person);
// //STEP(M)
//   person.age = newAge;
// };

// //STEP(N)
// updatePersonAge(30)

// //STEP(O)..

// //STEP(P)
// const es6Multiply = (a,b) => a * b;

// //STEP(Q)
// const greet = (n1,n2,n3) =>{
// return `Hey ${n1}, ${n2} and ${n3} it was pleasure to meet all of you`
// }

// //LOG..







// //=======>


// //Problem: 3 - Title: Destructuring and Rest in JavaScript - 
// //____________________

// //STEP(A)
// const es6Person = {
//   name : 'Forhad!',
//   age : 100, //ha ha
  
//   //STEP(C)
//   address: {
//   city : 'Chittagong',
//   country : 'Bangladesh'
// }
// }

// //STEP(B)
// const {name:personName, age:personAge} = es6Person

// //Step(D)
// const {address:{city: personCity, country: personCountry}} = es6Person;

// //STEP(E)
// {
//   const numbers = [1, 2, 3, 4, 5];

// //STEP(F),(G)
//   const [firstNumber,secondNumber,...restNumbers] = numbers;

// //STEP(H)
// const printPersonInfo = (personInfo) => {
//   const {name,age} = personInfo;

// //..
// }
// printPersonInfo(es6Person)

// }





// //=======>

//Problem: 4 - Title: Modern JavaScript Syntax
//____________________

//STEP(A)
 const x = 'X'
// log(`${x}  is the 24th letter`)

//STEP(B)
const userName = 'Vorolina';
const userAge = 20;
const user = {userName,userAge}

//STEP(c)
const greetUser = (user) => `Pleasure to meet you ${user.userName}`
const showResult = greetUser(user)

//..

//STEP(D)
class Product{
  constructor(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
    get all(){
      return `here you go ${this.name},${this.price},${this.quantity}`
    }
    set all(q){
      return this.quantity = q
    }
}

const product = new Product("iPhone 12 Pro", 1099.99, 5)
product.name = 'newName'
//..

// //STEP(E)
// import { exportedFun} from './module.js';
// // console.log(exportedFun(3,3))






// //=======>

// //Problem: 5
// //____________________

// //STEP(A)
// // STEP (A)
// const myPromise = new Promise((resolve, reject) => {

//   const response = { OK: true };

//   if (response.OK) {
//     setTimeout(() => {
//       resolve("I am completed after 2 seconds");
//     }, 2000);
//   } else {
//     reject("Something went wrong!");
//   }
// });

// // STEP (C)
// myPromise.then((val) => {
//   console.log(val);
// }).catch((error) => {
//   console.log(error);
// });


// //STEP(E)
// import  exportedDefault  from "./module.js";

// exportedDefault.then(val=>{
//   try{
//     console.log(val)

//   }catch(error){
//     console.log(error)
//   }
//   })






