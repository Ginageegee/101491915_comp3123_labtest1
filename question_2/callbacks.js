
function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved!");
      }, 500);
    });
  }
  
 
  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Promise rejected!");
      }, 500);
    });
  }
  
 
  resolvedPromise()
    .then(result => console.log("Message:", result))
    .catch(error => console.error("Error:", error));
  
  
  rejectedPromise()
    .then(result => console.log("Message:", result))
    .catch(error => console.error("Error:", error));
  