class GameMap {

    constructor(ctx, cellSize) {
        // 0 = solid wall
        // 1 = floor
        // 2 = cracked wall
        this.mapData=[
            [0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,2,1,2,2,2,1,0],
            [0,1,0,1,0,1,0,1,0,1,0,1,0],
            [0,2,1,1,1,1,1,1,1,1,1,2,0],
            [0,1,0,1,0,1,0,1,0,1,0,2,0],
            [0,1,1,1,1,1,1,1,1,1,1,2,0],
            [0,1,0,1,0,1,0,1,0,2,0,1,0],
            [0,2,1,1,1,2,1,1,1,1,1,1,0],
            [0,1,0,1,0,1,0,1,0,2,0,1,0],
            [0,1,1,1,1,1,1,2,2,1,1,1,0],
            [0,1,0,2,0,1,0,1,0,1,0,1,0],
            [0,1,1,1,1,1,1,1,1,2,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.cellSize = cellSize; // width and height of a cell
        this.cells = []; // 2d array with classes Cell representing game's map

        // fill the map with classes Cell
        for (let row = 0; row < this.mapData.length; row++) {
            this.cells[row] = [];
            let mapRow = this.mapData[row];
            for (let coll = 0; coll < mapRow.length; coll++) {
                // coll => lenght => x
                // row => height => y
                this.cells[row][coll] = new Cell(ctx, this.cellSize, coll * this.cellSize, row * this.cellSize, mapRow[coll]);;
            }
        }

        // init position of player
        this.cells[1][1].drawPlayer();
    }

    getCells() {
        return this.cells;
    }
};