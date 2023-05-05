let a=20;
let b=0;


let waitingData= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})

waitingData.then((data)=>{
   b=data;
   console.log(a+b)
})


let c = 10;
let d = 15;

let waitingData2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(25);
    }, 2000);

})

waitingData2.then((data) => {
 console.log(c+data) ;

})