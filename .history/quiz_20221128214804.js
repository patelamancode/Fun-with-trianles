const questions = document.querySelector('.questions-container');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#result-display');
const correctAnswerArray = ["90°", "right angled"];




function calculateScore(){
    let score = 0;
    let index = 0;
    const formData = new FormData(questions);
    console.log(formData)
}





submitButton.addEventListener('click', function(){
    console.log(questions.value);
})