

///Promises - basics of asynchronous programming

///Asynchronous programming basically enables different parts of code to run at changing times instead of immediately
//mostly required when we want to fetch information from some remote server and writing code that does something with what the server returned
//in this example, most APIs which require waiting for a function to do something. APIs by their very nature are
//asynchronous because we are waiting for the functions to do something. Since the fetch function will return something which is
//not exactly the result but will eventually be. This thing we need fetch function to return is the 'Promise' in Javascript.

// function getServerStatus()
// {
//     const result = fetch("/server/status");
//
//     result.then(function(status) //then function is one of the methods of the 'Promise'
//     {
//         console.log("The status from the server is: ", status.ok);
//     })
// }

//The Promise Object
// A Promise is a native JS object has two traits
//1. Receives a single argument which is a function.
//1b. This function needs two arguments - resolve and reject function.
//1c. The code inside the promise needs to use one of these two functions.
//2.It can be waited on using the 'then' method(and other similar methods) or await.

//An asynchronous function is defined by a function, which instead of returning the value it was
//supposed to return, it returns a Promise object, which will eventually resolve and give the user the anser

//e.g. lets say we would like calculate the sum of two numbers, but by writing a function which
//returns a Promise and note the value.

function sumAsync(x,y) {
    const p = new Promise((resolve, reject) => {
        //this resolves the promise we just created within the output of x + y
        resolve(x + y);
    });

    //This returns the promise, not the value
    return p;

}

sumAsync(5,7).then((result) => {
        console.log("The result of the addition is:", result)
    }
);

//a good use of the Promise is when we need the calculation to happen indirectly, for example, after waiting a while or when retrieving
//information from the server using the fetch command for example. Here is the updated calculation intended to resolve after 5 seconds

function sumAsync_Test(x,y) {
    console.log("1. sumAsync is executed");
    const p = new Promise((resolve, reject) => {
        //run this 5000ms from now
        setTimeout(() => {
            console.log("4. Resolving sumAsync's Promise with the result after 5000ms")
            resolve(x + y);
        }, 5000);

        // we don't need to return anything
        console.log("2. sumAsync Promise is initialized");
    });
    console.log("3. sumAsync has returned the Promise");
    return p;
}

//lets use the function now
sumAsync_Test(5,7).then((result) => {
    console.log("5. The result of the addition is:", result);
});


//Rejecting promises;
//In a synchronous flow, if we want to tell the user that something went wrong he can catch an exception we throw
//an exception using the throw argument. With promises, we need to trigger the reject function instead.

function sumAsync_Tests(x,y) {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative values received");
            } else {
                resolve(x + y);
            }
        }, 500);
    });

}

sumAsync_Tests(-5,7).then((result) => {
    console.log("The result of the addition is: ", result);
}).catch((error) => {
    console.log("Error received: ", error);
});

//write a function which receives a string and returns a promise
//the promise should resolve with the uppercase version of the string, but reject if the string is null

function upperCaseAsync(s){
    return new Promise((resolve, reject) => {
        if(s == null){
            reject();
        }
        else {
            resolve(s.toUpperCase());
        }
    });
}

upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!")
});

