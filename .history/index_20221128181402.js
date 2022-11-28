const angle1 = document.querySelector('#angle1-input');
const angle2 = document.querySelector('#angle2-input');
const angle3 = document.querySelector('#angle3-input');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');
const errorForInputs = document.querySelector('#error-check-for-angles');

// function errorForInputs(msg){
//     errorForInputs.style.display = "flex";
//     errorForInputs.innerText = msg;
// }
function showOutputMessage(msg){
    output.style.display = "flex";
    output.innerHTML = msg;
}

function calculateSumOfAngles(input1,input2,input3){
    const sumOfAngles = input1 +input2 +input3;
    if(sumOfAngles === 180){
        showOutputMessage("Yeah..🤗This is a triangle");
    }else {
        showOutputMessage("Please enter some valid inputs to form a triangle 🤪");
    }
}

function isTriangle(){
    var num1 = Number(angle1.value);
    var num2 = Number(angle2.value);
    var num3 = Number(angle3.value);
    if(!num1 || !num2 || !num3){
        console.log("Please make sure about all inputs as per mention format");
    }else {
        calculateSumOfAngles(num1,num3,num3);
    }
}



button.addEventListener('click', function(){
    isTriangle();
})