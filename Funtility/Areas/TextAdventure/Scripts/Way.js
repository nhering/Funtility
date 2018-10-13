function Way() {
    this.id = new Number; //Needs a mechanism to ensure the id is unique
    this.direction = new Direction;
    this.toArea = new Number; //The area this Way connects to
    //This could also have properties such as
    //this.canLock = new Boolean; //Does this Way ever need some kind of key?
    //this.isLocked = new Boolean; //Is this Way locked?
    //this.unlocksWith = new Number; //The Id of the item that unlocks it
}

var Direction = {
    North:1,
    South:2,
    East:3,
    West:4,
    Up:5,
    Down:6
}