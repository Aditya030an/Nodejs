

//node js is a asyn programing language
console.log("Start exe...")

setTimeout(()=>{
    console.log("Login exe...");
} , 2000);


console.log("complete exe...")

//DrowBack
let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
} , 2000);


//use Promices for drwaBack
let waitData = new Promise((resolve , rejects)=>{
    setTimeout(()=>{
        resolve(30);
    } , 2000)
}).then((data)=>console.log("watingData" , a+data));
console.log("normal data" , a+b); //output = 10 , but b will updat after 2 sec 
