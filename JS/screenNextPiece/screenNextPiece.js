/**
 * Creates the square to know what is the next tetriminos
 */
function createScreen() {
    const screen = document.getElementById("data");
    const nextPiece = document.createElement("div");
    nextPiece.classList.add("nextPiece");

    screen.appendChild(nextPiece);
}

createScreen();