// const selectors = {
//     boardContainer: document.querySelector('.board-container'),
//     board: document.querySelector('.board'),
//     moves: document.querySelector('.moves'),
//     timer: document.querySelector('.timer'),
//     start: document.querySelector('button'),
//     win: document.querySelector('.win')
//   };
  
//   const state = {
//     gameStarted: false,
//     flippedCards: 0,
//     totalFlips: 0,
//     totalTime: 0,
//     loop: null
//   };
  
//   const shuffle = array => {
//     const clonedArray = [...array];
  
//     for (let i = clonedArray.length - 1; i > 0; i--) {
//       const randomIndex = Math.floor(Math.random() * (i + 1));
//       const original = clonedArray[i];
  
//       clonedArray[i] = clonedArray[randomIndex];
//       clonedArray[randomIndex] = original;
//     }
//     return clonedArray;
//   };
  
//   const pickRandom = (array, items) => {
//     const clonedArray = [...array];
//     const randomPicks = [];
  
//     for (let i = 0; i < items; i++) {
//       const randomIndex = Math.floor(Math.random() * clonedArray.length);
  
//       randomPicks.push(clonedArray[randomIndex]);
//       clonedArray.splice(randomIndex, 1);
//     }
//     return randomPicks;
//   };
  
//   const generateGame = () => {
//     const dimensions = selectors.board.getAttribute('data-dimension');
  
//     if (dimensions % 2 !== 0) {
//       throw new Error("The dimension of the board must be an even number.");
//     }
  
//     const emojis = [
//       "Images/Alien1.svg",
//       "Images/Alien2.svg",
//       "Images/Alien3.svg",
//       "Images/Alien4.svg",
//       "Images/Alien5.svg",
//       "Images/Alien6.svg",
//       "Images/Alien7.svg",
//       "Images/Alien8.svg",
//     ];
//     const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
//     const items = shuffle([...picks, ...picks]);
//     const cards = `
//       <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
//         ${items.map(item => `
//           <div class="card">
//             <div class="card-front"></div>
//             <div class="card-back">${item}</div>
//           </div>
//         `).join('')}
//       </div>
//     `;
//     const parser = new DOMParser().parseFromString(cards, 'text/html');
//     selectors.board.replaceWith(parser.querySelector('.board'));
//   };
  
//   const startGame = () => {
//     state.gameStarted = true;
//     selectors.start.classList.add('disabled');
  
//     state.loop = setInterval(() => {
//       state.totalTime++;
  
//       selectors.moves.innerText = `${state.totalFlips} moves`;
//       selectors.timer.innerText = `Time: ${state.totalTime} sec`;
//     }, 1000);
//   };
  
//   const flipBackCards = () => {
//     document.querySelectorAll('.card:not(.matched)').forEach(card => {
//       card.classList.remove('flipped');
//     });
  
//     state.flippedCards = 0;
//   };
  
//   const flipCard = card => {
//     state.flippedCards++;
//     state.totalFlips++;
  
//     if (!state.gameStarted) {
//       startGame();
//     }
//     if (state.flippedCards <= 2) {
//       card.classList.add('flipped');
//     }
//     if (state.flippedCards === 2) {
//       const flippedCards = document.querySelectorAll('.flipped:not(.matched)');
//       if (flippedCards[0].innerText === flippedCards[1].innerText) {
//         flippedCards[0].classList.add('matched');
//         flippedCards[1].classList.add('matched');
//       }
//       setTimeout(() => {
//         flipBackCards();
//       }, 1000);
//     }
//     if (!document.querySelectorAll('.card:not(.flipped)').length) {
//       setTimeout(() => {
//         selectors.boardContainer.classList.add('flipped');
//         selectors.win.innerHTML = `
//           <span class="win-text">
//             Bravo !<br />
//             with <span class="highlight">${state.totalFlips}</span> moves
//             under <span class="highlight">${state.totalTime}</span> seconds
//           </span>
//         `;
//         clearInterval(state.loop);
//       }, 1000);
//     }
//   };
  
//   const attachEventListeners = () => {
//     document.addEventListener('click', event => {
//       const eventTarget = event.target;
//       const eventParent = eventTarget.parentElement;
  
//       if (eventTarget.classList.contains('card') && !eventParent.classList.contains('flipped')) {
//         flipCard(eventParent);
//       } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.classList.contains('disabled')) {
//         startGame();
//       }
//     });
//   };
  
//   generateGame();
//   attachEventListeners();
  
const selectors = {
    boardContainer: document.querySelector('.board-container'), // Sélectionne le conteneur du plateau de jeu
    board: document.querySelector('.board'), // Sélectionne le plateau de jeu
    moves: document.querySelector('.moves'), // Sélectionne l'élément affichant le nombre de mouvements
    timer: document.querySelector('.timer'), // Sélectionne l'élément affichant le chronomètre
    start: document.querySelector('button'), // Sélectionne le bouton de démarrage du jeu
    win: document.querySelector('.win') // Sélectionne l'élément d'affichage de la victoire
  };
  
  const state = {
    gameStarted: false, // Indique si le jeu a commencé ou non
    flippedCards: 0, // Compteur des cartes retournées
    totalFlips: 0, // Compteur total des retournements de cartes
    totalTime: 0, // Temps total écoulé
    loop: null // Identifiant de la boucle de chronomètre
  };
  
  const shuffle = array => {
    const clonedArray = [...array];
  
    for (let i = clonedArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const original = clonedArray[i];
  
      clonedArray[i] = clonedArray[randomIndex];
      clonedArray[randomIndex] = original;
    }
    return clonedArray;
  };
  
  const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];
  
    for (let i = 0; i < items; i++) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length);
  
      randomPicks.push(clonedArray[randomIndex]);
      clonedArray.splice(randomIndex, 1);
    }
    return randomPicks;
  };
  
  const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension'); // Récupère les dimensions du plateau de jeu
  
    if (dimensions % 2 !== 0) {
      throw new Error("The dimension of the board must be an even number.");
    }
  
    const emojis = [
      "Images/Alien1.svg",
      "Images/Alien2.svg",
      "Images/Alien3.svg",
      "Images/Alien4.svg",
      "Images/Alien5.svg",
      "Images/Alien6.svg",
      "Images/Alien7.svg",
      "Images/Alien8.svg",
    ];
    const picks = pickRandom(emojis, (dimensions * dimensions) / 2); // Sélectionne aléatoirement les paires d'images pour le plateau de jeu
    const items = shuffle([...picks, ...picks]); // Mélange les paires d'images
    const cards = `
      <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
        ${items.map(item => `
          <div class="card">
            <div class="card-front"></div>
            <div class="card-back">${item}</div>
          </div>
        `).join('')}
      </div>
    `;
    const parser = new DOMParser().parseFromString(cards, 'text/html');
    selectors.board.replaceWith(parser.querySelector('.board')); // Génère le plateau de jeu avec les cartes et les insère dans le DOM
  };
  
  const startGame = () => {
    state.gameStarted = true; // Définit le jeu comme étant démarré
    selectors.start.classList.add('disabled'); // Désactive le bouton de démarrage
  
    state.loop = setInterval(() => {
      state.totalTime++; // Incrémente le temps total écoulé
  
      selectors.moves.innerText = `${state.totalFlips} moves`; // Met à jour l'affichage du nombre de mouvements
      selectors.timer.innerText = `Time: ${state.totalTime} sec`; // Met à jour l'affichage du chronomètre
    }, 1000); // Exécute la fonction toutes les secondes
  };
  
  const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
      card.classList.remove('flipped'); // Retourne les cartes qui ne sont pas encore associées (non "matched")
    });
  
    state.flippedCards = 0; // Réinitialise le compteur de cartes retournées
  };
  
  const flipCard = card => {
    state.flippedCards++; // Incrémente le compteur de cartes retournées
    state.totalFlips++; // Incrémente le compteur total de retournements de cartes
  
    if (!state.gameStarted) {
      startGame(); // Démarre le jeu si ce n'est pas encore fait
    }
    if (state.flippedCards <= 2) {
      card.classList.add('flipped'); // Retourne la carte cliquée
    }
    if (state.flippedCards === 2) {
      const flippedCards = document.querySelectorAll('.flipped:not(.matched)');
      if (flippedCards[0].innerText === flippedCards[1].innerText) {
        flippedCards[0].classList.add('matched'); // Marque les cartes retournées comme "matched" si elles sont identiques
        flippedCards[1].classList.add('matched');
      }
      setTimeout(() => {
        flipBackCards();
      }, 1000); // Retourne les cartes après une seconde si elles ne sont pas identiques
    }
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
      setTimeout(() => {
        selectors.boardContainer.classList.add('flipped'); // Affiche l'écran de victoire lorsque toutes les cartes sont "matched"
        selectors.win.innerHTML = `
          <span class="win-text">
            Bravo !<br />
            with <span class="highlight">${state.totalFlips}</span> moves
            under <span class="highlight">${state.totalTime}</span> seconds
          </span>
        `;
        clearInterval(state.loop); // Arrête la boucle du chronomètre
      }, 1000);
    }
  };
  
  const attachEventListeners = () => {
    document.addEventListener('click', event => {
      const eventTarget = event.target;
      const eventParent = eventTarget.parentElement;
  
      if (eventTarget.classList.contains('card') && !eventParent.classList.contains('flipped')) {
        flipCard(eventParent); // Retourne la carte cliquée si elle n'est pas déjà retournée
      } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.classList.contains('disabled')) {
        startGame(); // Démarre le jeu lorsqu'on clique sur le bouton de démarrage
      }
    });
  };
  
  generateGame(); // Génère le plateau de jeu au chargement de la page
  attachEventListeners(); // Attache les écouteurs d'événements aux éléments interactifs
  