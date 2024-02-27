 var express = require('express')
 var cors = require('cors')
 var app = express()

 app.use(cors())

 app.get('/',(req,res) => {
     res.send("The server is ready for use! ");
 });
 app.get('/cars',(req,res) => {
    const collection = [
    { id: 1, name: "Lionel Messi", ballon_dors: 7 },
    { id: 2, name: "Cristiano Ronaldo ", ballon_dors: 5 },
    { id: 3, name: "Michel Platini", ballon_dors: 3 },
    { id: 4, name: "Johan Cruyff", ballon_dors: 3 },
    { id: 5, name: "Marco van Basten", ballon_dors: 3 },
    { id: 6, name: "Zinedine Zidane", ballon_dors: 1 },
    { id: 7, name: "Ronaldo Nazário", ballon_dors: 2 },
    { id: 8, name: "Ronaldinho", ballon_dors: 1 },
    { id: 9, name: "Franz Beckenbauer", ballon_dors: 2 },
    { id: 10, name: "Alfredo Di Stéfano", ballon_dors: 2 }
        
    ];
   
    res.send(collection);
});

//fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})
const port = process.env.PORT || 3000 ;

app.listen(port , ()=>{
    console.log(`PORT ready at http://localhost:${port}`) ;
})