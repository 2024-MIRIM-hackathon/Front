document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        alert(`${this.innerText}을(를) 선택했습니다.`);
    });
});
