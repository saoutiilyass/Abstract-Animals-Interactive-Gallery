document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.blurred-image');
        images.forEach(image => {
            image.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    });
function startGame() {
    window.location.href = 'page1.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const info = document.getElementById('info');
    const audio = new Audio('Music1.wav');
    audio.loop = true;
    let isPlaying = false;

    window.toggleMusic = function() {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            info.style.display = 'none';
        } else {
            info.style.display = 'block';
            audio.play();
        }
        isPlaying = !isPlaying;
    };
});
function showInfo(quizId) {
    document.getElementById(quizId).style.display = 'block';
}
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function checkAnswer(inputId, correctAnswer) {
    const answer = normalizeString(document.getElementById(inputId).value.trim().toLowerCase());
    const normalizedCorrectAnswer = normalizeString(correctAnswer.toLowerCase());
    const result = document.getElementById('result' + inputId.charAt(inputId.length - 1));
    
    if (answer === normalizedCorrectAnswer) {
        result.textContent = 'Bonne réponse. Félicitations !';
        result.style.color = 'gold';
    } else {
        result.textContent = 'Mauvaise réponse... retentez votre chance !';
        result.style.color = '#ff4500';
    }
}


function toggleInfo(quizId) {
    const quizElement = document.getElementById(quizId);
    if (quizElement.style.display === 'none' || quizElement.style.display === '') {
        quizElement.style.display = 'block';
    } else {
        quizElement.style.display = 'none';
    }
}
function revealText(element) {
    element.classList.toggle('revealed');
}
