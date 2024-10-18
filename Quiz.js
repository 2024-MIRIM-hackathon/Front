
const animatedDiv = document.getElementsByClassName('progress')[0];
const quizbox = document.getElementsByClassName("quiz-box")[0];
const answer = document.getElementsByClassName("answer")[0];

const quizQ = document.getElementsByClassName("quiz-question")[0];
const quizOps = document.getElementsByClassName("quiz-options")[0];

let cnt = 0;



// 1초 후에 애니메이션 시작
setTimeout(() => {
    animatedDiv.classList.add('expand');
}, 1000);

const chooanswer = (ans) => {
    // 정답 선택에 따른 배경색 변경
    if (ans) {
        quizbox.style.backgroundColor = '#81F297';
        
    } else {
        quizbox.style.backgroundColor = '#FD7575';
    }
   setTimeout(() => {
    if(cnt >= 4) {
        return location.href = "home.html";
        
    }
    getQuiz();
   }, 3000);
    setTimeout(() => {
        quizbox.style.backgroundColor = 'white';
        answer.style.backgroundColor = '#FFF828'
    }, 1000);

};
async function getQuiz() {
  
    cnt++;
    const response = await fetch("http://172.16.21.53:7099/quize");
    const json = await response.json()
    console.log(json);

    quizQ.innerHTML = json["question"];
    console.log(json["question"]);

    quizOps.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        let optionB = document.createElement("button");
        optionB.className = 'option';
        optionB.textContent = json["options"][i];
        optionB.onclick = () => chooanswer(false);
        if (json["options"][i] === json["result"]) {
            optionB.className += ' answer';
            optionB.onclick = () => chooanswer(true);
        }
        console.log(json["options"][i]);
        quizOps.appendChild(optionB);
    }
}

getQuiz();
/*setTimeout(() => {
    async function getQuiz() {
        const response = await fetch("http://172.16.21.53:7099/quize");
        const json = await response.json()
        console.log(json);
    const Start = () => {
        quizQ.innerHTML = json["question"];
        console.log(json["question"]);
    }
    Start();
    const Op = () =>{
        for(let i=0; i<4; i++){
            let optionB = document.createElement("button");
            optionB.className = 'option';
            optionB.textContent = json["options"][i];
            optionB.onclick = () => chooanswer(false);
            if(json["options"][i] === json["result"]){
                optionB.className += ' answer';
                optionB.onclick = () => chooanswer(true);
            }
            console.log(json["options"][i]);
            quizOps.appendChild(optionB);
        }
    }
    Op();
    }
    cnt++;
    getQuiz();
}, 16000);

setTimeout(() => {
    async function getQuiz() {
        const response = await fetch("http://172.16.21.53:7099/quize");
        const json = await response.json()
        console.log(json);
    const Start = () => {
        quizQ.innerHTML = json["question"];
        console.log(json["question"]);
    }
    Start();
    const Op = () =>{
        for(let i=0; i<4; i++){
            let optionB = document.createElement("button");
            optionB.className = 'option';
            optionB.textContent = json["options"][i];
            optionB.onclick = () => chooanswer(false);
            if(json["options"][i] === json["result"]){
                optionB.className += ' answer';
                optionB.onclick = () => chooanswer(true);
            }
            console.log(json["options"][i]);
            quizOps.appendChild(optionB);
        }
    }
    Op();
    }
    cnt++;
    getQuiz();
}, 31000);
setTimeout(() => {
    async function getQuiz() {
        const response = await fetch("http://172.16.21.53:7099/quize");
        const json = await response.json()
        console.log(json);
    const Start = () => {
        quizQ.innerHTML = json["question"];
        console.log(json["question"]);
    }
    Start();
    const Op = () =>{
        for(let i=0; i<4; i++){
            let optionB = document.createElement("button");
            optionB.className = 'option';
            optionB.textContent = json["options"][i];
            optionB.onclick = () => chooanswer(false);
            if(json["options"][i] === json["result"]){
                optionB.className += ' answer';
                optionB.onclick = () => chooanswer(true);
            }
            console.log(json["options"][i]);
            quizOps.appendChild(optionB);
        }
    }
    Op();
    }
    cnt++;
    getQuiz();
}, 46000);
// async function getQuiz() {
//     const response = await fetch("http://172.16.21.53:7099/quize");
//     const json = await response.json()
//     console.log(json);
// const Start = () => {
//     quizQ.innerHTML = json["question"];
//     console.log(json["question"]);
// }
// Start();
// const Op = () =>{
//     for(let i=0; i<4; i++){
//         let optionB = document.createElement("button");
//         optionB.className = 'option';
//         optionB.textContent = json["options"][i];
//         optionB.onclick = () => chooanswer(false);
//         if(json["options"][i] === json["result"]){
//             optionB.className += ' answer';
//             optionB.onclick = () => chooanswer(true);
//         }
//         console.log(json["options"][i]);
//         quizOps.appendChild(optionB);
//     }
// }
// Op();
// }
// cnt++;
// console.log(cnt);*/






