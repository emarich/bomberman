function initGame() {
    // init the game
    let game = new Game();

    document.addEventListener('keypress', (event) => {
        game.onKeyPress(event.keyCode); // when key is pressed, send it to the Player.js
    });
}

