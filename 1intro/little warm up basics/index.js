const arr = [ 1,2,3,4,5,3,7,8,9];
console.log(arr[0])
// console.log(app.z())
//filter function takes paramater as the input 
// filter uses loop auto
let result = arr.filter((item)=>{
    return item ===3
})
console.warn(result)