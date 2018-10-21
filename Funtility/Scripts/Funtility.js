var debugging = true;

// elementIDs: A single string or an array of strings. The name of one or multiple elements by ID.
// cssClass: A string the name of the class to add to the elements class list.
function ToggleCssClass(elementIDs, cssClass) {
    if (debugging) console.log("ToggleCssClass()");

    if (typeof elementIDs === 'string') {
        document.getElementById(elementIDs).classList.toggle(cssClass);
    } else {
        for (i = 0; i < elementIDs.length; i++) {
            document.getElementById(elementIDs[i]).classList.toggle(cssClass);
        }
    }
}

window.onclick = function (event) {
    if (debugging) console.log("window.onclick()");

    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function ResizeGameAreaHeight() {
    if (debugging) console.log("ResizeGameAreaHeight()");

    let newHeight = window.innerHeight
    let siteHeader = GetElementDimensions('site-header').height;
    let gameHeader = GetElementDimensions('game-header').height;
    let siteFooter = GetElementDimensions('site-footer').height;
    newHeight -= (siteHeader + gameHeader + siteFooter);
    document.getElementById('game-area').style.height = newHeight + "px";
}

function GetElementDimensions(ElementId) {
    if (debugging) console.log("GetElementDimensions()");

    let width = document.getElementById(ElementId).clientWidth;
    let height = document.getElementById(ElementId).clientHeight;
    return {
        "width": width,
        "height": height,
    };
}