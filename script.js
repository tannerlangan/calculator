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
const zeroBtn = document.querySelector('#zero');



const screen = document.querySelector('#screen');
const addBtn = document.querySelector('#add');
const multiBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const divideBtn = document.querySelector('#divide');
const decBtn = document.querySelector('#decimal');
const clrBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#backspace')

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
zeroBtn.onclick = () => {
    screen.textContent += 0;
};
decBtn.onclick = () => {
    screen.textContent += ".";
    decBtn.disabled = true;
};

//added functioanlity to clear onclick
clrBtn.onclick = () => {

    screen.textContent = "";
    num1 = "";
    decBtn.disabled = false;


};

backBtn.onclick = () => {
    var length = document.getElementById('screen').innerHTML.length;
    if(document.getElementById('screen').innerHTML.charAt(length-1) == "."){
        decBtn.disabled = false;
    }
    let newNum = document.getElementById('screen').innerHTML.slice(0, -1);
    screen.textContent = newNum;


};
//add functionality to multiple onclick
multiBtn.onclick = () => {

    num1 = document.getElementById('screen').innerHTML;
    screen.textContent = "";
    operation = "multiply";
    console.log(num1);
    decBtn.disabled = false;


};
//add functionality to add onclick
addBtn.onclick = () => {
    
    num1 = document.getElementById('screen').innerHTML;
    screen.textContent = "";
    operation = "add";
    decBtn.disabled = false;
};

//adding functionality for subtract onclick
subtractBtn.onclick = () => {

    num1 = document.getElementById('screen').innerHTML;
    screen.textContent = "";
    operation = "subtract";
    decBtn.disabled = false;


};

divideBtn.onclick = () => {

    num1 = document.getElementById('screen').innerHTML;
    screen.textContent = "";
    operation = "divide";
    decBtn.disabled = false;


};

equals.onclick = () => {

    var num2 = parseInt(document.getElementById('screen').innerHTML);

    if(operation == "multiply"){
    let result = (parseFloat(num1) * parseFloat(num2)).toFixed(3);
    screen.textContent = result;
    }
    else if(operation == "add"){
        let result = (parseFloat(num1) + parseFloat(num2)).toFixed(3);
        screen.textContent = result;
    }
    else if(operation == "subtract"){
        let result = (parseFloat(num1) - parseFloat(num2)).toFixed(3);
        screen.textContent = result;
    }
    else if(operation == "divide"){
        if(parseInt(num1) == 0 || parseInt(num2) == 0){
            let result = "You can not divide by 0 stupid";
            screen.textContent = result;
        }else{
        let result = (parseFloat(num1) / parseFloat(num2)).toFixed(3);
        screen.textContent = result;
        }
    }


}
