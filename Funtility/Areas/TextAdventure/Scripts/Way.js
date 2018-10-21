function Way() {
    this.Id; // Unique id: 1
    this.WayType; // WayType.Door

    // In any given Area.Ways collection, Title must be unique.
    // If the user enters "go west" and there are more than one Way in areas 
    // with the same Title there will be no way to decide which Way the
    // user is referring to.
    // Example: [User is in an Area with two Ways with WayDirection.West]
    // User: go west
    // Comp: There are two doors to the west.
    //       'Green Door' and 'Red Door'
    //       Which do you want to use?
    // User: Go west through the green door.
    // Comp: (Area.Description)
    this.Title; // "Green Door"

    this.Description; // "It's green. And it's a door." 

    // If you can only access the way from one of the two areas
    // eg. You go down a hole.    
    this.OneWay; // Store the AreaId that IS accessible

    this.Areas = {} // The two areas this Way connects. {AreaID:WayDirection}
        // "1": "WayDirection.West" // From The Hallway the door leads West
        // "2": "WayDirection.East" // From The Bedroom the door leads East

    // If CanLock == true; logic will use isLocked & keyId
    this.CanLock; // boolean

    this.IsLocked; // boolean

     // If isLocked == true; what is the id of the key that can open it
    this.ItemId; // The Id of the item that is needed to unlock the door
}

var WayType = {
    Door: 1,
    Path: 2,
}

var WayDirection = {
    North:1,
    NorthEast:2,
    East:3,
    SouthEast:4,
    South:5,
    SouthWest:6,
    West:7,
    NorthWest:8,
    Up:9,
    Down:10,
}