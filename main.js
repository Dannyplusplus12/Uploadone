//close input-page
const inputPage = document.querySelector('.js-input-page');
const inputPageBtn = document.querySelector('.js-input-page-btn');

function closeInputPage() {
    inputPage.classList.add('close');
    var audio = new Audio('./assets/sound/background-music.mp3');
    audio.play();
}

inputPageBtn.addEventListener("click", closeInputPage);

//change degree-btn position
const degreeBtn = document.querySelector('.js-degree-btn');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;                                                                                                                   
}

function changeBtnPosition () {
    const mainPage = document.querySelector('#main-page')
    degreeBtn.style.left = getRndInteger(30, mainPage.offsetWidth - 100) + 'px';
    degreeBtn.style.top = getRndInteger(30, mainPage.offsetHeight - 100) + 'px';
}

degreeBtn.addEventListener("mouseover", changeBtnPosition);

//open question-page
const agreeBtn = document.querySelector('.js-agree-btn');
const questionPage = document.querySelector('.js-question-page');

function openQuestionPage () {
    questionPage.classList.add("open");
    degreeBtn.style.zIndex = '0';
    agreeBtn.style.zIndex = '0';
}

agreeBtn.addEventListener("click", openQuestionPage);

//close question-page
function closeQuestionPage() {
    questionPage.classList.remove("open");
    questionPage.classList.add("close");
    degreeBtn.style.zIndex = null;
    agreeBtn.style.zIndex = null;   
}

questionPage.addEventListener('click', closeQuestionPage);

const questionContainer = document.getElementById('question-container');

questionContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

//text generate
const answerBox = document.querySelector('.js-answer-box');

function textGenerate() {
    var outText = "";
    var text = "Danny vừa đẹp trai lại còn thông minh, gì cũng provjp";
    var textArr = Array.from(text);
    var textVal = answerBox.value;
    var count = textVal.length;
    if(count > text.length)
        answerBox.value = text;
    else {
        if(count > 0) {
            for (let i = 0; i < count; i++) {
                outText += textArr[i];
            }
        }
        answerBox.value = outText;
    }
}

answerBox.addEventListener('input', textGenerate);

//close question-page and open final-page
const questionPageBtn = document.querySelector('.js-question-page-btn');
const finalPage = document.querySelector('.js-final-page');

function closeQuestionPageAndOpenFinalPage () {
    questionPage.classList.remove("open");
    questionPage.classList.add("close");
    finalPage.classList.add("open");
}

questionPageBtn.addEventListener('click', closeQuestionPageAndOpenFinalPage);

//open messenger page
const finalPageBtn = document.querySelector('.js-final-page-btn');

function openMessengerPage() {
    location.assign("https://www.messenger.com");
}

finalPageBtn.addEventListener('click', openMessengerPage);

//background particles
particlesJS.load('main-page', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});