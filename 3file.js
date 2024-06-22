//read , create or write , delete , manupulate files or called as CRUD (create , read , update , delet)
//IMP => use Sync for(rwd) form console side with Sync for file side
const { log } = require('console');
var fs = require('fs');

//1 read file
// fs.readFile('./2calc.js' , 'utf-8' , function(err , data){
//     console.log(data);
// })

//2 create or write file
// fs.writeFile('4newFile.js' , 'console.log("new File")' , function(err){
//     console.log("Data save");
// });

//4 manupulate
// fs.writeFile('2calc.js' , 'console.log("done")' , function(err){
//     console.log("It will change the whole code");
// })
//but
// fs.appendFile('2calc.js' , 'console.log("done");' , function(err){
//     console.log("It will not change the whole code just add new code");
// })

//3 delete file
// fs.unlink('4newFile.js' , function(err){
//     console.log("Deleted");
// })


//how to create , delete file by console use process.argv (argumnet vector)
// Sync for console controlling
// const input = process.argv;
// process is an arry
// input node index.js operation(add , remove) file name message
//         0    1                2                3         4
// if( input[2] == "add" ){
//     fs.writeFileSync(input[3] , input[4]);
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invelid Input")
// }



//if i want to add multipul file in some foulder so we use path and loop for creating multipal files
// const path = require('path');
// const dirPath  = path.join(__dirname);
// console.log("DirPath" , dirPath);
//if i want the path of new Folder which i create NewPathFolder use (__dirname , "Folder Name")

// const newDirPath = path.join(__dirname , 'NewPathFolder')
// console.log("New Folder Path" , newDirPath);

//if I wnat to make a single file in newDirPath so i simply write a 
// fs.writeFileSync(newDirPath + "/hello.txt" , "a single file");

// //for multipal file let say 5
// for(let i =0 ; i<5 ; i++){
//     fs.writeFileSync(`${newDirPath}/hello${i}.txt` , `Add multipal file name -> hello${i}.txt`);
// }

//if i want to print the file inside the folder
//        (folfer path dir , files) here fils are in array form if you want to axcess the perticular file so do file[number]
// fs.readdir(newDirPath , (err , file)=>{
//     // display all file
//     // console.warn(file);

//     //but perticular file that is i want to axcess the file hello3.txt so its index will be 4
//     // console.warn(file[4]); //op hello3.txt

//     //list of all files in folder newPathFolder
//     file.forEach((item)=>{
//         console.log("File name is ->" + item);
//     })
// })

// const fileName = path.join(__filename);
// console.log("File name" , fileName);



//take about CRUD operation
//the all operation are right but i want to perfoem inside a new folder called fruitNameCRUD.js
const path = require("path");

const dirCRUDFile = path.join(__dirname , "FruitNameCRUD.js");
// console.log("CRDU " , dirCRUDFile);
const filePath = `${dirCRUDFile}/apple.js`;

//write Create
// fs.writeFileSync(filePath , "console.log('This ia a Apple File');");

// //read
// fs.readFile(filePath , "utf-8" , (err , data)=>{
//     // if(!err){
//     //     console.warn("Data inside File" , data);
//     // }
//     // else{
//     //     console.warn("Error");
//     // }
//     console.warn("Data inside File->" , data);
// })

//updata
// fs.appendFile(filePath , "console.log('Updata Fruit to orange');" , (err)=>{
//     if(!err){
//         console.warn("Update ");
//     }
//     else{
//         console.warn("error-> " , err);
//     }
// });

//rename
// fs.rename(filePath , `${dirCRUDFile}/orange.js` , (err)=>{
//     if(!err){
//         console.warn("Change file name" );
//     }
//     else{
//         console.warn("Err" , err);
//     }
// });


//delete but file name is update to orange.js
// fs.unlink(`${dirCRUDFile}/orange.js` , (err)=>{
//     if(!err){
//         console.warn("Deleted file");
//     }
//     else{
//         console.warn('err' , err);
//     }
// });
