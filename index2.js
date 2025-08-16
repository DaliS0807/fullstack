
//Q1.Find Grades
//Your school has the following grading system based upon the marks (M) obtained by a student:
// If M≤10, the grade will be E. //If 11≥M≤20, the grade will be D.
// If 21≥M≤30, the grade will be C.
//If 31≥M≤40, the grade will be B.
//If 41≥M≤50, the grade will be A.
//Constraints
//0≤M≤50 

let m =45;
let grade; 
switch (true) 
{
    case (m <= 10):
        grade = 'E';
        break;
    case (m>= 11 && m<= 20):
        grade = 'D';
        break;
    case (m>=21 && m<= 30):
        grade = 'C';
        break;
    case (m>=31 && m<= 40):
        grade = 'B';
        break;
    case (m>=41 && m <= 50):
        grade = 'A';
        break;
    default:
        grade = 'Invalid marks';
}
 console.log(grade);


 /*
Q2. Get Value
You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |*/
//C will be one of the following characters:[P,p,Z,z,E,e,D,d].

let c="Z";
switch (true) 
{
    case (c=="P" || c=="p"):
        console.log("PrepBytes");
        break;
    case (c=="Z" || c=="z"):
        console.log("Zenith");
        break;
    case (c=="E" || c=="e"):
        console.log("Expert Coder");
        break;
    case (c=="D" || c=="d"):
        console.log("Data Structure");
        break;
}

//Q3.Find the maximum out of three.
// If all the three are same print -1-1.
let n1=2
let n2=5
let n3=4
let max;
if(n1>n2)
{
    if(n1>n3)
        max=n1
}
else if(n2>n1)
{
    if(n2>n3)
        max=n2
}
else
    max=n3
console.log(max);

/*Q4.Second smallest
constraints
1<=X, Y, Z<=500
X!=Y!=,Y!=Z!=,X!=Z */

let x = 2;

let y = 9;

let z = 23;

if (x > y && x < z)
     {
    secondsmalles = x;
} 
else if (y > x && y < z )
    {
    secondsmalles = y;

}
 else 
    {
    secondsmalles = z;
}

console.log(secondsmalles);

//Q 5. CHECK whether the triangle is Acute or Obtuse
//Constraints
//0<=A, B, C<=180

 let i = 60;

 let  j= 100;

 let  k= 20;
  if (i > 90 || j> 90 || k> 90) 
    {
     res = "obtuse";
  }
   else 
    {
    res = "acute";
  }

  console.log(res);
  