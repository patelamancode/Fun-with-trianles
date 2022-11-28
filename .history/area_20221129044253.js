const sideOne = document.querySelector('#side-input-one');
const sideTwo = document.querySelector('#side-input-two');
const sideThree = document.querySelector('#side-input-three');
const button = document.querySelector('#check-btn');
const output = document.querySelector('#result-display');
 
function showOutputMessage(msg){
    output.style.display = "flex";
    output.innerText = msg;
}

function calculateArea(p, side1, side2, side3){
    const area = (Math.sqrt(p*(p-side1)*(p-side2)*(p-side3))).toFixed(2);
    if(!side1 || !side2  || !side3){
        showOutputMessage("Please fill all mandatory fields for all side length")
    } else showOutputMessage(`Hey!! the area for this triangle is : ${area} square unit 🎉`)
}

function showAreaOfTriangle(){
    const s1 = Number(sideOne.value);
    const s2 = Number(sideTwo.value);
    const s3 = Number(sideThree.value);
    const perimeter = (s1+s2+s3)/2
    if(!s1 || !s2  ||  !s3){
        showOutputMessage("Ohh ☹️ Please fill all mandatory fields for each side")
    } else calculateArea(perimeter, s1, s2, s3);

}

button.addEventListener('click', function(){
    showAreaOfTriangle();
})