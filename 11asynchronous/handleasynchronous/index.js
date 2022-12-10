
let a = 10;
 let b = 0;

//ormiuse

let waitingdata = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)//we can pass object, array
    },2000)
})
//data is some var returned from the resolve thing from the prmise
waitingdata.then((resolvestr)=>{
    b= resolvestr;
    console.log(a +b)
})
