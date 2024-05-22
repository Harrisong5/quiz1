const startbtn = document.getElementById("startbtn")
const qcontainer = document.getElementById("qcontainer")
const nextbtn = document.getElementById("nextbtn")
const qelement = document.getElementById("question")
const answers = document.getElementById("answers")

let shuffq, currqindex

startbtn.addEventListener('click', gamestart)
nextbtn.addEventListener('click', nextq)

function gamestart() {
    console.log("Started!")
    startbtn.classList.add('hide')
    shuffq = questions.sort(() => Math.random() - .5)
    currqindex = 0
    qcontainer.classList.remove('hide')
   nextbtn.classList.remove('hide')
   showq()
}

function nextq() {
    showq(shuffq[currqindex])
    currqindex++; // Increment the current question index
    if (currqindex < shuffq.length) {
        showq(); // Show the next question
    } else {
        // Handle end of quiz (if desired)
        console.log("End of quiz reached!");
    }
}
const questions = [
    {
        question: 'Dutch elm disease is caused by the fungus Ophiostoma novo-ulmi which is spread by what type of insect?',
        answers: [
            {text: 'Aphids', correct: false},
            {text: 'Beetles', correct: true},
            {text: 'Caterpillars', correct: false},
            {text: 'Wasps', correct: false}
        ]
    },
    {
        question: 'Methuselah, an ancient Bristlecone Pine and one of the oldest living trees in the world is estimated to be around how many years old?',
        answers: [
            {text: '3854', correct: false},
            {text: '4253', correct: false},
            {text: '4528', correct: false},
            {text: '4852', correct: true}
        ]
    }
]
function showq(question) {
     nextbtn.classList.add('hide');
    const currentQuestion = shuffq[currqindex];
    qelement.innerText = currentQuestion.question;
    answers.innerHTML = ''; // Clear previous answers

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn','col-sm-5', 'offset-sm-1');
        button.addEventListener('click', () => answerQuestion(answer.correct));
        answers.appendChild(button); // Append button to answers container
    });
}

function answerQuestion(isCorrect) {
    const selectedButton = event.target;
    const allButtons = document.querySelectorAll('#answers button');
    
    if (isCorrect) {
        // Handle correct answer
        console.log('Correct!');
        const selectedButton = event.target;
        selectedButton.classList.add('correct');
    } else {
        // Handle incorrect answer
        console.log('Incorrect!');
        const selectedButton = event.target;
        selectedButton.classList.add('wrong');
        
    }
        
    allButtons.forEach(button => {
        if (!button.classList.contains('correct')) {
            button.disabled = true;
        }
    });
    nextbtn.classList.remove('hide'); // Show the Next button
}