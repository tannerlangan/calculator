//initialize selectors for each number button
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');


const screen = document.querySelector('#screen');
const multi = document.querySelector('#multiply');
const equals = document.querySelector('#equals');

var num1;
var operation;

//add onclick listeners for each number button
oneBtn.onclick = () => {
    screen.textContent +=1; 
};

twoBtn.onclick = () => {
    screen.textContent +=2; 
};

threeBtn.onclick = () => {
    screen.textContent +=3; 
};

fourBtn.onclick = () => {
    screen.textContent += 4;  
};

fiveBtn.onclick = () => {
    screen.textContent += 5;
};

sixBtn.onclick = () => {
    screen.textContent += 6;
};
sevenBtn.onclick = () => {
    screen.textContent += 7;
};
eightBtn.onclick = () => {
    screen.textContent += 8;
};
nineBtn.onclick = () => {
    screen.textContent += 9;
};

//add functionality to multiple onclick
multi.onclick = () => {

    num1 = document.getElementById('screen').innerHTML;
    screen.textContent = "";
    operation = "multiply";
    console.log(num1);

};

equals.onclick = () => {
    if(operation == "multiply"){
    var num2 = parseInt(document.getElementById('screen').innerHTML);
    let result = parseInt(num1) * parseInt(num2);
    screen.textContent = result;
    }

}
