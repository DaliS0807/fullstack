// Q1. Add two numbers //
 let a = 10;
 let b = 12;
 console.log("a+b =", a+b);

 //Q2. Find if the conditions  are obeyed or not //
 
 // You are given two numbers first as A� and second as B� and Check if both conditions 
 // (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
   let A = 8;
   let B = 5;
   let result;
   if(A<10 && B<10 && A>B)
   {
    result = true;

   }
   else{
    result = false;
   }
   console.log(result);

   //Q3 Check the conditions
  // You are given two numbers A�and B�. You need to do the following checks:
  //1.  if both are divisible by 10 console true.
  //2.  if both are not divisible by 10 console false.
  //3.  if one of them only is divisible by 10 console true
  //    By using operators
  let c = 50;
  let d = 60;

  if(c%10 == 0 && d%10 == 0)
  {
    result = true;

  }
  if(c%10 !=0 && d%10 != 0)
  {
    result =false;
  }
  else{
    result = true;
  }
  console.log(result);

  //Q4. Find the first digit of a 4 digit number//
  let num = 2458;
  let n = 2456/1000;
  console.log(Math.floor(n));

  //Q5 Find the last digit of a 4 digit number//
  let num1 = 8765;
  let n1 = 8765 % 10;
  console.log(n1);

  //Q6 Find reminder
  //You are provided with two numbers A� and B�. where A� as divisor and B� as dividend.
  let i =25;
  let j =6;
  result =i % j;
  console.log(result);

  //Q7. Multiply two numbers
  let num2 = 30;
  let n2 = 5;
  result = num2*n2;
  console.log(result);

 
 //Q8 Marks Calculator
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to
// calculate his total marks and his average.
 let sub1 = 50;
 let sub2 =80;
 let sub3 = 50;
 sum = sub1+sub2+sub3;
 avg = sum/3;
 console.log("sum =" +sum, "avg =" +avg);


   
