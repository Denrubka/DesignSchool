const quizSelection = document.querySelector('.quiz-selection');
const quizQuestions = document.querySelectorAll('.quiz-questions');
const quizButtonStart = document.querySelector('.quiz-button-agree');
const quizButtonsContinue = document.querySelectorAll('.quiz-button-continue');
const quizButtonStop = document.querySelector('.quiz-button-stop');
const preloader = document.querySelector('.quiz-preloader');
const quizFinalSuccessfully = document.querySelector('.quiz-final-successfully');
const quizFinalUnsuccessfully = document.querySelector('.quiz-final-unsuccessfully');
let progress = 0;

const showAnimation = block => {
    block.style.opacity = '0';
    block.style.display = 'block';
    let opacity = Number(window.getComputedStyle(block).getPropertyValue("opacity"));

    const animation = () => {
        opacity += 0.02;
        block.style.opacity = opacity;

        if(opacity < 1) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

const hideAnimation = (block, showNextQuizQuestion) => {
    let opacity = window.getComputedStyle(block).getPropertyValue("opacity");

    const animation = () => {
        opacity -= 0.02;
        block.style.opacity = opacity;

        if(opacity > 0) {
            requestAnimationFrame(animation);
        } else {
            block.style.display = 'none';
            console.log(progress)
            if(showNextQuizQuestion) {
                showNextQuizQuestion(progress);
            }
        }
    }

    requestAnimationFrame(animation);
}

const showNextQuizQuestion = (index) => {
    if(quizQuestions[index]) {
        showAnimation(quizQuestions[index]);
    }
}

const hideQuizSelection = () => {
    hideAnimation(quizSelection, showNextQuizQuestion);
}


quizButtonStart.addEventListener('click', () => {
    hideQuizSelection();
});


quizButtonsContinue.forEach((quizButtonContinue) => {

    quizButtonContinue.addEventListener('click', () => {

        const parent = quizButtonContinue.closest('.quiz-questions');

        progress += 1;


        hideAnimation(parent, showNextQuizQuestion);

        console.log(progress);

    });

})

quizButtonStop.addEventListener('click', () => {
    preloader.style.opacity = '0';
    preloader.style.display = 'flex';


    let opacity = Number(window.getComputedStyle(preloader).getPropertyValue("opacity"));

    const animation = () => {
        opacity += 0.1;
        preloader.style.opacity = opacity;

        if(opacity < 1) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);

    setTimeout(() => {
        hideAnimation(preloader)
    }, 6000);

    setTimeout(() => {
        hideAnimation(quizQuestions[progress]);
    }, 4000)

    setTimeout(() => {
        showAnimation(quizFinalSuccessfully)
    }, 5000)

});



