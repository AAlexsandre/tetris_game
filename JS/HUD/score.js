/**
 * Creates the square to know the current score
 */
export function createScore() {
    const hud = document.getElementById("top");

    const text = document.createElement("p");
    text.innerHTML = "CURRENT SCORE";

    const score = document.createElement("div");
    score.classList.add("score");

    score.appendChild(text);
    hud.appendChild(score);
}
