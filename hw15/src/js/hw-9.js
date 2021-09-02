const boxSize = 50;
const rowNum = 5;
const colNum = 5;

function randomColorRGB() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function buildTile(size = boxSize) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.width = `${size}px`;
    tile.style.height = `${size}px`;
    tile.style.backgroundColor = randomColorRGB();

    return tile;
}

function generateTileBoard(rows = rowNum, columns = colNum) {
    const container = document.querySelector('.box-wrapper');
    container.innerHTML = '';
    container.style.width = `${colNum * boxSize}px`;
    container.style.height = `${rowNum * boxSize}px`;

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++) {
            container.append(buildTile());
        }
    }
}

function generateTilesInterval() {
    generateTileBoard();
    setInterval(() => generateTileBoard(), 1000);
}

export { generateTilesInterval }