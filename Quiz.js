const animatedDiv = document.getElementsByClassName('progress')[0];
const quizbox = document.getElementsByClassName("quiz-box")[0];
const answer = document.getElementsByClassName("answer")[0];

// 1초 후에 애니메이션 시작
setTimeout(() => {
    animatedDiv.classList.add('expand');
}, 1000);

const chooanswer = (ans) => {
    // 정답 선택에 따른 배경색 변경
    if(ans) {
        quizbox.style.backgroundColor = '#81F297';
    } else {
        quizbox.style.backgroundColor = '#FD7575';
    }
    setTimeout(() => {
        quizbox.style.backgroundColor = 'white';
        answer.style.backgroundColor = '#FFF828'
    }, 1000);
};
