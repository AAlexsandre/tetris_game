/**
 * Creates a button to play/start/break the game
 */
export function createPlayButton() {
    const screen = document.getElementById("play");


    const play = document.createElement("div");
    play.innerHTML = "PLAY";

    play.classList.add("playButton");

    screen.appendChild(play);
}
