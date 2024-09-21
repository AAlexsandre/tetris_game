/**
 * Creates the square to know what is the current level
 */
export function createLevelScore() {
    const screen = document.getElementById("bottom");

    const text = document.createElement("p");
    text.innerHTML = "LEVEL";

    const level = document.createElement("div");
    level.classList.add("level");

    level.appendChild(text);
    screen.appendChild(level);
}
