//Ques.1

let n = 6;
for (let i = 1; i < n; i++)
     {
    let print = "*  ";
    console.log(print.repeat(i));
}

//Ques.2
for (let i = 1; i <= 45; i++)
{
    if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    if (i % 5 == 0)
    {
        console.log("Buzz")
    }
    if((i % 3 == 0) && (i % 5 == 0))
    {
        console.log("FizzBuzz");
    }
}

//Ques.3

var numbersArray = [1, 13, 22, 123, 49];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("Sum:", sum); 


//Ques.4

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sum1 = 0, sum2 = 0;

for (let i = 0; i < arr_1.length; i++) {
  sum1 += arr_1[i];
}
for (let i = 0; i < arr_2.length; i++) {
  sum2 += arr_2[i];
}

let total = sum1 + sum2;
console.log(`${sum1} + ${sum2} = ${total}`); 


//Ques.5

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}