var game = new TextAdventureGame;

function InitTextAdventureGame(gameData) {
    //gameJson = JSON.parse(gameData);
    //game.areas = gameJson.areas;
    //game.players = gameJson.players;
    //game.ways = gameJson.ways;
}

function TextAdventureGame() {
    this.areas = new Array;
    this.players = new Array;
    this.ways = new Array;

    this.newArea = NewArea();
}

function NewArea() {
    let area = new Area();
}