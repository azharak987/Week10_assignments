// Function to add two numbers and call a callback
function addAsyncCallback(a, b, callback) {
    function afterAddition(sum) {
        callback(sum);
    }
    setTimeout(() => {
        const sum = a + b;
        afterAddition(sum);
    }, 1000);
}
function callbackHandler(result) {
    console.log("Callback Example: The sum is:", result);
}
addAsyncCallback(2, 3, callbackHandler);
// Function to add two numbers and return a Promise
function addAsyncPromise(a, b) {
    return new Promise((resolve) => {
        function afterAddition(sum) {
            resolve(sum);
        }
        setTimeout(() => {
            const sum = a + b;
            afterAddition(sum);
        }, 1000);
    });
}
function promiseHandler(result) {
    console.log("Promise Example: The sum is:", result);
}
addAsyncPromise(2, 3)
    .then(promiseHandler)
    .catch((error) => {
    console.error("Promise Example: Error:", error);
});
export {};
