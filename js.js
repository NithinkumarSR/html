'use strict'
// const a=10;
// const b=20;
// console.log(a+b);
//  console.log(20/10);
//  console.log(10*b);
//  const fristName='hi';
//  const lastName='hello';
//  console.log(fristName,lastName);
//  console.log(`${fristName} java `);
//  let x=10+5;
//  x+=10;
//  console.log(x);
//  let  a=5;
//  console.log(a**2);
// console.log(b<a);
// console.log(b>a);
// console.log(b>=20);
// let name$='hi';
// console.log(fristName+lastName);
// console.log(fristName,lastName);
// console.log(fristName+' '+lastName);
     // problem
// let weight=78;
// let heigth=1.69;
// let bmi=(weight/heigth)**2;
// let weight1=92;
// let heigth1=1.95;
// let bmi1=(weight1/heigth1)**2;
// let a=bmi>bmi1;
// console.log(a);
// let weight=95;
// let heigth=1.88;
// let bmi=(weight/heigth)**2;
// let weight1=85;
// let heigth1=1.76;
// let bmi1=(weight1/heigth1)**2;
// let a=bmi>bmi1;
// console.log(a);
           //string
// const a='nithin\n\kumar';
// console.log(a);
// const b=`hi
// hello`;
// console.log(b);
        //if condition
//  const age=15;
//  const x=age>=18;
//  if(x){
//     console.log(`age greater than ${age}`);
//  }  
//  else{
//     console.log(`age less than 18`);
//  }
// const a=1000;
// let b;
// if(a>= 1000){
//     b=1;
// }
// else{
//  b=2;
// }
// console.log(b);
           // problem
// const student1= 'Mark';
// const student2='John';
// let mark1=80;
// let mark2=90;
// if(mark1<mark2){
//     console.log(`'${student2}' BMI (${mark2})is higher than '${student1}'(${mark1})`);
// }
// else{
//     console.log(`'${student1}' BMI (${mark1})is higher than '${student2}'(${mark2})`);
// }
// let a='1789';
// console.log(Number(a)+1);
// console.log(a+1);
// a=Number(a);
// console.log(a+2);
// console.log(Number('hi'));
// console.log(typeof NaN);
// let b=1;
// b=String(b);
// console.log(typeof b);
// console.log(Number(b),b);
           // truthy and falsy
// let x;
// if(x){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
          //=== vs==
//   const a=10;
//   const b='10';
//   if(a===b){
//     console.log("true");
//   } 
//   else{
//     console.log("false");
//   }
//   if(a==b){
//     console.log("true");
//   }
//   else{
//     console.log("false");
//   }
        //prompt it take only string input
// let a=prompt("enter the number");
// if(a==5){
//     console.log("correct number");
// }
// else{
//     console.log("not correct number");
// }
// let a=Number(prompt("enter the number"));
// if(a===5){
//     console.log("5 correct number");
// }
// else if(a===6){
//     console.log("6 correct number");
// }
// else{
//     console.log("not correct number");
// }
// if(a!==5){
// console.log("not correct number");
//}
// let a=prompt("enter the number");
// if(a!=5){
//     console.log("not anumber");
// }
            // && vs ||  vs!
// const a=true;
// const b=true;
// console.log("and operator"+(a && b));
// console.log("or operator"+a || b);
// console.log("not operator"+!a); // not operator check it is false to print true;
             //problem
// let dolphins=(96+108+89)/3;
// let koalas=(88+91+110)/3;
// console.log(dolphins,koalas);
// if(dolphins>koalas){
//     console.log("dolphin is winner"); // ans
// }
// else if(dolphins===koalas){
//     console.log("match is draw");
// }
// else{
//     console.log("koalas is winner");
// }   
         //swtich
// const a =10;
// switch(a){
//     case 5:
//         console.log("a is 5");
//         break;
//     case 10:
//         console.log("a is 10");
//         break;
//     default:
//         console.log("not equal") 
// }
       // ternary operator
    // const a=18;
    // a>=18 ?console.log("true"):console.log("false");
    // const b=98;
    // const c=b>=18 ? 'greater':'smaller';
    // console.log(c);
 const bill=275;
 const tip=bill<=300 && bill>=15? bill*0.15:bill*0.2;
 const  total_bill=bill+tip;
 console.log(`The bill was ${bill}, the tip was ${tip},and total value ${total_bill}`);