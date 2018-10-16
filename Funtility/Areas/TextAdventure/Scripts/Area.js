class Area {
    constructor(title, description) {
        this.Id = NextAreaId(); // Unique id: 1

        // I'm not sure this is the best way to do this
        this.Title = title; // "Bedroom" or "Hallway"

        this.Description = description; // "You are in a bedroom. There is a nature painting on the wall. It's lovely."

        // Collection of {"WayId":AreaId}
        // WayId: The Id of the Way in this Ways collection
        // AreaId: The Id of other Area that contains this Way in its Ways collection
        this.Ways = {}; // {"1":2}
    }
}

// TODO Modify NextAreaId() to work for any array of objects at the root
// level within the TextAdventureGame object that has an Id property
function NextAreaId() {
    // Add the first area
    if (game.Areas.length < 1) return 1;

    // Sort the array of areas by id
    function CompareNumbers(a, b) {
        return a.id - b.id;
    }
    game.Areas.sort(CompareNumbers);

    // Find the smallest available id
    let nextId = null;
    let i = 0;
    while (nextId == null) {
        if (game.Areas[i].Id == i + 1) {
            continue;
        } else {
            nextId = i + 1;
        }
        i++;
    }
    return nextId;
}