// console.log("hemu");
// console.log("hemant jangra");
// f
// function asyncfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success")

//         },2000)
//     })
// }
// console.log("fetching some data 1")

// let p1 = asyncfunc();
// p1.then((res)=>{
//     console.log(res);
// })

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("success")
//         },3000)
//     })
// }
// async function getweatherData(){
//     await api();//1st
//     await api();//2nd
// }
// function getData(DataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", DataId);
//             resolve("success")
//         },2000)
//     })
// }
// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }
// const URL = "https://cat-fact.herokuapp.com/facts";

//     const getFacts=async()=>{
//         console.log("getting data.....")
//         let response= await fetch(URL);
// console.log(response);

    // }
//    function asyncfunc(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("Data1");
//                 resolve("success");
//             },3000)
//         })
//     }
//     console.log("fetching data1");
//     let p1=asyncfunc();
//     p1.then((res)=>{
//         console.log(res)
//     })
//     console.log("hemant")
//     console.log("how are you")
    
// const promisethree = new promise((resolve,reject)=>{
//     setTimeout(()=> {
//         console.log("async resoled")
//         resolve({username:"hemant jangra",email: "jangrahemant.com"})
//     },2000)
// })
// promisethree.then((user)=>{
//     console.log(user)
// }
// )
//  function promiseOne (){

//      return new promise((resolve,reject)=>{
//              setTimeout(()=>{
//                      console.log("async task is completed");
//                      resolve("success")
//                  },2000)
//              })
//             } 
// console.log("fetching data");
// let p2 = promiseOne();
// p2.then((res)=>{
//     console.log(res)
// })     
    // const promiseOne = new Promise(function(resolve,reject){
    //     setTimeout(()=>{
    //         console.log("async task is completed");
    //         resolve();
    //     },2000)
    // })
    // promiseOne.then(()=>{
    //     console.log("promised consumed")
    // })
    
    // const promisethree = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         console.log("");
    //         resolve({username: "hemant kumar",email: "hemantkumar.com"})
    //     },2000)
    // })
    // promisethree.then((user)=>{
    //     console.log(user)
    // })
//     const promisefour = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let error = true
//             if(!error){
//                 resolve({username:"hemant",password:"1234"})
//             }else{
//                 reject('ERROR:Something went wrong')
//             }
//         },2000)
//     })
//  promisefour
//  .then((user)=>{
//  console.log(user);
// return user.username

// })
// .then((username)=>{
//     console.log(username)

// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log("the promise is either resolved or rejected")
// )

// const promisefive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//                     if(!error){
//                         resolve({username:"javascript",password:"1234"})
//                     }else{
//                         reject('ERROR:js went wrong')
//                     } 
//     },2000)
// })
// async function consumePromiseFive (){
//     try{
//         const response = await promisefive
//         console.log(response);

//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()
// let check = new Promise ((resolve,reject)=>{

//     setTimeout(()=>{
//         // console.log("check");
//         resolve("check");
//     },2000)
// })
// check.then((mes)=>{
//     console.log(mes)
//  })
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("async task is completed");
//         resolve();
//     },2000)
// })
// promiseOne.then(()=>{
//     console.log("promised consumed")
// })

// const count = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data 1");
//         resolve("name:hemant kumar","pincode:123027")
//     },2000)
// })
// console.log("")
// console.log("fetching data 1")
// count.then((res)=>{
//     console.log(res)count
// })
// let promise = new Promise(function (resolve, reject) {
// 	reject('Promise Rejected')
// })

// promise
// 	.then(function (successMessage) {
// 		console.log(successMessage);
// 	}, function (errorMessage) {
// 		//error handler function is invoked 
// 		console.log(errorMessage);
// 	});
// function getData(dataId,getNextData) {
//     setTimeout(()=>{

//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(heamnt)
//     })
// });
//

// const getPromise = () => {
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise")
//       resolve("success")  
//     })
   
// }
// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled")
// })

// new Promise((resolve,reject)=>{
//     console.log("i am a promise")
//     resolve(123);
// })










// async function hello(){
//     console.log("hello")
// }
// function  api(){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("weather data")
//         resolve(200)
//        },2000)
//     })
// } 
// async function getWeatherData(){
//     await api();
// }





// function getData(dataId,getNextData) {
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
    
//             console.log("data",dataId);
//             resolve("success")
           
//         },2000)
//     })
//        }
//        //promise chain
//         getData(1).then((res)=>{
//         console.log(res);
//         getData(2).then((res)=>{
//             console.log(res)
//         })
//        })











    //    console.log("getting data1")
    // getData(1,()=>{
    //     console.log("getting data2")
    //     getData(2,()=>{
    //         console.log("getting data3")
    //         getData(3,()=>{
    //             console.log("getting data4")
    //             getData(4)
    //         })
    //     })
    // });
// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1")
//             resolve("success");
//         },3000)
//     })
// }
// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 2")
//             resolve("success");
//         },3000)
//     })
// }
// console.log("fetching data 1")
//     asyncfunc1().then((res)=>{
       
//         console.log("fetching data 2")
//  asyncfunc2().then((res)=>{
//  })
//     })
    // console.log("fetching data 2")
    // let p2 = asyncfunc2();
    // p2.then((res)=>{
    //     console.log(res)
    // })
  // console.log("hemant")
// const URL = "https://cat-fact.herokuapp.com/facts"
// const factPara =document.querySelector("#fact")
// const btn = document.querySelector("#btn");

// const getFacts =async ()=>{
//     console.log("getting data.....")
//     let response = await fetch(URL);
//     console.log(response);
//     // Response.json();
//     let data = await response.json();
//     factPara.innerText = data[4].text;
// }
// function getFacts(){
//     fetch(URL).then((Response)=>{
//         return Response.json();
//     }).then((data)=>{
//         console.log(data)
//         factPara.innerText = data[4].text;
//     })
// }
//  btn.addEventListener("click",getFacts)