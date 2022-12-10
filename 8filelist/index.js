const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,"files")//files dir path join gar
console.warn(dirPath)
//loop i for increment the dir list and the string will to every files 
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath +"/apple"+i+".txt","simple text file")
// }


// fs.writeFileSync('apple.txt','filelistlesson')

fs.readdir(dirPath,(err,files)=>
{
    console.warn(files)//returns the thing inside the file dir 
    //right now we have the name of the txt file inside the files
    

    //so to get the content of the file inside the respective txt file we have

    files.forEach((item)=>{
        console.log("file name is:",item)
        
    })
})