//1 find the square of a number
/*
let myNum=20
console.log(`Square is ${myNum*myNum}`);
*/

//2 swap two number
/*
let a = 50
let b = 80
let temp
temp=a
a=b
b=temp
console.log(`After Swapping a ${a} And b ${b}`);
*/

//3 Simple Calculating Using Arthemitic Operator\
/*
let a=80
let b=60
console.log(`Addition Two Number ${a+b}`);
console.log(`Sub Two Number ${a-b}`);
console.log(`Mul Two Number ${a*b}`);
console.log(`Div Number ${a/b}`);
console.log(`Rem Two Number ${a%b}`);
*/

//4 check vowel or consonant
/*
let ch="maruf".toLowerCase()
if("aeiou".includes(ch)){
    console.log(`${ch} is a vowel`);
}else{
    console.log(`${ch} is a consonant`);
}
*/

//5 find the largest number
let num1=20
let num2=100
let num3=99
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is a largest number`);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is a largest number`);
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3} is a largest number`);

}