const questions = document.querySelector('.questions-container');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#result-display');
const correctAnswerArray = ["90°", "right angled"];




function calculateScore(){
    let score = 0;
    let index = 0;
    const data = new FormData(questions);
    for(let dataValue of data.entries()){
        console.log(dataValue);
    }
}





submitButton.addEventListener('click', function(){
    calculateScore();
})