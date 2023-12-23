// Callback - Promises - Async Await Func
// input  - call stack - event loop -  sync / Async - node API - callback queue - event loop - call stack - output

let one = function () {
    setTimeout(function () {
        console.log("one");
    }, 100);
};
one();

let two = function () {
    setTimeout(function () {
        console.log("two");
    }, 200);
};
two();

let three = function () {
    console.log("three");
};
three();
