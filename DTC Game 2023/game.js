const character = document.getElementById("character");
const moveAmount = 10;

// Function to move the character
function moveCharacter(direction) {
    switch (direction) {
        case "left":
            characterX -= moveAmount;
            break;
        case "right":
            characterX += moveAmount;
            break;
        case "up":
            characterY -= moveAmount;
            break;
        case "down":
            characterY += moveAmount;
            break;
    }
    character.style.left = characterX + "px";
    character.style.top = characterY + "px";
}

// Function to set the initial position of the character
function setInitialPosition(x, y) {
    characterX = x;
    characterY = y;
    character.style.left = characterX + "px";
    character.style.top = characterY + "px";
}

// Set the initial position (you can change these values)
setInitialPosition(375, 320);

// Event listeners for arrow keys
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            moveCharacter("left");
            break;
        case "ArrowRight":
            moveCharacter("right");
            break;
        case "ArrowUp":
            moveCharacter("up");
            break;
        case "ArrowDown":
            moveCharacter("down");
            break;
    }
});

window.addEventListener("load", () => {
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");

    overlay.style.display = "block";

    closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
    });
});