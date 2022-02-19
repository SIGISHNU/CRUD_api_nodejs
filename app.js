const express = require('express');
const router = require('./router/route')



const app = express();


app.use(express.json())

app.use('/',router)

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})