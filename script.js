var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')





var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    var count = 60;
var timer = setInterval(function() {
  console.log(count);
  count--;
  document.getElementById('timer').innerHTML = count + " Seconds Left";
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




//QUESTIONS


const questions = [
    {
        question: 'What is 6 + 2?',
        answers: [
            { text: '8', correct: true },
            { text: '62', correct: false },
            { text: '4', correct: false },
            { text: '12', correct: false }
        ]
    },
    {
        question: 'How many oscars did the Titanic movie receive?',
        answers: [
            { text: '11', correct: true },
            { text: '6', correct: false },
            { text: '3', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'Which actor played James Bond in 1990?',
        answers: [
            { text: 'Nicholas Cage', correct: false },
            { text: 'Daniel Craig', correct: false },
            { text: 'Pierce Brosnan', correct: true },
            { text: 'Bruce Willis', correct: false }
        ]
    },
    {
        question: 'Which actor played the role of a famous fictional serial killer Hannibal Lecter?',
        answers: [
            { text: 'Oprah', correct: false },
            { text: 'Anthony Hopkins', correct: true },
            { text: 'Rosie Odonnell', correct: false },
            { text: 'Nicholas Cage', correct: false }
        ]
    },
    {
        question: 'Which actor played the famous hobbit - Frodo?',
        answers: [
            { text: 'Donald Trump"s uncle', correct: false },
            { text: 'A man named woman', correct: false },
            { text: 'Elmer Fudd', correct: false },
            { text: 'Elijah Wood', correct: true }
        ]
    },
    {
        question: 'What is Marilyn Mansons first name?',
        answers: [
            { text: 'Steve', correct: false },
            { text: 'Bill', correct: false },
            { text: 'Bruce', correct: false },
            { text: 'Bryan', correct: true }
        ]
    },
    {
        question: 'Which actor played the role of a Russian boxer, Ivan Drago, in “Rocky 4”?',
        answers: [
            { text: 'Dolph Lundgren', correct: true },
            { text: 'Jared Leto', correct: false },
            { text: 'Tony Robbins', correct: false },
            { text: 'Dirty Dan', correct: false }
        ]
    },
    {
        question: 'Who was responsible for stealing the Declaration of Independance?',
        answers: [
            { text: 'Nick Cage', correct: true },
            { text: 'Pick Nick cage', correct: false },
            { text: 'How do you not understand this is Nick Cage', correct: false },
            { text: 'Pick the first option, its Nick Cage', correct: false }
        ]
    },
    {
        question: 'Who is featured in 2 of the greatest trilogies of all time (John Wick and The Matrix?',
        answers: [
            { text: 'Vigo Mortensen', correct: false },
            { text: 'Robert Pattinson', correct: false },
            { text: 'Keanue Reeves', correct: true },
            { text: 'Dirt bag Nick Cage', correct: false }
        ]
    },
    {
        question: 'Who plays the iconic role of Jack Sparrow?',
        answers: [
            { text: 'Nick Cage', correct: false },
            { text: 'John Depp', correct: true },
            { text: 'Betty White', correct: false },
            { text: 'Dr. Phil', correct: false }
        ]
    },
    
]