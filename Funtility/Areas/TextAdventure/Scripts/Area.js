function Area() {
    this.id; //unique numeric id
    this.title; //e.g. The den, or North end of the path in the Forgotten Forest
    this.description; //
    //Navigation Property
    this.ways = new {}; //Dictionary of wayId:?
}

function NextAreaId() {
    //add the first area
    if (game.areas.length < 1) return 1;

    //sort the array of areas by id
    function compareNumbers(a, b) {
        return a.id - b.id;
    }
    game.areas.sort(compareNumbers);

    //find the smallest available id
    let nextAreaId = null;
    let i = 0;
    while (nextAreaId == null) {
        if (game.areas[i].id == i + 1) {
            continue;
        } else {
            nextAreaId = i + 1;
        }
        i++;
    }
    return nextAreaId;
}