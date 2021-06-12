// Bài 1
function myFunction() {
    let x = document.getElementById("content");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Bài 2
let colors = [
    "#00aefd",
    "#ffa400",
    "#07a787",
    "#ff7870",
    "black",
    "pink",
    "yellow",
    "#e74c3c",
    "#2979ff",
];
function changeColor() {
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("doi-mau").style.backgroundColor = randomColor;
}

// Bài 3
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let str ="";

function changeContent() {
    str = content1.textContent;
    content1.textContent = content2.textContent;
    content2.textContent = str;

}

// Bài 4
let fontsize = document.getElementById("fontsize");
let font = 14;
function upsize() {
    font++;
    fontsize.style.fontSize = font + "px";
}



