
// console.log("Hello")

// const name = "Nitisha"
// console.log(name)


// pro-1
// const a=7
// if (a%2==0)
// {
//     console.log("number is  even")
// }
// else{
//     console.log("number is odd")
// }

// console.log("Atmiyaaaa")

// pro-2
// var num1=10
// var num2=20
// if(num1>=num2){
//     console.log("num1 is big")
// }
// else{
//     console.log("num2 is big")
// }

// pro-3
// const year=2024
// if(year%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }

// pro-4
// var num=5
// var sum=0
// for(let i=1;i<=num;i++)
// {
//     sum+=i
// }
// console.log(sum)

// pro-5
// var num=4
// var f=2
// for(var i=num;i>0;i--)
// {
//     f*=i
// }
// console.log(f)

// pro-6
// const num =3
// for(let i=1;i<=10;i++)
// {
//     console.log(`${num} x ${i}=${num*i}`)
// }


// import add from "./add.js";
// console.log(add(20,24));
// console.log(add(10,40)) ;


// const add = require("./add.js");
// console.log(add(20,24));
// console.log(add(10,40)) ;


// pro-7

// let num1 = 1234;
// let result = num1.toString().split('').reverse().join(' ');
// console.log(result)

// console.log(reversedNumber(1234));


// let number = 1234;
// let reversed=0;

// while(number>0){
//     let digit = number%10;
//     reversed =reversed*10+digit;
//     number=Math.floor(number/10);

// }
// console.log(`${reversed}`)


// pro-8
// function isPali(num){
//     let s = num.toString();
//     let reversed = s.split('').reverse().join('');
//     return s===reversed ? 'Palindrome':'Not Palindrome';
// }
// console.log(isPali(121))

// pro-9
// function isPri(num){
//     if(num<=1)return'Not prime';
//     for (let i=2; i<=Math.sqrt(num);i++){
//         if(num %i===0)
//         return 'Not prime';
// }
//   return'Prime';
// }
// console.log(isPri(11))


// pro-10
// let num = 5023;
// let count =0;
// while(num>0){
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(`${count}`)

// pro-11
// function sumDigit(num){
//     let numStr = num.toString();
//     let sum=0;

//     for(let digit of numStr){
//         sum +=parseInt(digit);
//    }
//    return sum;
// }
// console.log(sumDigit(123));


// pro-12
let sum = 0;
const number = 153
let temp = number;
while (temp > 0) {
   
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}


// pro-13

const number = 5;
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// pro-14

let s = 'g';
if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u' ||
    s === 'A' || s === 'E' || s === 'I' || s === 'O' || s === 'U') {
    console.log(`${s} is a vowel`);
} else {
    console.log(`${s} is a consonant`);
}

// program-15
let x = 4
let y = 2;
let a = x + y;
let b = x - y;
let c = x*y;
let d = x/y;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

 
  
  