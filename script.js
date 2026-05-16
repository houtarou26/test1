const btn = document.getElementById('flee-btn');
const container = document.querySelector('.button-container');

btn.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Calculate random positions within the container
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new coordinates
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
});