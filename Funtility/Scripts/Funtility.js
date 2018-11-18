// elementIDs: (string) or (array of strings) The name of one or multiple elements by ID.
// cssClass: (string) The name of the class to add to the elements class list.
function ToggleCssClass(elementIDs, cssClass) {
    DoLogging(LogType.Function, "ToggleCssClass(elementIDs, cssClass)", [elementIDs, cssClass]);

    if (typeof elementIDs === 'string') {
        document.getElementById(elementIDs).classList.toggle(cssClass);
    } else {
        for (i = 0; i < elementIDs.length; i++) {
            document.getElementById(elementIDs[i]).classList.toggle(cssClass);
        }
    }
}

window.onmousedown = function (event) {
    if (!event.target.matches('.dropdown-buttfight on')) {
        CloseDropdowns();
    }
}

function CloseDropdowns() {
    DoLogging(LogType.Function, "CloseDropdowns()");

    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

//#region ResizeBodyArea

function ResizeBodyArea() {
    DoLogging(LogType.Function, "ResizeBodyArea()", []);
    let siteBody = document.getElementById('site-body');

    let newHeight = window.innerHeight;
    let siteHeader = GetElementDimensions('site-header').height;
    let siteFooter = GetElementDimensions('site-footer').height;
    newHeight -= (siteHeader + siteFooter);
    siteBody.setAttribute("style", "top:" + siteHeader + "px;bottom:" + siteFooter + "px;height:" + newHeight + "px;");
}

function GetElementDimensions(ElementId) {
    DoLogging(LogType.Function, "GetElementDimensions()");

    return {
        "width": document.getElementById(ElementId).clientWidth,
        "height": document.getElementById(ElementId).clientHeight,
    };
}

//#endregion

//#region Modal

//#region Modal Object

function ModalObj() {
    // Select where the HTML to render in the modal is stored
    this.Sources = { Server: 1, Client: 2 };
    this.HtmlSource = "";
    // For the Sources.Server option
    this.ControllerAction = ""; // REQUIRED
    this.AntiforgeryTokenElementId = "";
    this.DataForController = {};
    // For the Sources.Client option
    this.InnerHtmlDivId = "";
    // Default information
    this.ModalFadeBackgroundColor = 'background-color: rgba(255,255,255,.9)';
    // this.ModalDiv = document.createElement("div");
    this.ModalDivInnerHtml = "";

}

ModalObj.prototype.getAntiforgeryToken = function () {
    if (this.AntiforgeryTokenElementId !== "") {
        let form = document.getElementById(this.AntiforgeryTokenElementId);        
        this.DataForController.__RequestVerificationToken = $('input[name="__RequestVerificationToken"]', form).val();
    }
}

ModalObj.prototype.showModal = function () {
    let fade = document.getElementById("modalFade");
    fade.removeAttribute("style");
    fade.setAttribute("class", "modal-fade");
    fade.setAttribute("style", this.ModalFadeBackgroundColor);
    // this.ModalDiv.innerHTML = this.ModalDivInnerHtml;
    // fade.appendChild(this.ModalDiv);
    fade.innerHTML = this.ModalDivInnerHtml;

    //Center the modal
    let modalFadeDims = GetElementDimensions('modalFade');
    let modalBodyDims = GetElementDimensions('modalBody');
    let left = (modalFadeDims.width - modalBodyDims.width) / 2;
    let top = (modalFadeDims.height - modalBodyDims.height) / 2;
    let modalBody = document.getElementById('modalBody');
    modalBody.setAttribute('style', 'left: ' + left + 'px; top: ' + top + 'px;');
}

//#endregion

function Modal_Open(modalObj) {
    DoLogging(LogType.Function, "Modal_Open(modalObj)", [modalObj]);

    if (modalObj.InnerHtmlDivId !== "") {
        let innerHtmlDiv = document.getElementById(modalObj.InnerHtmlDivId);
        modalObj.ModalDivInnerHtml = innerHtmlDiv.innerHTML;
        modalObj.showModal();
    } else {
        Modal_CallPartial(modalObj);
    }
}

function Modal_Close() {
    DoLogging(LogType.Function, "Modal_Close()", []);

    let fade = document.getElementById("modalFade");
    fade.removeAttribute("class");
    fade.setAttribute("style", "display: none;");
    fade.innerHTML = "";
}

async function Modal_CallPartial(modalObj) {
    DoLogging(LogType.Function, "Modal_CallPartial(modalObj)", [modalObj]);

    modalObj.getAntiforgeryToken();

    $.ajax({
        type: "get",
        url: modalObj.ControllerAction,
        data: modalObj.DataForController,
        success: function (response) {
            modalObj.ModalDivInnerHtml = response;
        },
        error: function (response) {
            // modalObj.ModalDivInnerHtml = JSON.stringify(response);
            DoLogging(LogType.Error, "Modal_CallPartial(~).ajax{error}" + [JSON.stringify(response)]);
        },
        complete: function (response) {
            modalObj.showModal();
        },
    });
}

//#endregion