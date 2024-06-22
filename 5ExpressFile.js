const express = require('express');
const app = express();

//req comes from clint side and based on request response will be generate from server side

app.get('' , (req , res)=>{
    console.log("Data send from user side" , req.query);  //object
    console.log("Data send from user side" , req.query.name);  //inside object data
    // const userName = req.query.name;
    // res.send("Hello , this is home Page with user name-> " + req.query.name); // use this add sign(+) 
    // res.send(`<h1>Welcome ${req.query.name}</h1>`);

    // HTML
    res.send(`
        <h1>Welcom to Home page</h1> 
        <a href="/about">Go to About Page</a>
    `)
});

app.get('/about' , (req , res)=>{
    // res.send("Hello , this ia about page");
    res.send(`
        <input type='text' placeholder="Enter Your Name" value="${req.query.name}"/>
        <button>"Click me"</button>
        <h2>Name -> ${req.query.name}</h2>
        <a href="/"> Go to home page</a>
    `);
});

//render data
app.get('/help' , (req , res)=>{
    // res.send("Hello , this is a help page");
    res.send([
        {
        name:'ABC',
        email:'ABC@gmail.com',
        },
        {
        name:'PQR',
        email:'PQR@gmail.com',
        },
        {
        name:'XYZ',
        email:'XYZ@gmail.com',
        },
])
})

app.listen(8080);