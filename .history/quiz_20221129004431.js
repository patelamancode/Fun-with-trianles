const questions = document.querySelector('.questions-container');
const submitButton = document.querySelector('#submit-btn');
const output = document.querySelector('#result-display');
const correctAnswerArray = ["90°", "right angled"];




function calculateScore(){
    let score = 0;
    let index = 0;
    const data = new FormData(questions);
    for(let dataValue of data.values()){
        console.log(dataValue);
        if(dataValue[index] === correctAnswerArray[index]){
            console.log("Yeah you got it");
            score++;
        }else{
            console.log("Sorry!!");
        }
    }
    console.log(score);
}





submitButton.addEventListener('click', function(){
    calculateScore();
})