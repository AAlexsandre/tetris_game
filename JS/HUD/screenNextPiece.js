/**
 * Creates the square to know what is the next tetriminos
 */
export function createScreen() {
    const hud = document.getElementById("top");

    const text = document.createElement("p");
    text.innerHTML = "NEXT TETRIMINO";
    
    const nextPiece = document.createElement("div");
    nextPiece.classList.add("nextPiece");

    nextPiece.appendChild(text);
    hud.appendChild(nextPiece);
}