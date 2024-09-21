/**
 * Creates the square to know how many lines the player did
 */
export function createLinesScore() {
    const screen = document.getElementById("bottom");

    const text = document.createElement("p");
    text.innerHTML = "LINES";

    const line = document.createElement("div");
    line.classList.add("line");

    line.appendChild(text);
    screen.appendChild(line);
}
