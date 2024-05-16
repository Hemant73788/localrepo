// function Welcome(data){
//     console.log(data)

// };
// Welcome(1234);

// function sum(x,y){
//     s = x + y;
//     return s;
// }
// let val = sum(78,23);
// console.log(val)
// function fetchData(callback) {
//     // Simulate fetching data asynchronously
//     setTimeout(function() {
//       const data = ["name:hemant","city:kanina"];
//       // Invoke the callback function and pass the fetched data to it
//       callback(data);
//     }, 3000); // Simulate a delay of 1 second
//   }
  
//   function processData(data) {
//     console.log("Processing data:", data);
//   }
  
//   // Call the fetchData function and pass the processData function as a callback
//   fetchData(processData);
// var human = {
// 	firstName: "Virat",
// 	lastName: "Kohli",
// 	age: 30,
// 	fullName: function(){
// 		return this.firstName + " " + this.lastName		
// 	}
// }
// console.log(human.firstName)
// let gameNum = 30;
// userNum = prompt("guess the user number:")

// while(userNum != gameNum){
// 	userNum = prompt("you enter wrong number.guess again:")
// }
// console.log("congratulation,you entered right number:")
// let char = "hemant"
// let size = "";
// for(let val of char){
// 	console.log(val);
// 	size++;
// }
// console.log("hemant chaarterter",size);

// let student = {
// 	name:"hemant",
// 	city:"kanina",
// 	cgpa:"8.8",
// 	state:"haryana"
// }
// for(let key in student){
// 	console.log("key=",key,"value=",student[key])
// }
// function Hello(dataId){
// 	console.log("fetching data....")
// 	const data =[college = "hemant"];
// 	if (callback())
// 	dataId(data);
// }
// function greet(data){
// 	console.log(data)
// }
// Hello(greet)
// function fetchData(callback) {
//     // Simulating fetching data asynchronously
//     setTimeout(function() {
//         const data = "Some data fetched";
//         callback(data); // Calling the callback function with the fetched data
//     }, 4000);
// };

// const processData = (data) => {
//     console.log( data);
// }

// fetchData(processData); // Passing the processData function as a callback
// let user = {
// 	 balance :0,
// 	 transections:0

// 	 }
// 	 function deposit(amount){
// 		if(amount>0){
// 			user.balance +=amount,
// 			user.transections +=1;
// 		}else{
// 			console.log("entered amount should be greter than zero")
// 		}
// 		return user;	
		
// 	 }
// 	 function withdrawn(amount){
// 		if(amount > 0){
// 			user.balance -= amount
// 		user.transections +=1;
// 	}
// 	return user;
		
// 	 }
// 	//  console.log("deposits",deposit(0))
	 

// 	 console.log("deposits",deposit(100))
// 	  console.log("withdrawn",withdrawn(10))
// 	  console.log("deposits",deposit(200))
	 
// let arr = "rahul"
// let size = 0;


// 	for(let i of arr){
// 		console.log(i)
// 		size++;
// 	}
// 	console.log("string length",size)
	
	

// let arr = ["abc","abced","abcdefg"];
// let max = 0;
// let x = 0;
// function longeststring(arr){
// 	for(let i of arr){
// 		if(i.length > max){
// 			max = i.length;
// 		}
// 	}
// 	for(let i = 0; i < arr[i].length; i++){
// 		if(arr(i) == max){
// 			x = arr[i]
// 			break;
// 		}
// 	}
// }
// let check = 0;

// for (let i = 0; i <= 10; i++){
// 	let count = 0;
// 	for (let j =0; j <= i; j++){
// 		if(i % j == 0){
// 			count += 1;
// 		}
// 	}
// 	if(count == 2){
// 		check += 1;
// 		console.log("prime no.",i)
// 	}
// }
// let computer = {
// 	brand: "apple",
// 	processer:"snapdragon",
// 	price:" 50000"
// }
// function check(price) {
// 	for(let i in computer){
// 		if(price <= 40000){
// 			console.log("computer is affordable")
// 		}else{
// 			console.log("computer is not affordable")
// 		}

		
// 		return computer;
// 	}
// }
// console.log("price",check(50000))

// let arrayofmovie=[
// 	{title:"education",director:"anil joshi",rating:"10"},
// 	{title:"family",director:"karan johar",rating:"9"},
// 	{title:"action",director:"rohit shetty",rating:"7"}
// ]
// function movie(rating){

// 	for(let i of arrayofmovie){
// 		if(rating >= 7){
// 			console.log(movie.tite)
// 		}else{

// 		}
// 		return arrayofmovie;
// 	}
		
// }
//console.log("rating",movie(9))
// let student ={
// 	name:"heamnt",
// 	age:"25",
// 	grade:[78,90,88,94,92]
// }
// function average(){
// 	for(let i in student){
// 		//console.log(i.grade)
// 		sum = student.grade/5
// 	}
// }
// average();

// let arr = [12,34,56,34,21,89,35,16,90]
//  let max = 0;
// 
// function largestNumber(){
// 	for(let i of arr){
// 		
// 		 if(i > max){
			
// 		 	 max = i
			  
// 			}
// 		}
// 		return max;
// }

// console.log("maximum no.",largestNumber(max))
// Define the student object
// let student = {
//     name: "rahul",
//     age: 20,
//     grades: [85, 92, 78, 88, 90]
// };

// // Function to calculate the average grade
// function calculateAverageGrade(student) {
//     let total = 0;
//     for (let i = 0; i < student.grades.length; i++) {
//         total += student.grades[i];
//     }
//     let average = total / student.grades.length;
//     return average;
// }

// // Calculate and display the student's average grade
// console.log("average",calculateAverageGrade(student))

//

// }
// console.log("restaurent menu",printMenu(restaurent))
// Define the computer object
// let computer = {
//     brand: "TechMaster",
//     processor: "Intel Core i7",
//     price: 1200
// };

// // Function to check if the computer is affordable
// function isAffordable(computer, budget) {
//     return computer.price <= budget;
// }

// // Example usage
// let budget = 1300;
// if (isAffordable(computer, budget)) {
//     console.log("The computer is affordable.");
// } else {
//     console.log("The computer is not affordable.");
// }
// Define an array of movie objects
// let movies = [
//     { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
//     { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
//     { title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
//     { title: "Parasite", director: "Bong Joon-ho", rating: 8.6 },
//     { title: "Joker", director: "Todd Phillips", rating: 8.5 },
//     { title: "Titanic", director: "James Cameron", rating: 7.8 }
// ];

// // Use a for..of loop to print titles of movies with rating above 8
// for (let movie of movies) {
//     if (movie.rating > 8) {
//         console.log(movie.title);
//     }
// }
// let products = [
// 	{name:"laptop",price:"800",quantity:"5"},
// 	{name:"led",price:"300",quantity:"10"},
// 	{name:"watch",price:"700",quantity:"3"},
// 	{name:"ring",price:"400",quantity:"2"}
// ]
// function calculatetotalValue(){
// 	let totalvalue = 0;
// for(let product of products){
// 	totalvalue += product.price * product.quantity
// }
// return totalvalue;


// }
// console.log("total value",calculatetotalValue(products))

// let sum = 0;
// let a = 0;
//  let b = 1;

//  for(let i =0; i <= 5; i++){

// 	sum = a+b;
// 	a = b;
// 	b = sum
//  console.log(sum)
//  }

//   for(let i= 0;  i<=a.length; i++){
// 	let temp = 0;
// 	for(j = 1; j <= a.length; j++){
// 		if(a[j] > a[i]){
// 			temp = a[i];
// 			a[i] = a[j]
// 			a[j] = temp;
// 		}
// // 	}
// 	console.log(temp)
// }
// let a =[34,56,23,45,67,87,54,32,12,34,];
// let str = ["sdf","hehhwi",'fkdhfre'];
// let arr = [];
//  for(let i of str){
// 	let num = i.length
// 	arr.push(num)
// }
// console.log(arr)