const sideOne = document.querySelector('#side-input-one');
const sideTwo = document.querySelector('#side-input-two');
const sideThree = document.querySelector('#side-input-three');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');

// A = squareRoot(s(s-a)(s-b)(s-c))
// s= a+b+c/2
 
function calculateArea(p, side1, side2, side3){
    const area = (Math.sqrt(p*(p-side1)*(p-side2)*(p-side3)));
    console.log(area);
}

function showAreaOfTriangle(){
    const s1 = Number(sideOne.value);
    const s2 = Number(sideTwo.value);
    const s3 = Number(sideThree.value);
    const perimeter = (s1+s2+s3)/2
    calculateArea(perimeter, s1, s2, s3);
}

button.addEventListener('click', function(){
    showAreaOfTriangle();
})