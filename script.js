const imagesData = {
    hero: 'path/to/hero/image.jpg',
    highlight: 'path/to/highlight/image.jpg'
};

const highlightCards = [
    { title: 'Card 1', content: 'Content for Card 1', image: imagesData.highlight },
    { title: 'Card 2', content: 'Content for Card 2', image: imagesData.highlight },
    // more card objects can be added here
];

function createHighlights() {
    const container = document.getElementById('highlights-container');
    highlightCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('highlight-card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = card.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = card.content;

        const imageElement = document.createElement('img');
        imageElement.src = card.image;

        cardElement.appendChild(titleElement);
        cardElement.appendChild(contentElement);
        cardElement.appendChild(imageElement);
        container.appendChild(cardElement);
    });
}