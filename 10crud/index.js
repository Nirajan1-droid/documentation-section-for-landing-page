const fs = require('fs')
const { dirname } = require('path')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/fruit.txt`

// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf8',(err , item )=>
// { 
//     console.log(item )

// })//this shows us the item which is in the filepath dirname , we have printed that
//buffer is the temp memory and to resolve the buffer issue we have utf8 in the file command
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("filename is updated")
// })//by this we can update the name of the file 

// fs.appendFile(filePath,'and file name is apple.txt',(err)=>
// {
//     if(!err) console.log("file is updated")
// })//update refers to adding the update into the existed file without deleting it

fs.unlinkSync(filePath,`${dirname}/fruit.txt`,(err)=>{
    if(!err) console.log('delteted sucessfully')
})
