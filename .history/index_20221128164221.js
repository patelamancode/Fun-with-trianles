const angle1 = document.querySelector('#angle1-input');
const angle2 = document.querySelector('#angle2-input');
const angle3 = document.querySelector('#angle3-input');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');

function anglesToNumber(num1, num2, num3){
    var num1 = Number(angle1.value);
    var num2 = Number(angle2.value);
    var num3 = Number(angle3.value);
    return num1, num2, num3;
}

function calculateSumOfAngles(){
    const sum = angle1.value + angle2.value + angle3.value;
    return sum;
}
// function for is triangle
function IsATriangle(){
    calculateSumOfAngles();
    if(sum === 180)
}