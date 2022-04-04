const arr = [1, 2, 3, 4, 5];

const map = (givenArr) => {
    let returnedArr = [];
    givenArr.forEach((num) => {
        returnedArr.push(num * 2);
    })
    return returnedArr;
}

console.log(map(arr));
