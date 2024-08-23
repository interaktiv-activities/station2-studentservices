// The following variables below are all the sound variables and mute/unmute fucntions 
let backgroundMusic = new Audio();
backgroundMusic.src = "sounds/bg-music.mp3";
let backgroundMusicStatus = 0;
let backgroundMusicInterval;

function playBackgroundMusic() {
    backgroundMusic.play();
    if (backgroundMusicStatus == 1) {
        backgroundMusic.volume = 0;
    } else {
        backgroundMusic.volume = 0.5;
    }
}

function muteBackgroundMusic() {
    const muteBtnImg = document.getElementById("mute-btn-img");
    if (backgroundMusicStatus == 0) {
        muteBtnImg.setAttribute("src", "assets/header/mute.png");
        backgroundMusic.volume = 0;
        backgroundMusicStatus++;
    } else {
        muteBtnImg.setAttribute("src", "assets/header/unmute.png");
        backgroundMusic.volume = 0.5;
        backgroundMusicStatus--;
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes are for the swipe card to start
const cardSlot = document.querySelector('.card-slot');
const swipeCard = document.getElementById('swipe-card');
let startX = 0;
let currentX = 0;
let isSwiping = false;
let cardSlotWidth = cardSlot.offsetWidth; 

// Event Listeners for Swipe Actions
swipeCard.addEventListener('mousedown', startSwipe);
swipeCard.addEventListener('touchstart', startSwipe);
swipeCard.addEventListener('mousemove', swipeMove);
swipeCard.addEventListener('touchmove', swipeMove);
swipeCard.addEventListener('mouseup', endSwipe);
swipeCard.addEventListener('touchend', endSwipe);
window.addEventListener('resize', updateCardSlotWidth);

// Swipe Functions
function updateCardSlotWidth() {
    cardSlotWidth = cardSlot.offsetWidth;
}

function startSwipe(event) {
    isSwiping = true;
    startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

function swipeMove(event) {
    if (!isSwiping) return;

    currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
    const deltaX = currentX - startX;

    if (deltaX > 1) {  // Swiping to the right
        swipeCard.style.transform = `translateX(${deltaX}px)`;
    }

    // Check if swipe reached the threshold
    if (Math.abs(deltaX) > (cardSlotWidth/1.3) && isSwiping == true) {
        isSwiping = false;
        startCardInterval();
    }
}

function endSwipe() {
    isSwiping = false;
    swipeCard.style.transform = 'translateX(0)';
}
//END HERE

// The following variables below are all the timer fucntions 
let timer = 15;
let timeRemaining = timer;

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to start the countdown
function startCountdown() {
    const countdownInterval = setInterval(() => {
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            if (roundIndex <= 8)
            {
                roundIndex++
                changeDisplay()
                startCountdown()
            }
            else
            {
                endGame()
            }
            return;
        }

        updateTimerDisplay();
    }, 1000);
}
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startCardInterval() {
    startScreenTimer = setInterval(startGame, 500);
    startCountdown()
    changeDisplay()
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    scoreCounter
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 7){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

// QUESTION BANK

let questionBank =[
    [
        ["BigSky", true],
        ["BrightSky", false],
        ["BeSky ", false],
        ["BeinSky", false],
        "It is an official learning management system of Benilde that students can use to access and submit course materials and requirements, respectively."

    ],
    [
        ["Books", false],
        ["Electronic Materials", false],
        ["Chairs", true],
        ["Online Databases", false],
        "The Br. Fidelis Leddy Center for Learning Resources is a multimedia library that houses and/or lends the following learning materials, EXCEPT:"
    ],
    [
        ["Benildean Reformation", false],
        ["BeniRE", true],
        ["Benildean Formation", false],
        ["BeRE", false],
        "It is a program by the Center for Lasallian Ministry (CLM) that provides spiritual formation activities to all students, regardless of their religious affiliation. These activities come in forms of Retreats and Recollections."
    ],
    [
        ["Scholarships", true],
        ["Benilde Allowance", false],
        ["BeGrants", false],
        ["Schoolarships", false],
        "These are grants given to financially aid students and families during their stay in Benilde. These may be Academic, Financial, or Government-Mandated Grants."
    ],
    [
        ["Registrar's Office", true],
        ["Finance Office", false],
        ["Enrollment Unit", false],
        ["Student Records Unit", false],
        "This office maintains students' academic records and other documents relevant to academic residence, ensuring the confidentiality of student records at all times."
    ],
    [
        ["CATCH", false],
        ["TEACH", false],
        ["BATCH", false],
        ["LATCH", true],
        "It is a website dedicated for faculty evaluation, which is part of the students' requirement in order to pre-enroll for the next term."
    ],
    [
        ["Interviews", false],
        ["Telepsychology", false],
        ["Telepathy", true],
        ["Counselling", false],
        "The Benilde Well-Being Center is a service arm that was established to attend to the psychosocial and emotional well-being of Benildeans. Some of its offerings include the following, EXCEPT:"
    ],
    [
        ["Academic Supervising", false],
        ["Academic Guidance", false],
        ["Academic Monitoring", false],
        ["Academic Advising", true],
        "This program helps Benildean Students navigate their academic journey through the guidance of Academic Advisers."
    ],
    [
        ["Career Portal", true],
        ["Career Web", false],
        ["Career Development", false],
        ["Career Network", false],
        "This program is under the Career and Placement Unit, and it is an information and marketing arm for students, on-the-job trainees, graduates, and the school's industry linkages to increase awareness of current options for employment, business, and education."
    ],
    [
        ["The Hub", false],
        ["The Generator", true],
        ["The Pod", false],
        ["Greenway Square", false],
        "It is a safe space provided for studying and is open on extended hours during midterms and finals examinations."
    ],
]

// VARIABLES

const choiceButtonA = document.getElementById("answer-txt-1")
const choiceButtonB = document.getElementById("answer-txt-2")
const choiceButtonC = document.getElementById("answer-txt-3")
const choiceButtonD = document.getElementById("answer-txt-4")

let questionPrompt = document.getElementById("question")

let scoreDisplay = document.getElementById("score")

let scoreCounter = 0
let roundIndex = 0

// GAME FUNCTIONS PROPER

function startGame(){
    hideStartScreen()
}

function changeDisplay(){
    choiceButtonA.innerHTML = questionBank[roundIndex][0][0]
    choiceButtonB.innerHTML = questionBank[roundIndex][1][0]
    choiceButtonC.innerHTML = questionBank[roundIndex][2][0]
    choiceButtonD.innerHTML = questionBank[roundIndex][3][0]
    questionPrompt.innerHTML = questionBank[roundIndex][4]

    scoreDisplay.innerHTML = "SCORE: " + scoreCounter
    timeRemaining = timer + 1;
}

function selectChoiceA(){
    if (roundIndex <= 8 && questionBank[roundIndex][0][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB(){
    if (roundIndex <= 8 && questionBank[roundIndex][1][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceC(){
    if (roundIndex <= 8 && questionBank[roundIndex][2][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceD(){
    if (roundIndex <= 8 && questionBank[roundIndex][3][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

document.getElementById("answer-btn-1").addEventListener("click", selectChoiceA)
document.getElementById("answer-btn-2").addEventListener("click", selectChoiceB)
document.getElementById("answer-btn-3").addEventListener("click", selectChoiceC)
document.getElementById("answer-btn-4").addEventListener("click", selectChoiceD)