function Area() {
    this.id = new Number; //Needs a mechanism to ensure the id is unique
    this.title = new String; //e.g. The den, or North end of the path in the Forgoten Forest
    this.description = new String;
    //Navigation Property
    this.ways = new Array; //Array of way ids

}

function NextAreaId() {
    if (game.areas == null) return 1;

}