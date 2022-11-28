const questions = document.querySelector('.questions-container');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#result-display');
const correctAnswerArray = ["90°", "right angled"];

function displayOutputMessage(msg){
    output.innerText = msg;
    output.style.display = "flex";
}


function calculateScore(){
    let score = 0;
    let i = 0;
    const data = new FormData(questions);
    for(let dataValue of data.values()){
        console.log(dataValue);
        if(dataValue === correctAnswerArray[i]){
            score++;
            i++;
        }else{
            console.log("Sorry!!");
            i++;
        }
    }
    console.log(typeof(score));
    // return displayOutputMessage(`Hey your final score is ${score}`)
}


submitButton.addEventListener('click', function(){
    calculateScore();
})