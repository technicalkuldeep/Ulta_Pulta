const express = require("express");
const app = express() ;

const users = [{
    name: "Kuldeep",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/",function(req,res){
    // write logic here 
    const kdeepKidney = users[0].kidneys;
    const numberOfKidneys = kdeepKidney.length ;  
        
})





app.listen(3001)

