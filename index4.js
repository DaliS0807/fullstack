/* QUESTION 1
let arr = [2,4,10,5];
let product = 1;
for(let i= 0; i<arr.length; i++);
{
   
    product=product*arr[i];
}
console.log(product); */


/* QUESTION 2
let arr = [2, 4, 10, 5];
let sum = 0;
for (let i = 0; i<arr.length; i++);
{
sum=sum+arr[i];
}
console.log(sum); */

/* QUESTION 3*/
let A = [4,3,3,3,1,2,2];
let K = 2;
let count = 0;
for (let i = 0; i<A.length; i++)
{
    if(A[i] === K)
    {
        count++;
    }
}
console.log(`Count of ${K} in array:`, count);


/* QUESTION 4*/
let num = [7,1,2,3,4,5,6,7];
let sum = [0,0];
for(let i = 0; i<num.length; i++)
{
    if(num[i]%2===0)
    {
        sum[0]= sum[0]+num[i];

    }
    else{
        sum[1]= sum[1]+num[i];
    }
}
console.log("sum of even numbers:",sum[0]);
console.log("sum of odd numbers:",sum[1]);


/* QUESTION 6
Array A is containing the age of person and your task is to find
and return an array containingthe age of person the age of person that are over 18  */
let N = 7;
let arr1 = [6,11,23,3,45,72,68];
console.log(arr1.filter(a=>a>18));


/* QUESTION 7 Increment the Array elements */
let n = 6;
let arr2 = [5,1,2,3,4,5];
console.log(arr2.map(a=>a+1));




/* QUESTION 8 PASS OR FAIL*/
let n1 = 8;
let arr3 = [7,13,89,45,98,67,45,54];
if(arr3.find(a=>a>32))
    console.log("YES");
else
    console.log("NO");


//QUESTION 9 UNIQUE COLOR SHIRT

let  n2 = 6;
let arr4=[3,2,4,1,2,3];
let count1 = 0;
for(let i = 0; i<n2; i++)
{
    if(arr4.lastIndexOf(arr4[i])==arr4.indexOf(arr4[i]))
    {
        count1++
    }
}
console.log(count1);

/* QUESTION 9 
 The problem statement is simple- given N elements, find the
minimum and maximum numbers among those elements.
Input format
First-line contains N representing the length of the array. The second line contains N space-separated integers.
Output format
Return minimum and maximum elements.
*/
let arr5=[66,33,11,44,66,22,77]
arr5.sort()
console.log(arr5[0]);
console.log(arr5[arr5.length-1]);







