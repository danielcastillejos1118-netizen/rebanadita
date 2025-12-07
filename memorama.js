document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("memory-grid");
  const movesSpan = document.getElementById("memory-moves");
  const matchesSpan = document.getElementById("memory-matches");
  const resetBtn = document.getElementById("memory-reset");
  const message = document.getElementById("memory-message");

  const baseCards = [
    "🍕 Pizza",
    "🧀 Queso",
    "🔥 Horno",
    "🌾 Masa",
    "🍅 Tomate",
    "🥫 Salsa",
    "😊 Rebanadita",
    "🎉 Felicidad"
  ];

  let firstCard = null;
  let lockBoard = false;
  let moves = 0;
  let matches = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setupGame() {
    grid.innerHTML = "";
    message.textContent = "";
    moves = 0;
    matches = 0;
    movesSpan.textContent = moves;
    matchesSpan.textContent = matches;
    firstCard = null;
    lockBoard = false;

    const cards = shuffle([...baseCards, ...baseCards]);

    cards.forEach(text => {
      const card = document.createElement("div");
      card.className = "memory-card";
      card.dataset.value = text;

      const inner = document.createElement("div");
      inner.className = "memory-card-inner";

      const front = document.createElement("div");
      front.className = "memory-face memory-front";
      front.textContent = "🍕";

      const back = document.createElement("div");
      back.className = "memory-face memory-back";
      back.textContent = text;

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);

      card.addEventListener("click", () => onCardClick(card));
      grid.appendChild(card);
    });
  }

  function onCardClick(card) {
    if (lockBoard) return;
    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    moves++;
    movesSpan.textContent = moves;

    const secondCard = card;
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
      matches++;
      matchesSpan.textContent = matches;
      firstCard = null;

      if (matches === baseCards.length) {
        message.textContent = "¡Fantástico! Encontraste todas las parejas de Rebanadita 🎉";
      }
    } else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = null;
        lockBoard = false;
      }, 800);
    }
  }

  resetBtn.addEventListener("click", setupGame);
  setupGame();
});