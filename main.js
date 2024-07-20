window.addEventListener('load', () => {
    const scrollingContent = document.querySelectorAll('.scrolling-content');
    const firstContentWidth = scrollingContent[0].offsetWidth;

    scrollingContent[1].style.left = `${firstContentWidth}px`;

    function scrollContent() {
        scrollingContent.forEach(content => {
            let left = parseFloat(content.style.left || 0);
            left -= 1;
            if (left <= -firstContentWidth) {
                left = firstContentWidth;
            }
            content.style.left = `${left}px`;
        });
    }

    setInterval(scrollContent, 50); // Приблизительно 60fps
});