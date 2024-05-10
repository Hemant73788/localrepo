// const student = {
//     fullname:"hemant jangra",
//     marks:89,
//     printmarks:function (){
//         console.log("marks =",this.marks);
//     }
// };
// const person = {
//    fullname:'hemant',
//     email:'hemant@gmail.com',
//     city:'kanina',
//     state:'haryana',
// };
// const {fullname,city,state,email} = person;

// console.log(fullname);
// console.log(email);
// console.log(city);
// console.log(state);
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["reading", "traveling", "coding"],
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "USA"
//     },
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// // Accessing properties of the object
// console.log(person.firstName); // Output: John
// console.log(person.lastName); // Output: Doe

// // Accessing nested properties
// console.log(person.address.city); // Output: Anytown

// // Accessing array elements within the object
// console.log(person.hobbies[0]); // Output: reading

// // Calling a method defined in the object
// console.log(person.fullName()); // Output: John Doe

// // Adding new properties to the object
// person.gender = "Male";

// // Modifying existing properties
// person.age = 32;

// // Deleting properties
// delete person.hobbies;

// // Iterating over the object properties
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }
// Function that takes a callback
// function fetchData(callback) {
//     // Simulate an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(() => {
//         const data = ['item1', 'item2', 'item3'];
//         // Call the callback function with the data as an argument
//         callback(data);
//     }, 3000); // Simulating a delay of 1 second
// }
// console.log("fetching data....")

// // Callback function to handle the fetched data
// function processData(data) {
//     console.log('Processing data:', data);
// }

// // Calling the fetchData function and passing the processData function as a callback
// fetchData(processData);
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
        const data = Math.random();
        if (data > 0.5) {
            resolve(data); // Fulfill the promise with the generated data
        } else {
            reject(new Error('Data is less than or equal to 0.5')); // Reject the promise
        }
    }, 1000); // Simulating a delay of 1 second
});

myPromise.then((data) => {
    console.log('Promise fulfilled with data:', data);
}).catch((error) => {
    console.error('Promise rejected with error:', error);
});

