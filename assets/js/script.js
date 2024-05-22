const startbtn = document.getElementById("startbtn")
const qcontainer = document.getElementById("qcontainer")
const nextbtn = document.getElementById("nextbtn")
const qelement = document.getElementById("question")
const answers = document.getElementById("answers")

let shuffq, currqindex

startbtn.addEventListener('click', gamestart)

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
    }
]
function showq(question) {
    const currentQuestion = shuffq[currqindex];
    qelement.innerText = currentQuestion.question;
    
}

function answer() {}

