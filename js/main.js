console.log("Javascript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
const puzzlePieceDiv = document.querySelector(".puzzle-pieces");
const resetButton = document.querySelector("#resetBut");
let draggedPiece;

//functions

function reset() {
    console.log("Reset pieces");
    puzzlePieces.forEach(piece => puzzlePieceDiv.appendChild(piece));
}

function changeBGImage() {
    console.log("changeBGimage called");
    //Method 1
    console.log(this.id);
    // background-image: url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;

    // fix goes here
    puzzlePieces.forEach(piece => puzzlePieceDiv.appendChild(piece));

    // Change the images of the pieces accordingly to the background image by calling the Node number
    puzzlePieces[0].src = `./images/topLeft${this.id}.jpg`;
    puzzlePieces[1].src = `./images/topRight${this.id}.jpg`;
    puzzlePieces[2].src = `./images/bottomLeft${this.id}.jpg`;
    puzzlePieces[3].src = `./images/bottomRight${this.id}.jpg`;
    
    // games.forEach(game => game.addEventListener("click", logId));
    // //Method 2
    // console.log(event.currentTarget.id);
    // puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop() {
    // This is where the fix will go
    // going to use an if statement
    if(this.children.length >= 1) {
        console.log("A piece is already here");
        return;
    }
    this.appendChild(draggedPiece);
}

//eventListeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetButton.addEventListener("click", reset);