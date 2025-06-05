const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter(item => item % 2 === 0).map(mappedArr => mappedArr * 3).reduce((acc, curr) => acc + curr, 0);

console.log(result);