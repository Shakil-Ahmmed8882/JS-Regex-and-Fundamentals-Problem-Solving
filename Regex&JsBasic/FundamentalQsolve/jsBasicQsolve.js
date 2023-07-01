// /*
// ========================>
// JAVASCRIPT FUNDAMENTALS..
// ===============>
// PROBLEMS: 1

// OPTION: 1. 
// TITLE : API REQUEST USING FETCH
// _____________________________________
// */
(function(){

const fetchedData = fetch('https://jsonplaceholder.typicode.com/todos/');
try {
      fetchedData.then(response => {
            //success range 200 - 299
        if (response.status >= 200 && response.status < 300) {

          response.json().then(data => {
            data.forEach(user => {
            //   console.log(user);
            });
          });
        } 
      });
    } catch (error) {
      console.log(error);
    }
})();

    
// /*

// OPTION: 2. 
// TITLE : API REQUEST USING AJAX
// _____________________________________
// */

// (function() {
//       const xhr = new XMLHttpRequest();
    
//       xhr.onload = function() {
//         console.log(this.response);
//       };
    
//       xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
//       xhr.responseType = 'json';
//       xhr.send();
//     })();
    



// /*
// ===============>

// Problem: 2. 
// TITLE : OBJECT ITERATOR WITH HIGHER ORDER FUNCTION.
// _____________________________________
// */
// //STEP A
// function objectIterator(obj,callback){

//       for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {

//               // Perform actions with key and value
//               const value = obj[key];
//                callback(key,value)
//             }
//           }
              
// }

// //STEP B
// function printProperty(property,value){
//       // console.log(`PROPERTY IS: ${property}`)
//       // console.log(`VALUE: ${value}`)
// }

// //STEP C
// const person = {
//       name: "John Doe",
//       age: 30,
//       city: "Example City",
//       hobbies: ["reading", "cooking", "running"],
//       isAdmin: false,
//     };

// //STEP D
// objectIterator(person,printProperty)



// //====> 1 of 2 <=====
// // Problem 1 (2): Property Sum 

// //STEP(A)
// function sumProperty(propertyValue) {
      
//       if(typeof(propertyValue) == 'number'){
//             sum+= propertyValue
//       }
//     }
    
//     // STEP(B)
//     const obj = {
//       a: 5,
//       b: "hello",
//       c: 10,
//       d: true,
//     };
    
//     //STEP(C)
//     let sum = 0;
    
//     //STEP(D)
//     for (const key in obj) {

//       //CHECKING IF KEYS AVAILABLE IN THE OBJECT
//       if(obj.hasOwnProperty(key)){
//             sumProperty(obj[key])
//       }
//       }
    
//     //STEP(E)
// //     console.log("Total sum:", sum);
    




// //====> 2 of 2 <=====
// // Problem 2 (2): Property Count

//STEP(A)
//     function countProperty(propertyValue) {

//       if(typeof(propertyValue) === 'string'){
//             count++;
//       }
//     }
    
//     // Object to be iterated over
//     const obj1 = {
//       name: "John",
//       age: 30,
//       city: "New York",
//       occupation: "Engineer",
//       hobbies: ["reading", "cooking", "running"],
//       isAdmin: true,
//       a:'helllo world',
//       course: 'Programming Hero Course'
//     };
    
//     let count = 0;
// //     
//     for(const key in obj1){
      
//       if(obj1.hasOwnProperty(key)){
//             countProperty(obj1[key])
//       }
//     }
    
//     console.log("Total count:", count);
    





// /*
// ===============>

// Problem: 3. 
// TITLE : DESTRUCTRING ARRAY
// _____________________________________
// */
// //STEP(A)
function destructuringArray(array,cb){

      for(let i = 0; i < array.length; i++){
            cb(array[i])
      }
}

function cb(v){
      // console.log(v)
}
destructuringArray([1,2,3,4,5],cb)


//STEP(B)
function destructuringObject(obj){
      
      for(const i in obj){
      console.log(i) 

} 
}
const obj3 = {
      name:'sakil',
      purpose:'Strong enough'
}

destructuringObject(obj3)

function destructuringObject(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${obj[key]}`);
        }
      }
    }

    // object
    const person = { name: 'John', age: 30, city: 'New York' };
    destructuringObject(person);
    

// STEP(C)
function spreadArray(...arr){

  
      console.log(arr)
}
spreadArray(2,3,4,5)


const any = [1,2,3,4,5,6,7]

const a = (a,b) =>{
  console.log(a)
  console.log(a)
  console.log(a)
}
//===================================================================
////STEP(D)=================STUDY ON THIS YOU DON'T GET IT ===========
//====================================================================



// spreadObject({ name: 'John' }, { age: 30 }, { city: 'New York' })
// function spreadObject(...objects) {

//       const mergedObject = { ...objects.reduce((acc, obj) => ({ ...acc, ...obj }), {}) };
//       console.log(mergedObject);
//     }
    
//     // Usage example:
//     const obj1 = { name: 'John' };
//     const obj2 = { age: 30 };
//     const obj3 = { city: 'New York' };
//     spreadObject(obj1, obj2, obj3);




/*
===============>

Problem: 4.

TITLE : Object Accessor with Set and Get
_____________________________________
*/

// STEP(A)

const book = {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',

      _price: 12.99,
      setDetails(price, author) {
        if (typeof price === 'number' && price >= 0) {
          this._price = price;
        } else {
          console.log('Invalid price. Please provide a valid number.');
        }
        
        if (typeof author === 'string') {
          this.author = author;
        } else {
          console.log('Invalid author name. Please provide a valid string.');
        }
      }
    };
  
    book.setDetails(9.99, 'Jane Austen'); 
    console.log(book)
