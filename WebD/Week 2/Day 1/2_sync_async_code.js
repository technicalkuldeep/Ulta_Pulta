// # Example of synchronous code 

// function sum (n) { 
//     let ans = 0 ;
//     for (let i = 1 ; i<= n ; i++ ){
//         ans = ans + i ;
//     }
//     return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum (1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

// -----------------------------------------------------

// # Reading from a file (synchronously)

// const { log } = require("console");
// const fs = require("fs")

// const contents = fs.readFileSync("a.txt" ,"utf-8");
// console.log(contents);



//-------------------------------------------------------

// # Reading from 2 files ( synchronously )

// const { log } = require("console");
// const fs = require("fs")

// const contents = fs.readFileSync("a.txt" ,"utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt" , "utf-8");
// console.log(contents2);


// ---------------------------------------------------------------------------

// # Reading from 2 files asynchronously

// const fs = require("fs") ;

// function read(err, data) {  // read can be of any name 
//     console.log(data);
    
// }

// fs.readFile("a.txt" , "utf-8" , read); // read can be of any name

// fs.readFile("b.txt", "utf-8", read);  // read can be of any name

// console.log("Done!");


// -----------------------------------------------------------------------------

// # setTimeout ( asynch function )

// function timeout() {
//     console.log("Click the button");
    
// }

// console.log("Hi");

// setTimeout(timeout , 15000) ;

// console.log("welcome to the loupe");


// ---------------------------------------------------------------

//# Extended code of above 

// function timeout() {
//     console.log("Click the button");
    
// }

// console.log("Hi");

// setTimeout(timeout , 1000) ; // I/O Intensive task

// console.log("welcome to the loupe");

// let c = 0 ;

// for ( let i = 0 ; i<1000000000; i++) { // CPU Intensive task 
//     c = c + 1;
// }

// console.log("Expensive operation done");
