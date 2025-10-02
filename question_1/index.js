const mixedArray=['PIZZA', 10, true, 25, false, "Wings"];

function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        const lowerCased = mixedArray
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase());

        if(lowerCased.length > 0){
            resolve(lowerCased);
        } else {
            reject('No strings in array');
        }
    });

}
lowerCaseWords(mixedArray)
    .then(result => console.log("Result in lowercase:", result))
    .catch(error => console.error("Error:", error));
