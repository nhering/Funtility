var game = new TextAdventureGame();

function InitTextAdventureGame(gameData) {
    game = JSON.parse(gameData);
}

function TextAdventureGame() {
    this.Areas = new Array;
    this.Player = new Player();
    this.Ways = new Array;
}