// 현재 월과 년도를 표시할 엘리먼트를 가져옴
const monthYear = document.getElementById('month-year');

// 달력의 날짜가 표시될 엘리먼트를 가져옴
const calendarDates = document.getElementById('calendar-dates');

// 현재 날짜 정보를 가져옴
let today = new Date();
let currentMonth = today.getMonth(); // 현재 월 (0부터 11까지의 값으로 반환됨)
let currentYear = today.getFullYear(); // 현재 년도

// 달력을 렌더링하는 함수 (매개변수로 월과 년도를 받음)
const renderCalendar = (month, year) => {
    // 해당 월의 첫 번째 날과 마지막 날을 계산
    const firstDay = new Date(year, month, 1).getDay(); // 월의 첫 번째 날이 무슨 요일인지 반환 (0은 일요일, 6은 토요일)
    const lastDate = new Date(year, month + 1, 0).getDate(); // 월의 마지막 날짜를 가져옴
    const currentDay = today.getDate(); // 현재 날짜 (오늘)

    // 월과 년도를 업데이트 (달력 상단 제목)
    monthYear.innerHTML = `${year}년 ${month + 1}월`;

    // 이전에 생성된 날짜들을 초기화 (지움)
    calendarDates.innerHTML = '';

    // 첫 번째 날이 시작하기 전의 빈 칸을 생성 (이전 달의 날짜를 표시하지 않음)
    for (let i = 0; i < firstDay; i++) {
        const emptyDate = document.createElement('div'); // 빈 div 요소 생성
        calendarDates.appendChild(emptyDate); // 달력에 추가 (공백)
    }

    // 현재 월의 날짜를 생성하여 달력에 추가
    for (let date = 1; date <= lastDate; date++) {
        const dateElement = document.createElement('div'); // 날짜 요소 생성
        dateElement.classList.add('date'); // 'date' 클래스 추가 (스타일 적용을 위함)
        if(date == 8){
            dateElement.classList.add('fail'); 
        }
        dateElement.innerHTML = date; // 날짜를 요소 안에 추가

        // 오늘 날짜인 경우 강조 처리 ('today' 클래스 추가)
        if (date === currentDay && month === today.getMonth() && year === today.getFullYear()) {
            dateElement.classList.add('today');
        }

        // 지난 날짜 (오늘보다 이전의 날짜)는 'past-date' 클래스를 추가하여 스타일 변경
        if (
            year < today.getFullYear() || // 현재 년도보다 이전의 년도일 경우
            (year === today.getFullYear() && month < today.getMonth()) || // 현재 월보다 이전의 월일 경우
            (month === today.getMonth() && date < today.getDate()) // 현재 월이 동일하지만 오늘보다 이전 날짜일 경우
        ) {
            dateElement.classList.add('past-date');
        }

        // 완성된 날짜 요소를 달력에 추가
        calendarDates.appendChild(dateElement);
    }
};

// 초기 달력을 렌더링 (현재 월과 년도를 기준으로)
renderCalendar(currentMonth, currentYear);
