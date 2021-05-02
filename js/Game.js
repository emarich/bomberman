class Game {

    constructor () {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let cellSize = 40; // 40 px on canvas

        // init the map
        this.map = new GameMap(ctx, cellSize);

        //init the player
        this.player = new Player(cellSize);
        this.player.setGameMapListener(this.map.getCells.bind(this.map));
    }

    onKeyPress(keyCode){
        this.player.onKeyPress(keyCode);
    }
}