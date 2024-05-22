const startbtn = document.getElementById("startbtn")
const qcontainer = document.getElementById("qcontainer")
const nextbtn = document.getElementById("nextbtn")

startbtn.addEventListener('click', gamestart)

function gamestart() {
    console.log("Started!")
    startbtn.classList.add('hide')
    qcontainer.classList.remove('hide')
   nextbtn.classList.remove('hide')
}

function nextq() {}

function answer() {}