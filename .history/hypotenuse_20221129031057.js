const sideOne = document.querySelector('#side-input-one');
const sideTwo = document.querySelector('#side-input-two');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');


function showOutputMessage(msg){
    output.style.display = "flex";
    output.innerText = msg;
}

function calculateHypotenuse(side1, side2){
    const hypotenuseLength = (Math.sqrt(side1*side1 + side2*side2)).toFixed(2);
    if(!side1 || !side2){
        showOutputMessage("Ohh..!! Please fill all entries🤪")
    }else if(side1<0 || side2<0){
        showOutputMessage("Please make some positive entries (+ve)")
    }else showOutputMessage(`Your calculated hypotenuse is : ${hypotenuseLength}  👈`)
}

function showOutputOfHypotenuse(){
    const ip1 = Number(sideOne.value);
    const ip2 = Number(sideTwo.value);
    // if(!ip1 || !ip2){
    //     showOutputMessage("")
    // }
    calculateHypotenuse(ip1, ip2)
}

button.addEventListener('click', function(){
    showOutputOfHypotenuse();
})