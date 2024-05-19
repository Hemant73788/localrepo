// console.log("hemant jangra")

//let arr = [23,45,32,44,67,88,90]

// for(let i of arr){
//    if(i % 2 ==0){
//     console.log("even no.",i)
//    }
// }
// function maximumNum(){
//     for(let i of arr){
//         if( i % 2 ==0){
//             console.log("even no.",i)
//         }
//     }
    
// }
// maximumNum(arr)


// arr.forEach((callback)=>{
  
//    }
// )
// function evenNumber(num){
//     if(num % 2 == 0){
//         console.log("even no.",num)
//     }
// }
// arr.forEach(evenNumber)
// let max = 0;
// function largestNumber(){
//     	for(let i of arr){
    		
//     		 if(i > max){
                
//     		 	 max = i
                  
//     			}
//     		}
//     		return max;
//     }
    
//     console.log("maximum no.",largestNumber(max))
    //let str = ['hemant','rahul','manisha','shrikant','vishwajeet'];
// let newarr = []
// for(let i of str){
//     if(i.length > 6){

//         newarr.push(i)
//     }
//    // console.log(i.length)
// }
// //console.log(str)
// console.log(newarr)
// for(let i of str){
    
//     for(let char of str[3]){
//     }
//     console.log(char)
// }
// //console.log(str[3])
// let students= [
//     {name:'hemant',city:'kanina',state:'haryana'},
//     {name:'amit',city:'ateli',state:'punjab'},
//     {name: 'rahul',city:'kosli',state:'rajasthan'}
   
// ]

// for(let key of students){
//     for
// }
// let arr =[12,34,56,65,43,21,44,66,55,44]

// const evenNumber=arr.map((num)=>{
//   return num % 2 == 0;
//   console.log(num)
    
// })
// console.log("even no.",evenNumber)

//let arr = [12,34,32,21,45,54,56,78,87,99,43,21]


// function Add(){
// Sum(12,12)


// }
// function Sum(x,y){
//     console.log("check",x * y)
// }
// Add(Sum)
// str ='Hemant'
// for(let char of str){
//     let a = ''
//     let e = ''
//     let i = ''
//     let o =''
//     let u = ''
// if(char === a || char === e || char === i || char === o || char === u ){
//     console.log("vowel",char)
// }
// }
   
// const maxValue = arr.reduce((max,currentval)=>{
//     if(currentval > max) return currentval;
//     return max;
// })
// //console.log(maxValue)
// Math.max(4,6)
// const votes =['y','n','y','y','n','y','y','y','n','n','y','y','n','n','n','y','n','y','y']
    

// const results = votes.reduce((tally,val)=>{
    
//     if(tally[val]){
//         tally[val]++
//     }else{
//         tally[val] = 1
//     }
//     return tally;
// }, {})
// // console.log(tally)
// console.log(results)

// 
// let arr = [12,34,21,33,21,44,56]
// arr.max
//()
// function value(a,b,c,d){
//     console.log("a",a)
//     console.log("b",b)
//     console.log("c",c)
//     console.log("d",d)
// }
// const colours= ["white","blue","red","balck"]
// const str = "hemu"
// let name =["montu",'bantu','hemant'];
// let colours=['white','black','red','green'];
// let fruits=['apple','orange','banana','mango'];
// let vegetables=['cabbage','tomato','potato','onion']

// let things=[...colours,...fruits]

// let studentdetails =[
//     {name:'hemant',email:'hemant@gmail.com',password:'12345'},
//     {name:'rahul',email:'rahul@gmail.com',pasword:'3629879'},
//     {name:'amit',email:'amit@gmail.com',pasword:'3564879'},
//     {name:'varun',email:'varun@gmail.com',pasword:'3654748678'}
//  ]
// // function studentDetail(){
//      for(let i of studentdetails){
//         console.log(i)
//      }
// }
// studentDetail(studentdetails[2])
// const amit =studentdetails[2]
// console.log(amit)
//const[hemant,rahul,amit,varun]=studentdetails;
//const[hemant,...others]= studentdetails;
// const student ={
//     name:'hemant',
//     last:'jangra',
//     city:'kanina',
//     class:'12th'
 //}
// const{name,city}= student
//const{name:firstname}=student
//const{firstname}=student
//const[,{email}] =studentdetails
// function print(person){
//     const{name,city}=student
//     console.log('${name},${city}')
// }
// print(student)
// const math = require('./mymath');
// //const math = ""
// const getstats= (arr)=>{
//     const max = math.max(...arr)
//     const min=math.min(...arr)
//     const sum = arr.reduce(sum,r)
//     const avg = sum/arr.length

//     return{
//         max:max,
//         min:min,
//         sum:sum,
//         avg: avg,
//     }
// }
// const reviews = [34,12,56,32,67]
// const stats = getstats(reviews)
// console.log(stats)
// // function pick(arr){
// //     const idx= math.floor(math.random() * arr.length);
// //     return arr[idx];
// // }
// // function getCards() {
// //     const values=[  '1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
      
// //     const suits =['clubs','spades','hearts','diamonds']
// //     const value = pick(values)
// //     const suit = pick(suits)
// // return{
// //     value,suit
// // };
// // }
// // console.log(getCards)

// const role = 'actor';
// const person='hemant'
// const role2 = 'villane';
// const person2='rahul'

// const team ={};
//     team[role]= person
//     team [role]=person2
   // console.log(team)
//    const team ={

//        [role]:person,
//        [role2]:person2,
//        [1+4+5]:'ten'
//    };
// const add = function(x,y){
//     return x * y
// }

// const math={
//     add
// };
// const math={

//     numbers:[1,3,5,6,7,9],
//     add:function(x,y){
//         return x + y
//     },
//     multiply:function(x,y){
//         return x * y
//     }
// }

// const greet=function(){
//     console.log("hi")
//     console.log(this)
// }

// const student={
//     first: 'hemant',
//     lastname: 'jangra',
//     nickname: 'hemu',
//     fullName() {
//         const {
//             firstname,
//             lastname,
//         }=this
//         console.log('${firstname}, ${lastname}')
//     }
// }
// const annoyer = {
//     phrases:["jhfwlk","dkjfgi","jcmxb",'bksdbvls',"wksbcal"],
//      pickphrase(){
//      const{
//         phrases} =  this;
//      const idx= Math.floor(Math.random()* phrases.length)
//      return phrases[idx]
//     },
//     start(){

//     }
// }
//Math.random()
// const add=functon(){
//    return Math.random()
// }