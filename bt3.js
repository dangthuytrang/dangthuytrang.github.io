//Phone number management program
let initNumber = [036567321, 0987654251];
isloop = true;
while(isloop){
let input = prompt("Enter your function : C/R/U/D/E");

if (input === "C") {
  let add = Number(prompt("add phone number : "));
  initNumber.unshift(add);
  console.table(initNumber);
}
else if (input === "D") {
  let del = Number(prompt("Enter the index of phone number : "));
  if (del < 0 || del >= initNumber.length) {
    alert("Please other index :");
  } else {
    initNumber.splice(del, 1);
    console.table(initNumber);
  }
}
else if (input === "U") {
    let update = Number(prompt("Enter the index of phone number : "));
    if (update < 0 || update >= initNumber.length) {
      alert("Please other index :");
    } else {
      let valueUpdate = Number(prompt("Enter value to update :"));
      initNumber[update] = valueUpdate;
      console.table(initNumber);
    }
  }
  else if (input === "R") {
    let read = Number(prompt("Enter the index of phone number : "));
    console.log(initNumber[read]);
  }else if(input === "E"){
    alert("Exit the program");
    isloop = false;
  }else {
    alert("C/R/U/D/E ?");
  }
}


//1.Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
let Array = []
let str = prompt("Enter a sequence of numbers, separated by commas (,)")
Array = str.split(",")
let sum = 0;
    for(let i = 0; i < Array.length; i++) {
        Array[i] = Number(Array[i]);
         sum += Array[i];
    }
console.table(Array);
alert(`The sum of them is ${sum}`)

// 2. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
let Array = [];
let str = prompt("Enter a sequence of numbers, separated by commas (,)");
Array = str.split(",")
for (let i=0; i < Array.length; i++){
    Array[i] = Number(Array[i]);
    small = Array[0]
    if (Array[i]<small){
        small = Array[i]
    }
}
console.table(Array);
alert(`The smallest number is ${small}`)

// 3. Create an array containing at least 5 numbers, then ask users enter a number, 
// perform a search to look for the number in the array, if the number is found, 
// tell user that with the index of it in the array, if not, also tell them no
let array = [3, 4, 6, -9, 10, -88, 2];
let n = Number(prompt("Enter a number"));
let check = array.includes(n);
if (check===true){
    for (let i=0; i < array.length; i++){
       if (n===array[i]){
           alert(`${n} is found in my array at index ${i}`)
       }
    }
}
else{
    alert(`${n} is NOT found in my array`)
       }
    
// 4.
//4.1 Create an array to represent the sizes of your flock, and log all of your flock size
let array = [5, 7, 300, 90, 24, 50, 75];

console.log(`Hello, my name is Thuy Trang and here is my sheep sizes:
${array.join(" ")}`);

// 4.2 At the end of each month, you have to choose one and only one sheep to shear 
// and thus you want to choose the biggest one to maximize your profit. 
// Add scripts to search for the biggest sheep in your list:

 let max= Math.max(...array);

console.log(`Hello, my name is Thuy Trang and here is my sheep sizes: 
${array.join(" ")}

Now my biggest sheep has size ${max}, let's shave it`);

//4.3 When your biggest sheer, its size will return to the default size, which is 8.

a = array.indexOf(max)
array[a] = 8

console.log(`After shearing, here is my flock
${array.join(" ")}`);

// 4.4 In the following month, EVERY sheep in your flock grow, 
// they have their size increased by 50. Log them out
for (let i=0; i<array.length; i++){
    array[i] = array[i]+50
}
console.log(`MONTH 1
One month has passed, my sheep have grown, here are their sizes

${array.join(" ")}`)

//4.5. 

for (let a = 1; a < 5; a++) {
    for (let i = 0; i < array.length; i++) {
        array[i]= array[i]+50;    
    }
    console.log(`MONTH ${a} 
    One month has passed, my sheep have grown, here are their sizes: 
    ${array.join(" ")}`);
    console.log("");      
}
sum = 0;
for (let j = 0; j < array.length; j++) {
     sum = sum + array[j];   
}
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${sum*2}`);

//5.(Optional) Write a script asking users to enter a sequence of names, 
//separated by commas (,), Create a new array containing the names, 
//each surrounded with <>. 

let input =  prompt("Enter a sequence of names");
let array = input.split(",");
let array1 = [];
for (let i = 0; i < array.length; i++) {
    array1.push(`<${array[i]}>`);
    
}
alert(` ${array} => ${array1} `);



// 6. (Optional) Write a script asking users to enter a sequence of Numbers, 
// separated by commas (,). Create a new array containing only the odd Numbers
//  of the entered sequence.


let input =  prompt("Enter a sequence number ");
let array = input.split(",");
let array1 = [];
for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 2 == 1) {
       array1.push(array[i]);
       console.log(array1);  
    }   
}
alert(` ${array} => ${array1} `);



