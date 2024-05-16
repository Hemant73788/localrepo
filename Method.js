// console.log("hemant jangra")
// function Add(x,y){
//     return x+y;
// };

// function Subtraction(x,y){
//     return x-y;
// };

// function Multiply(x,y){
//     return x*y;
// };
// function Divide(x,y){
//     return x/y;
// };

// let operations = [Add,Subtraction,Multiply,Divide];

// for(let val of operations){
//     let result = val(30,5);
//     console.log(result)
// }
// let arr = [21,34,21,2,34,55,67,78,88,86]
// let newarr = [ ];

//  function newArr(){
//     for(let i of arr){
//         if(i % 2 == 0){
//             // console.log(i)
//             newarr.push(i)
//         }
//     }
//  }
//  newArr(arr);
//  console.log(newarr)
// function Wellcome(callback){
//     callback()
//     callback()
// }
// function hello(){
//     console.log("hello,how are you")
// };
// Wellcome(Greet);
// function repeatNTime(callback,num){
//     for(let i = 0; i <= num; i++){
//         callback()
//     }
// }
// function Greet(){
//     console.log("hi,i am hemant from kemla")
// }
// repeatNTime(Greet,8)
// function isValidPassword(password,username){
//     if(password.length < 8){
//         return false;
//     }
//     if(password.indexof(' ') != -1){
//         return false;
//     }
//     if(password.indexof(username) != -1){
//         return false
//     }
//     return true;
// }
//    isValidPassword('1234446457FD','khd464')
 
// let arr = ["heamnt","rahul","naveen","jyoti"]
// let newarr =[]

// for(let val of arr){
//    // console.log(val.length)
//     newarr.push(val.length)
// }
// console.log(newarr)
// let arr =['rahul','joni','lili','lakhi'];
// for(let i of arr){
    
// }
// //console.log(arr[2])
// for(let i of arr[0]){
//     console.log(i)
//     let a =0;
//     let e =0;
//     let i =0;
//     let o =0;
//     let u =0;
//     if(i == a || i == e || i == i || i == o || i == u){
//         console.log("vowel",i);

//     }else{
//         console.log("not vowel",i);
//     }

//  let student = {
//     name :'hemant',
//     city :'kanina',
//     grade :[23,45,67,54,90,76]
//  }

//  function averageGrade(){
   
//    console.log(student.grade)
//     let sum =0;
//     for(let i of student.grade){
//         sum += i;
//        // console.log(student.grade)
      
//     }
//     avg = sum/student.grade.length
// };
//  averageGrade(student)
//  console.log(avg)
//  let arr = [23,45,64,32,67,89,88,90,96]

//  function averageNum(){
//     let total = 0;
//     for(let i =0; i <arr.length; i++){
//         total += arr[i]
//     }
//     avg = total/arr.length
//  }
//  averageNum(arr);
//  console.log(avg)
// let arr = [12,34,56,43,45,67];
//  let double = arr.map((x)=>{
//     return x*2
// })
// console.log(double)
// let numbers = [12,45,32,46,66,78,88,98];

// let numDetail = numbers.map((x)=>{
//     return {
//         value:x,
//         isEven: x % 2 == 0
//     }
// })
// console.log(numDetail)
// let str =['hemant','jyoti','naveen','kuldeep','rajnikant']

// let strLength = str.map((n)=>{

//     return n.length
// })
// console.log(strLength)
// let movies = [
//         { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
//         { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
//         { title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
//         { title: "Parasite", director: "Bong Joon-ho", rating: 8.6 },
//         { title: "Joker", director: "Todd Phillips", rating: 8.5 },
//         { title: "Titanic", director: "James Cameron", rating: 7.8 }
//     ]

//     for(let i of movies){
//        // console.log(i.title)
//         if(i.rating > 8.5){
//             console.log(i.title)
//         }
//     }
// let products = [
//     	{name:"laptop",price:"800",quantity:"5"},
//     	{name:"led",price:"300",quantity:"10"},
//     	{name:"watch",price:"700",quantity:"3"},
//     	{name:"ring",price:"400",quantity:"2"}
//     ]
// let total = 0
//     for(let i of products){
//         // console.log(i.price)
//         // console.log(i.quantity)
//         // console.log(i.price * i.quantity)
//         total += i.price * i.quantity

//     }
//     console.log(total)

// let arr =[12,34,56,54,32,45,67,87,90,14,51,76]

// const maximum =arr.filter((n)=>{
 
//     let max = 0;
//     let x = ''
//     if(n > max){
//        max = x
//     }
//     console.log(x)
// })
// let arr =['hem','rahl','chirag','sompa','manisha']
 
// arr.forEach((n)=>{
//    // console.log(n.length)

// })
// let arr =[12,34,56,565,32,45,78,98];
// arr.forEach(()=>{
// doubleNum()
// })
// function doubleNum(){
//    // console.log(n * 2)
//    tripleNum()
// };

// function tripleNum(n){
//     console.log(n*3)
// }
// arr.forEach(doubleNum)
// //doubleNum(tripleNum)
// A simple callback example in JavaScript
// function fetchData(data,getNextData) {
//     setTimeout(() => {
//         // Simulating data fetching with a delay
//         const data1= "name:hemant,city:kanina,state:haryana"
//         const data2= "name:rahul,city:ateli,state:punjab"
//         const data3= "name:manish,city:narnaul,state:rajasthan"
//         if(getNextData()){
//             getNextData()
//         }
//         data(data1);
//     }, 3000);
// }
// console.log("fetching data....")
// function Data1(data1) {
//     console.log("some data:",data1);
// }
// function Data2(data2){
//     console.log(data2)
// }

// function Data3(data3){
//     console.log(data3)
// }


// // // fetchData is called with displayData as the callback function
// fetchData (Data3)
    

// // After 1 second, "Hello, world!" will be printed to the console
// let arr = [12,34,56,43,56,78,98,99,6,54,32];
//    let max = 0;
//  arr.forEach((num)=>{
    
//     if(num > max){

//     }
//     return max;
//  })
//  console.log("maximum no.",arr.forEach(max))
// let arr = [12,34,56,34,21,89,35,16,90]
//  let max = 0;

// function largestNumber(){
// 	for(let i of arr){
		
// 		 if(i > max){
			
// 		 	 max = i
			  
// 			}
// 		}
// 		return max;
// }
// console.log("maximum no.",largestNumber(max))
// let arr = [12,34,54,67,65,43,78,23,14];
// function maximumValue(){
//     for(let i of arr){

//     }
// }
//  let movies = [
//             { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
//             { title: "The Godfather", director: "Francis Ford Coppola", rating: 9.2 },
//             { title: "The Room", director: "Tommy Wiseau", rating: 3.7 },
//             { title: "the Room", director: "Bong Joon-ho", rating: 8.6 },
//             { title: "the Room", director: "Todd Phillips", rating: 8.5 },
//             { title: "Titanic", director: "James Cameron", rating: 7.8 }
//         ]
//     //let movie = movies.filter(x => x.rating > 8.5);
//     let movie = movies.filter(movie => movie.title.includes('the Room'))
//     console.log(movie)
//question  no.1;
// let arr = [12,34,21,45,44,56,76,77,81,83];
// arr.map((func)=>{
   
// })


// let newarr = []
//  function evenNumber(num){
//     if(num % 2 == 0){
//         //console.log(num)
//         newarr.push(num)
//     }
    
// }
// arr.map(evenNumber)
// console.log(newarr)
//question no. 2 =>
// let str = ['bsdkn',',sanl','skndk','kjabkjadkn','mwbmdbbwk'];

//  function strLength(callback){
// callback()
// callback()
//  }
//  let newarr =[]
//  function callback(num){
//     for(let num of str){
//       //  console.log(num.length)
//         newarr.push(num.length)
//     }
//  }
//  strLength(callback)
//  console.log(newarr)
//queston no.3 =>
// let numbers = [12,3,43,67,54,88,43,67,90,32,45]

// function maximumValue(callback){
//     callback()
// }
// function callback(num){
//     for(let num of numbers){
//         let max = 0;
//         let  i = 0;
//         console.log(max)
//         if(num > max){

//             max = i
//             //console.log(max)
//         }
//     }
//    // return max;
// }
// maximumValue(callback)
// function Welcome(callabck){
//     console.log("fetching data....")
//     setTimeout(()=>{
//         const data= "name:hemant,city:kanina,state:haryana"
//         callabck(data)
//     }, 3000)
// }
// function Greet(data){
//     console.log(data);
// }

// Welcome(Greet)0;