// 01. check is this array.
function arrayCheck(ele){
    return Array.isArray(ele)
}
arrayCheck([])
arrayCheck({})

// 02. how to empty array in JavaScript ? do not reset it to a new array and do not loop through to pop each value.




// 03. Given an array of numbers, write a function that returns a new array containing only the even numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEvenNumber = (arr) => {
    const newArr = arr.filter((num) => num % 2 === 0)
    return newArr
}

// 04. Given an array of prices, write a function to calculate the total cost (sum of all prices).
const prices = [29.99, 19.99, 4.99, 99.99];
const totalSum = prices.reduce((acc,num) => acc + num,0)

// 05. Write a function that finds the first number in an array that is greater than 50.
const numbers = [10, 45, 60, 30, 70];

const bigNum = numbers.find((num) => num > 50)

// 06. Given an array of strings, find the longest word.
const words = ['apple', 'banana', 'watermelon', 'kiwi', 'grape'];

const longestWord = (arr) => {
    return arr.reduce((longest,current) => {
        return current.length > longest.length ? current : longest
    },'')
}

// 07. Given an array, write a function to remove duplicate values.
// const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];

const removeDuplicates = (arr) => [...new Set(arr)];

// 08. Given multiple arrays, write a function that merges them and returns an array of unique values.
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [5, 6, 7];

const mergeUniqueValues = (...arrays) => {
    return [...new Set(arrays.flat())];
};
// console.log(mergeUniqueValues(array1, array2, array3));

// 09. Given an array of objects with name, age, and score, sort the array by score in descending order. If two scores are the same, sort by age in ascending order.

const people = [
    { name: 'Alice', age: 25, score: 90 },
    { name: 'Bob', age: 30, score: 85 },
    { name: 'Charlie', age: 25, score: 85 },
    { name: 'David', age: 28, score: 90 }
];

const sortByScore = (arr) => {
    return arr.sort((a,b) => {
        if(b.score == a.score){
            return a.age - b.age
        }
        return b.age - a.age
    })
}
// console.log(sortByScore(people));

// 10. number integer or not
const a = 12;

if(a % 1 === 0){
    const num = a % 1 === 0
    // console.log("integer",num," nnn", a);
}else{
    // console.log("not integer !!!!",a);
}

// 11. make array duplicate
const duplicateArray = (arr) => {
    return arr.concat(arr)
}
// console.log(duplicateArray([1,2,3,4,5]));


/* function problem */

// 12. 