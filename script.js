
const quizQuestions = [
    {
        question: " What does the `typeof` operator return for an array?",
        answers: [
            { option: "Array", Correct: "false" },
            { option: "object", Correct: "true" },
            { option: "arrayObject", Correct: "false" },
            { option: "list", Correct: "false" },
        ]
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            { option: "var x = 10", Correct: "false" },
            { option: "int x = 10", Correct: "false" },
            { option: "variable x = 10", Correct: "false" },
            { option: "let x = 10", Correct: "true" },
        ]
    },

    {
        question: "Which method is used to add a new element at the end of an array?",
        answers: [
            { option: "push()", Correct: "true" },
            { option: "unshift()", Correct: "false" },
            { option: "add()", Correct: "false" },
            { option: "append()", Correct: "false" },
        ]
    },

    {
        question: "Which operator is used to concatenate strings in JavaScript?",
        answers: [
            { option: ".", Correct: "false" },
            { option: "+", Correct: "true" },
            { option: "%", Correct: "false" },
            { option: "&", Correct: "false" },
        ]
    },


    {
        question: 'What is the result of 2 + "2" in JavaScript?',
        answers: [
            { option: "4", Correct: "false" },
            { option: "22", Correct: "true" },
            { option: "undefined", Correct: "false" },
            { option: "error", Correct: "false" },
        ]
    },

    {
        question: "How do you round the number 7.25, to the nearest integer, in JavaScript?",

        answers: [
            { option: "round(7.25)", Correct: "false" },
            { option: "Math.round(7.25)", Correct: "true" },
            { option: "rnd(7.25)", Correct: "false" },
            { option: "Math.nearrest", Correct: "false" },
        ]
    },

];




const quiesView = document.querySelector(".questions");
const answerAppend = document.querySelector(".answerBtn");
const nextButton = document.querySelector(".nxtBtn");
const container = document.querySelector(".quizcontainer");
const optionButton = document.querySelector(".optionBtn");
const entry = document.querySelector(".entry");
const heading = document.querySelector(".heading");
const quizContainer = document.querySelector(".allthing");
const yes = document.querySelector(".yes");
const no = document.querySelector(".No");


optionButton.addEventListener("click" , (e) =>{
    if(e.target.id === "btnOne"){
        console.log("yes");
        container.style.height = "520px";
        entry.style.display = "none";
        quizContainer.style.display = "flex";
        
    }else if(e.target.id === "btnTwo"){
        heading.textContent = "Hey Champ Try Once !";
        yes.textContent = "Okay";
        no.textContent = "Next Time";
        no.classList.add("nexttime");
        no.addEventListener("click" , (e) =>{
            if(e.target.classList.contains("nexttime")){
                container.classList.add("nexttime");
                container.innerHTML = "waiting for you";
               
            }

            
        });

        
    
        
    }
});

 


let startIndex = 0;
let marks = 0;
function playQuiz() {
    startIndex = 0;
    marks = 0;
    nextButton.style.display = "none";
    questionView();
  
}

function questionView() {
    resetQuis();
    const currQuestion = quizQuestions[startIndex];
    const quesno = startIndex + 1;
    quiesView.innerHTML = quesno+ " . " + currQuestion.question;

    currQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.option;
        button.classList.add("answer");
        answerAppend.append(button);

        if(answer.Correct){
            button.dataset.Correct = answer.Correct;
        }
        button.addEventListener("click" , chooseOption);
        
    });
 

}

 


function chooseOption(e) {
    let selected = e.target;
      
    if (selected.dataset.Correct === "true") {
        selected.classList.add("correct")
        marks++;
    } else {
        selected.classList.add("wrong");
    }
    
    Array.from(answerAppend.children).forEach(buttons =>{
        if(buttons.dataset.Correct === "true"){
            buttons.classList.add("correct");
        } 

        buttons.disabled = true;
    })
    nextButton.innerHTML = "Next";
    nextButton.style.display = "block";
}

function resetQuis(){
    nextButton.style.display = "none";
    while(answerAppend.firstChild){
        answerAppend.removeChild(answerAppend.firstChild);
    }
    
}
 
function clickHandle(){
    startIndex++;
    if(startIndex<quizQuestions.length){
         
        questionView();
    }else{
        resetQuis();
       
        quiesView.innerHTML = `your score is ${marks} out of ${quizQuestions.length}`
        document.querySelector(".qhead").innerHTML = "";
        if(startIndex===quizQuestions.length){
             container.style.height = "250px";
        } 
         
        container.style.height = "auto";
        nextButton.innerHTML = "Play Again";
       
        nextButton.style.display = "block";
    }
}



nextButton.addEventListener("click", () =>{
    if(startIndex < quizQuestions.length){
        clickHandle();
    }else{
        playQuiz();
    }
});

playQuiz();

