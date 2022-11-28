const sideOne = document.querySelector('#side-input-one');
const sideTwo = document.querySelector('#side-input-two');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');

function calculateHypotenuse(side1, side2){
    const hypotenuseLength = Math.sqrt(side1*side1 + side2*side2);
    console.log(hypotenuseLength);
}

calculateHypotenuse(4, 5);
button.addEventListener('click', function(){
    
})