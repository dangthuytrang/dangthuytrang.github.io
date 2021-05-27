
//Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.

function reverseString(str){
    let newString = " ";
    for (let i = str.length - 1; i>=0; i--){
        newString += str[i]
    }
    alert(newString)
}
reverseString ('program');


//Bài 2:

function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    
    return splitStr.join(' '); 
 }
 
 console.log(titleCase("hello trang"));

//Bài 3
function unique(array) {
    var newArr = []
    for (var i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i])
      }
    }
    return newArr
  }
  console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))

//Bài 4
let mindX = [
    {
        id : 1,
        age: 22,
        name: "Chương" ,
        income: 1000,
        position: "Dev" ,
    },
    {
        id : 2,
        age: 23,
        name: "Đạt",
        income: 1200,
        position: "QA",
    },
    {
        id : 3,
        age: 26,
        name: "Tiến",
        income: 2000 ,
        position: "Brse",
    }
];
let isLoop=true;
while(isLoop){
let input = prompt("Enter your function : C/R/U/D/E");
if (input === "C") {
  let name =  prompt("Enter name");
  let age = prompt ("Enter age");
  let income = prompt ("Enter income");
  let position = prompt ("Enter position");
  let id  = mindX.length+1;
  let newObj = {
      id: id,
      name: name,
      age: age,
      income: income,
      position: position
  }
  mindX.push(newObj);
}
else if (input === "D") {
    let idInput = Number(prompt("Enter id: "));
    if(idInput < 0 && idInput >= mindX.length){
        alert("Not found");
    }
    else{
        mindX.splice(idInput,1);

        }
}
else if (input==="R"){
        for(let i=0; i<mindX.length; i++){
        alert(`${mindX[i].id}---${mindX[i].name}---${mindX[i].age}---${mindX[i].income}---${mindX[i].position}`);
        }
}
else if (input==="U"){
    let idInput = Number(prompt("Enter id: "));
    if(idInput <0 && idInput >= mindX.length){
        alert("Not found");
    }
    else{
        let newName = prompt("Enter your name:");
        let newAge = prompt("Enter age");
        let income = prompt("Enter income");
        let position = prompt("Enter position");
            mindX[idInput].name = newName
            mindX[idInput].age = newAge
            mindX[idInput].income = income
            mindX[idInput].position = position
        }    
}
else if (input === "E"){
        alert("Exit the program");
    isLoop = false;
  }else {
    alert("C/R/U/D/E ?");
}
}

// Bài 5
let strDate = prompt ("Enter your date (dd/mm/yyyy)")
  function checkDate(strDate) {
    var comp = strDate.split('/')
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
      console.log(true); 
    }
    else{
    console.log(false);
    }
}
checkDate(strDate)
// Sửa bài:
let day = Number(prompt("Enter day:"));
let month = Number(prompt("Enter month:"));
let year = Number(prompt("Enter year:"));

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (day > 0 && day <= 31) {
            console.log(`${day}/${month}/${year} is valid date.`);
            if (day === 31 && month === 12) {
                console.log(`The next day is: ${day - 30}/01/${year + 1}`);
            } else if (day === 31 && month < 12) {
                console.log(`The next day is: ${day - 30}/${month + 1}/${year}`);
            } else {
                console.log(`The next day is: ${day + 1}/${month}/${year}`);
            }
        } else {
            console.log(`${day}/${month}/${year} is invalid date.`);
        }
        break;
    case 4: case 6: case 9: case 11:
        if (day > 0 && day <= 30) {
            console.log(`${day}/${month}/${year} is valid date.`);
            if (day === 30) {
                console.log(`The next day is: ${day - 29}/${month + 1}/${year}`);
            } else {
                console.log(`The next day is: ${day + 1}/${month}/${year}`);
            }
        } else {
            console.log(`${day}/${month}/${year} is invalid date.`);
        }
        break;
    case 2:
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            console.log(`${year} is a leap year`);
            if (day > 0 && day <= 29) {
                console.log(`${day}/${month}/${year} is valid date.`)
                if (day === 29) {
                    console.log(`The next day is: ${day - 28}/${month + 1}/${year}`);
                } else {
                    console.log(`The next day is: ${day + 1}/${month}/${year}`);
                }
            } else {
                console.log(`${day}/${month}/${year} is invalid date.`);
            }
        } else {
            console.log(`${year} is not a leap year`);
            if (day > 0 && day <= 28) {
                console.log(`${day}/${month}/${year} is valid date.`)
                if (day === 28) {
                    console.log(`The next day is: ${day - 27}/${month + 1}/${year}`);
                } else {
                    console.log(`The next day is: ${day + 1}/${month}/${year}`);
                }
            } else {
                console.log(`${day}/${month}/${year} is invalid date.`);
            }
        }
        break;
    default:
        break;
}


