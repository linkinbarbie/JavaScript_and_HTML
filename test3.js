//async and await

//async and await are used to make asynchronous programming easy by introducing coroutines.
// A coroutine is a function which can pause its execution and return control to the main loop until
//some event occurs. It is an alternative approach for using callback functions.



function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//without await
function sumAsync_NoAwait(x, y) {
    console.log("Function will run after 5 seconds:")
    return new Promise((resolve, reject) => {
        sleep(500).then(() => {
            resolve(x + y);
        });
    });
}

// let's use the function now
sumAsync_NoAwait(5,7).then((result) => {
    console.log("The result of the addition is:", result);
    }
);

//with await

async function sumAsync_Await(x, y){
    console.log("Testing this with async function and await")
    // this code waits for 5000ms
    await sleep(5000);
    //after waiting. let's calculate and return the value
    return x + y;
}

sumAsync_Await(8,7).then((result) => {
    console.log("The result of the addition is: ", result);
    }
);

//Write an async function which waits 500 milliseconds and then returns the uppercase of a given string. Use the sleep function provided.
async function uppercaseString(s) {
// call the sleep function using await
    await sleep(500);
//run this after the time set above has finished.
    return s.toUpperCase();
}

uppercaseString("edward").then(console.log)
