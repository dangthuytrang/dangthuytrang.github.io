//1 a. Write a program to print out
7 numbers, starting from 0 (no user input)
for (let i=0; i<=6; i++){
console.log(i);
}
// b. n numbers, starting from 0, n entered by user
let n=Number(prompt("enter your number"));
for (i=0; i<n; i++){
    console.log(i);
}
//c. A sequence of numbers, starting from 3, ending before n, n entered by user

let n=Number(prompt("enter your number"));
for (i=3; i<n; i++){
    console.log(i);
}
//d. A sequence of numbers, starting from c, ending before n, c and n entered by use
let c=Number(prompt("enter the start number"));
let n=Number(prompt("enter n"));
for (let i=c;i<n;i++){
    console.log(i);
}
// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
let c=Number (prompt("enter the start number"));
let n=Number(prompt("enter n"));
for(let i=c;i<n;i=i+3){
    console.log(i);
}
// f.A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
let c=Number (prompt("enter the start number"));
let n=Number(prompt("enter n"));
let s=Number(prompt("enter s"));
for(i=c; i<n; i=i+s){
    console.log(i);
}
// 2. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
let n = Number(prompt("enter n"));
answer = factorial(n)
alert(`The factorial of ${n} is ${answer}`);
//3. Write a program asking users their age, and then decide if they are old enough to view a 14+ content

let age=Number(prompt("How old are you?"));
if (age<14){
    alert("You are not old enough to view this content");
}
else{
    alert("Enjoy!");
}

// 4.Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

let x = Number (prompt ("enter x"))

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const half = Math.ceil(list.length / 2);    

if (x>=0 && x<half){
    alert("Lower half of 9")
}
else if (x>=half && x<=9){
    alert("Higher half of 9")
}
else{
    alert("Invalid number")
}
// 5. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let x = Number (prompt ("enter x"));
let n = Number(prompt("enter n"));
const half = Math.ceil((n+1)/2);
if(0<=x && x<half){
    alert(`${x} is in lower half of ${n}`)
}
else if (x>=half && x<n){
    alert(`${x} is in higher half of ${n}`)
}
else if(x==n){
    alert(`${x} is equal of ${n}`)
}
// 6. Write a script to check if a number is even (divisible by 2) or odd number
let x = Number (prompt ("enter x"));
if (x%2==0){
    alert("x là số chẵn");
}
else{
    alert("x là số lẻ");
}
// 7. Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s
const list = [1, 2, 3, 4, 5, 6]
const half = Math.ceil(list.length / 2);    

const lowHalf = list.splice(0, half);
const highHalf = list.splice(-half);
console.log(`L ${lowHalf}`);
console.log(`H ${highHalf}`);

// b. n L’s and H’s in total, n entered by user
let n = Number (prompt("Enter n"));
const half = Math.ceil(n / 2);
let i=1;
for (; i<=half; i++){
    console.log(`L ${i}`);
}
for (; i>half && i<=n; i++){
    console.log(`H ${i}`);
}

// c. 8 1’s and 0’s in total, consecutively

for(let i = 1 ; i <= 8/2; i++){
    console.log(0);
    console.log(1);
}
//d. n 1’s and 0’s in total, consecutively, n entered by user
let n= Number (prompt ("Enter n"));
for (let i=0; i<n; i++){
if (i%2==0) {
    console.log(0);
} else{
console.log(1);
}
}
    

// 8. Write a script to calculate the BMI (Body Mass Index) of a person
let w = Number (prompt ("Your weight in kg?"));
let h = Number (prompt ("Your height in cm?"));
let h2=0.01*h;
let BMI = w/h2**2;
alert(`Your BMI is ${BMI}`);
if (BMI<16){
    alert(" You are severely underweight")
}
else if (16<=BMI && BMI<18.5) {
    alert("You are underweight");
}
else if (18.5<=BMI && BMI<25){
    alert("You are normal");
}
else if (25<=BMI && BMI<30){
    alert("You are overweight");
}
else{
    alert("You are obese")
}

