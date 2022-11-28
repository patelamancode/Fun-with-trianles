const angle1 = document.querySelector('#angle1-input');
const angle2 = document.querySelector('#angle2-input');
const angle3 = document.querySelector('#angle3-input');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');
const errorForInputs = document.querySelector('.error-check-for-angles');

function errorForInputs(){
    errorForInputs.style.display = "flex";
}

function calculateSumOfAngles(input1,input2,input3){
    const sum = input1 +input2 +input3;
    if(sum == 180){
        console.log("This is a triangle");
    }else {
        console.log("Please enter some valid inputs");
    }
}

function isTriangle(){
    var num1 = Number(angle1.value);
    var num2 = Number(angle2.value);
    var num3 = Number(angle3.value);
    if(!num1 || !num2 || !num3){
        console.log("Please enter all angle value ")
    }else {
        calculateSumOfAngles(num1,num3,num3);
    }
}



button.addEventListener('click', function(){
    isTriangle();
})