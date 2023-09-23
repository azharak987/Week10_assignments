// Function to add two numbers and call a callback
function addAsyncCallback(a: number, b: number, callback: (result: number) => void) {
    function afterAddition(sum: number) {
      callback(sum);
    }
  
    setTimeout(() => {
      const sum = a + b;
      afterAddition(sum);
    }, 1000);
  }
    function callbackHandler(result: number) {
    console.log("Callback Example: The sum is:", result);
  }
  addAsyncCallback(2, 3, callbackHandler);
  
  // Function to add two numbers and return a Promise
  function addAsyncPromise(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
      function afterAddition(sum: number) {
        resolve(sum);
      }
  
      setTimeout(() => {
        const sum = a + b;
        afterAddition(sum);
      }, 1000); 
    });
  }
  
  function promiseHandler(result: number) {
    console.log("Promise Example: The sum is:", result);
  }
  addAsyncPromise(2, 3)
    .then(promiseHandler)
    .catch((error) => {
      console.error("Promise Example: Error:", error);
    });
  