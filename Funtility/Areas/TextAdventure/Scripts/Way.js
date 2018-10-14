function Way() {
    this.id = new Number; //Needs a mechanism to ensure the id is unique
    this.state = new WayState;
    this.keyId = new Number;
}

var WayState = {
    Locked:1,
    Unlocked:2,
    Open:3,
    Blocked:4
}