let str1 = "hello";
let str2 = "world";
let result = str1.concat(" ", str2)
// first argument of substring is included but second not included
let substring = result.substring(6,11)
console.log(substring)