window.addEventListener('DOMContentLoaded', () => {
    const sentenceContainer = document.querySelector('.sentence-container');
    const meanContainer = document.querySelector('.mean-container');

    let isSyncingScroll = false; // 스크롤 동기화를 방지하기 위한 플래그

    // sentence-container 스크롤 시 mean-container 동기화
    sentenceContainer.addEventListener('scroll', () => {
        if (!isSyncingScroll) {
            isSyncingScroll = true;
            meanContainer.scrollLeft = sentenceContainer.scrollLeft;
            isSyncingScroll = false;
        }
    });

    // mean-container 스크롤 시 sentence-container 동기화
    meanContainer.addEventListener('scroll', () => {
        if (!isSyncingScroll) {
            isSyncingScroll = true;
            sentenceContainer.scrollLeft = meanContainer.scrollLeft;
            isSyncingScroll = false;
        }
    });
});
