
// async function helloAsync(){
//     return "helloAsync";
//   }
  
// console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
 
// helloAsync().then(v=>{
//    console.log(v);         // helloAsync
// })

function testAwait(){
    return new Promise((resolve) => {
        setTimeout(function(){
           console.log("testAwait");
           resolve('aaaa');
        }, 1000);
    });
 }
  
 async function helloAsync(){
     return await Promise.resolve('dddd')
    // await testAwait();
    // console.log(c)
    // console.log("helloAsync");
  }

 helloAsync().then((data)=>{
     console.log(data)
 });