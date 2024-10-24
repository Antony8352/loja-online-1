const games = [
    {
        id: 1,
        title: "Jogo A",
        price: "R$ 49,99",
        description: "Descrição detalhada do Jogo A. Um jogo incrível para todos os públicos.",
        image: "https://img.hype.games/cdn/635eed3e-ba6f-4cb7-9685-5c6ce64e1e0fRed-Dead-Redemption-2-Cover.jpg"
    },
    {
        id: 2,
        title: "Jogo B",
        price: "R$ 59,99",
        description: "Descrição detalhada do Jogo B. Desafie seus amigos e prove suas habilidades.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/0kRqUeSBIbQzz7cen3c989c6.jpg"
    },
    {
        id: 3,
        title: "Jogo C",
        price: "R$ 69,99",
        description: "Descrição detalhada do Jogo C. Uma aventura épica te espera!",
        image: "https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    }
];

function displayGames() {
    const gameList = document.getElementById('game-list');
    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        gameDiv.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <p><strong>${game.price}</strong></p>
            <button onclick="openModal(${game.id})">Comprar</button>
        `;
        gameList.appendChild(gameDiv);
    });
}

function openModal(gameId) {
    const game = games.find(g => g.id === gameId);
    document.getElementById('modal-title').innerText = game.title;
    document.getElementById('modal-description').innerText = game.description;
    document.getElementById('modal-price').innerText = game.price;
    document.getElementById('purchase-modal').style.display = 'block';

    document.getElementById('confirm-purchase').onclick = () => confirmPurchase(game.title);
}

function confirmPurchase(gameTitle) {
    alert(`Você comprou ${gameTitle}!`);
    closeModal();
}

function closeModal() {
    document.getElementById('purchase-modal').style.display = 'none';
}

document.getElementById('close-modal').onclick = closeModal;
window.onclick = (event) => {
    if (event.target === document.getElementById('purchase-modal')) {
        closeModal();
    }
};

document.addEventListener('DOMContentLoaded', displayGames);
