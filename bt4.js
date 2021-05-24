// 1. Initialize a variable named products, containing an array of products, 
// each product has a name, price, brand, category, and color
// 1.1 Print/log name and price of all the products out 
let phone = [
    {
        id : 1,
        name : 'Xiaomi portable charger 20000mah',
        brand : 'Xiaomi',
        price : 428,
        color : 'white',
        category : 'charger',
    },
    {
        id: 2,
        name : 'VSmart Active 1',
        brand : 'VSmart',
        price : 5487,
        color : 'black',
        category : 'phone',
    },
    {
        id : 3,
        name : 'Iphone X',
        brand : 'Apple',
        price : 21490,
        color : 'gray',
        category : 'phone',

    },
    {
        id : 4,
        name : 'Samsung Galaxy A9',
        brand : 'Samsung',
        price : 8490,
        color : 'blue',
        category : 'phone'
    }

];
for (let i=0; i<phone.length; i++){
    console.log('-----------------------------------')
    console.log(`Name: ${phone[i].name}
Price: ${phone[i].price}`);
    
}

//1.2. Write a script printing/logging out the products with their number, 
//then print/logging out the details of a product with its position
// entered by users

    console.log(`#${phone[i].id}. Name: ${phone[i].name}
    Price: ${phone[i].price}`);
}
let idInput = Number (prompt ("Enter product position: "));  
for (let i=0; i<phone.length; i++){ 
    if(idInput < 0 && idInput >= phone.length){
             alert("Not found in my products");
    }
    else{
        console.log(`Name: ${phone[idInput].name}
Brand: ${phone[idInput].brand}
Price: ${phone[idInput].price}
Color: ${phone[idInput].color}
Category: ${phone[idInput].category}`)
    }
}

//1.3 Write a script printing/logging out the products based on category input by users
let cateInput = prompt ("Enter your category: ");  
for (let i=0; i<phone.length; i++){
    console.log('-----------------------------------')
    if (cateInput == phone[i].category){
     console.log(`Name: ${phone[i].name}
Price: ${phone[i].price}`);
    }
}

//1.4 Add providers to each product
for (let i = 0; i < phone.length; i++) {
       if (i === 0) {
             phone[i].providers = 'Phukienzero Dientuccc';
         } else {
            phone[i].providers = 'Tgdd';
        }
    console.log('-----------------------------------')
    console.log(`# ${phone[i].id}. ${phone[i].name}
Price: ${phone[i].price}
Providers: ${phone[i].providers}`)
}

//1.5 Search the products based on the wanted provider entered by users


// 2. Write a script to store and process the learning tasks to become a front-end developer

let task = [
    {
        id : 1,
        name : 'HTML',
        Complete : false
    },
    {
        id : 2,
        name : 'CSS',
        Complete : false
    },
    {
        id : 3,
        name : 'Javascript',
        Complete : false
    },
    {
        id : 4,
        name : 'Node Package Manger (npm)',
        Complete : false
    },
    {
        id : 5,
        name : 'Git',
        Complete : false
    }
]
//2.1 Print it out
 console.log("Hi there, this is your learning tasks to front-end developer career");
 for (let i=0; i<task.length; i++){
    console.log(`${task[i].id}. ${task[i].name}
    Complete: ${task[i].Complete}`) }

//2.2. Let users add new task
 let isLoop=true;
while(isLoop){

    
let input = prompt("Enter your command (New, Delete, Update, Complete)");

if (input === "new") {
 
  let name =  prompt("Enter name");
  let id  = task.length + 1;
  let newObj = {
      id: id,
      name: name,
      Complete : false
  }
  task.push(newObj);
}
else if (input === "delete") {
    let idInput = Number(prompt("Enter id: "));
    if(idInput < 0 && idInput >= task.length){
        alert("Not found");
    }
    else{
        task.splice(idInput,1);

        }
}
else if (input==="update"){
    let idInput = Number(prompt("Enter position: "));
    if(idInput <0 && idInput >= task.length){
        alert("Not found");
    }
    else{
        let newName = prompt("Enter new title:");
        
        task[idInput] = {
            name : newName,
            Complete: false,
        }
        }
        
}
else if (input === "complete"){
    let idInput = Number(prompt("Enter position: "));
    if(idInput <0 && idInput >= task.length){
        alert("Not found");
    }
    else{
        let newName = task[idInput].name;
        task[idInput] = {
            name : newName,
            Complete: true,
        }
    isLoop = false;
  }
}
else {
    alert("(New, Delete, Update, Complete ?");
}
}

 for(let i = 0; i<task.length ; i++){
    
    if(task[i].Complete == true){
    console.log(`${i+1}. [X] ${task[i].name}`)
    }
    else{
    console.log(`${i+1}. [ ] ${task[i].name}`)
    }
}
