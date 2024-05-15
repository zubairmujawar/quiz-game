//Adding the question and answers
const questions = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vitcan City", correct: true},
            {text:"Bhutan", correct: false},
            {text:"Nepal", correct: false},
            {text:"Shri Lanka", correct: false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari", correct: false},
            {text:"Sahara", correct: false},
            {text:"Gobi", correct: false},
            {text:"Antarctica", correct: true},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]

    },
    {
        question:"Which is the capetal of india?",
        answers:[
            {text:"Mumbai", correct: false},
            {text:"Bangloro", correct: false},
            {text:"Delhi", correct: true},
            {text:"Hydrabad", correct: false},
        ]
        
    },
    {
        question:"What is the natinal bird of india?",
        answers:[
            {text:"Tiger", correct: false},
            {text:"Peocok", correct: true},
            {text:"Lion", correct: false},
            {text:"Dolfin fish", correct: false},
        ]
        
    },
    {
        question:"One US dollar is equal to how much Indin rupees?",
        answers:[
            {text:"80", correct: false},
            {text:"82", correct: true},
            {text:"79", correct: false},
            {text:"non of the this", correct: false},
        ]
        
    },
    {
        question:"How many colors are there in the Indian flag?",
        answers:[
            {text:"2 ", correct: false},
            {text:"3", correct: true},
            {text:"4", correct: false},
            {text:"non of the this", correct: false},
        ]
        
    },
    {
        question:"Name longest river in the world?",
        answers:[
            {text:"Yamuna", correct: false},
            {text:"Amazon River", correct: false},
            {text:"Nile", correct: true},
            {text:"Ganga River", correct: false},
        ]
        
    },
    {
        question:"What is the planet nearest to Earth?",
        answers:[
            {text:"Mercury", correct: true},
            {text:"Naptun", correct: false},
            {text:"Vinus", correct: false},
            {text:"Mars", correct: false},
        ]
        
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// nextButton.addEventListener("click",()=>{
//     console.log("You Clicked");
// })

let currentQuestionIndex = 0;
let score  = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectdBtn = e.target;
    const isCorrect = selectdBtn.dataset.correct === "true";
    if(isCorrect){
        selectdBtn.classList.add("correct");
        score++;
    }else{
        selectdBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
} 
function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // function lessScore (){
    //     if(score<=3){
    //         questionElement.innerHTML = "You want to paly again";
    //     }else{
    //         "Very Good";
    //     }
    // }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}  
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();