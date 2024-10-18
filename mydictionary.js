// 각 word-container의 클릭 이벤트
document.querySelectorAll('.word-container').forEach(container => {
    container.style.height = '27px'; // 기본 높이로 설정

    container.addEventListener('click', () => {
        // 현재 높이를 체크하여 toggle하기
        if (container.style.height === '27px' || container.style.height === '') {
            const contentHeight = container.scrollHeight; // 내용의 실제 높이
            container.style.height = contentHeight + 'px'; // 내용에 맞게 높이 변경
        } else {
            container.style.height = '27px'; // 기본 높이로 되돌리기
        }
    });
});

// 각 union 이미지의 클릭 이벤트
document.querySelectorAll('.wordicon').forEach(wordicon => {
    const unionImage = wordicon.querySelector('.union'); // union 이미지 선택

    // 초기 이미지 설정
    unionImage.src = "Union1.png";

    unionImage.addEventListener('click', (event) => {
        event.stopPropagation(); // 클릭 이벤트 전파 방지

        // 클릭 시 union 이미지의 src 변경
        if (unionImage.src.endsWith('Union1.png')) {
            unionImage.src = 'Union2.png'; // Union2로 변경
        } else {
            unionImage.src = "Union1.png"; // Union1으로 변경
        }
    });
});



const totalButton = document.getElementsByClassName("total")[0];
const bookButton = document.getElementsByClassName("book")[0];
const totalc = document.getElementsByClassName("totalc")[0];
const bookc = document.getElementsByClassName("bookc")[0];

const boo = document.getElementsByClassName("bookc")[0];

boo.querySelectorAll('.wordicon').forEach(wordicon => {
    const uI = wordicon.querySelector('.union'); // union 이미지 선택

    // 초기 이미지 설정
    uI.src = "Union2.png";

    uI.addEventListener('click', (event) => {
        event.stopPropagation(); // 클릭 이벤트 전파 방지

        // 클릭 시 union 이미지의 src 변경
        if (uI.src.endsWith('Union1.png')) {
            uI.src = 'Union2.png'; // Union2로 변경
        } else {
            uI.src = "Union1.png"; // Union1으로 변경
        }
    });
});

const vv = () => {
            totalc.style.display = 'flex';
            bookc.style.display = 'none';
}
vv();

var isVerticalActive = true; // total이 블랙
totalButton.onclick = () => {
    if (!isVerticalActive) {
        totalButton.style.color = 'black';
        bookButton.style.color = '#BDBDBD';
        isVerticalActive = true;
        totalc.style.display = 'flex';
        bookc.style.display = 'none'
    }
};
bookButton.onclick = () => {
    if (isVerticalActive) {
        bookButton.style.color = 'black';
        totalButton.style.color = '#BDBDBD';
        isVerticalActive = false;
        totalc.style.display = 'none';
        bookc.style.display = 'flex';
    }
};