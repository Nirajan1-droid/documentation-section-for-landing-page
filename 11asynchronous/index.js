console.log('start....')
//1
setTimeout(()=>{
    console.log('logic exe..')
},2000)
//i won't wait for you brother , you will rank last 
//give me the output then only i will let you show in the display at the position you will give me 


console.log('start....')

//2
console.log('start....')
//3

//now see some diadvantage of this attitude

let a = 10;
 let b = 0;
  setTimeout(()=>{
    b= 20
  },2000)

  console.log(a+b)
  //b was updated but later after the execution of the operation happens
//we can handle this by callback function
//event loop
