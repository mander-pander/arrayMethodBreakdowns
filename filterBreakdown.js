const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter (givenArr, callback) {
    let returnedArr = [];

    for(let i = 0; i < givenArr.length; i++) {
        let currentElement = givenArr[i];
        let result = callback(currentElement);

        if(result) {
            returnedArr.push(currentElement);
        }
    }
    return returnedArr;
}

function isEven(num) {
    if  (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
