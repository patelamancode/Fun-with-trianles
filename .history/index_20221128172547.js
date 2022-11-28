const angle1 = document.querySelector('#angle1-input');
const angle2 = document.querySelector('#angle2-input');
const angle3 = document.querySelector('#angle3-input');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');

// function anglesToNumber(num1, num2, num3){
//     var num1 = Number(angle1.value);
//     var num2 = Number(angle2.value);
//     var num3 = Number(angle3.value);
//     return num1, num2, num3;
// }

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
console.log(num1 , num2 , num3, typeof(num1 , num2 , num3));
// function for is triangle
function calculateSumOfAngles(input1,input2,input3){
    const sum = input1+input2+input3;
    console.log(sum,typeof(sum));
    if(sum === 180){
        console.log("This is a triangle");
    }else {
        console.log("Please enter some valid inputs");
    }
}

button.addEventListener('click', function(){
    isTriangle();
})