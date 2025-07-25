document.addEventListener('DOMContentLoaded', () => {
    // Button interaction
    const glowBtn = document.querySelector('.glow-btn');
    if(glowBtn) {
        glowBtn.addEventListener('click', () => {
            alert('🚀 Exploring awesome features!');
            addNewCard('New Feature', 'Discover our latest addition');
        });
    }

    // Card hover effect
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'rgba(255, 255, 255, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

function addNewCard(title, content) {
    const cardContainer = document.querySelector('.card-container');
    const newCard = document.createElement('article');
    newCard.className = 'content-card';
    newCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;
    cardContainer.appendChild(newCard);
}