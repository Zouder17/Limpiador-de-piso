function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.slider').addEventListener('mousedown', (e) => {
    const slider = e.target;
    const container = slider.parentNode;
    const before = container.querySelector('.before');
    const after = container.querySelector('.after');

    function onMouseMove(event) {
        const rect = container.getBoundingClientRect();
        const position = event.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, position / rect.width));
        before.style.width = `${percentage * 100}%`;
        after.style.width = `${(1 - percentage) * 100}%`;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});
