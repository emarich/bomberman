class Cell {
    
    constructor(ctx, cellSize, cellX, cellY, type) {
        // ATTRIBUTES
        this.ctx = ctx;
        this.cellSize = cellSize;
        this.x = cellX;
        this.y = cellY;
        this.type = type;

        this.isBombSet = false;

        // PAINT CELL
        this.cellImage = new Image();
        this.cellImage.onload = () => {
            ctx.drawImage(this.cellImage, this.x, this.y, this.cellSize, this.cellSize);
        };

        switch (this.type) {
            case 0:
                this.cellImage.src='../images/wall.png';
                break;
            case 2:
                this.cellImage.src='../images/cracked_wall.png';
                break;
            default:
                break;
        }
    }

    // clear cell's content
    clear() {
        this.ctx.clearRect(this.x, this.y, this.cellSize, this.cellSize);
    }

    // paint cell with player
    drawPlayer() {
        this.cellImage.src='../images/player1.png';
    }

    // paint cell with bomb
    drawBomb() {
        this.cellImage.src='../images/bomb.png';
        this.isBombSet = true;
    }
}