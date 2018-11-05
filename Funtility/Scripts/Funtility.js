let PageType = {
    Main: 1,
    Game: 2,
    UserSettings: 3,
}

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
    DoLogging(LogType.Function, "window.onmousedown()", []);

    if (!event.target.matches('.dropdown-button')) {
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

function Login() {
    Modal_Open(ModalType.Login);
}

//#region ResizeBodyArea

function ResizeBodyArea() {
    DoLogging(LogType.Function, "ResizeGameAreaHeight()", []);

    let newHeight = window.innerHeight
    let siteHeader = GetElementDimensions('site-header').height;
    let siteBody = GetElementDimensions('site-body').height;
    let siteFooter = GetElementDimensions('site-footer').height;
    newHeight -= (siteHeader + siteBody + siteFooter);

    document.getElementById('site-body').style.height = newHeight + "px";
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

// Intended to be completely flexible, the 'data' parameter can
// contain anything that is needed for the controller being called.
function Modal_Open(getAntiforgeryToken, actionUrl, data, backgroundColor = 'background-color: rgba(255,255,255,.9)') {
    DoLogging(LogType.Function, "Modal_Open(actionUrl, data, backgroundColor  = 'backgroundColor: rgba(255,255,255,.9)')", [actionUrl, data, backgroundColor]);

    if (getAntiforgeryToken) {
        data = {
            __RequestVerificationToken: Modal_GetAntiforgeryToken(),
            data,
        }
    }

    // 1) Get the modal div object
    let modal = document.getElementById("modal");

    // 2) Apply the 'modal-fade' style in order to grab the page dimensions and center it.
    modal.setAttribute("class", "modal-fade");

    // 3) Call the controller to get the partial.
    //    - Receive the HTML content.
    //    - We need its dimensions to center it on the viewport.
    Modal_CallPartial(modal, actionUrl, data, backgroundColor);

    //// 4) Display the modal
    //modal.removeAttribute("style");
    //modal.setAttribute("style", backgroundColor);

    //// 5) Center the modal
    //Modal_Center(modal);
}

function Modal_GetAntiforgeryToken() {
    DoLogging(LogType.Function, "Modal_GetAntiforgeryToken()",[]);

    let form = document.getElementById('__AntiForgery');
    return $('input[name="__RequestVerificationToken"]', form).val();
}

function Modal_Close() {
    DoLogging(LogType.Function, "Modal_Close()", []);

    let modal = document.getElementById("modal");
    modal.removeAttribute("style");
    modal.setAttribute("style", "display: none;");
    modal.removeAttribute("class");
    modal.innerHTML = '';
}

function Modal_CallPartial(modal, actionUrl, data, backgroundColor) {
    DoLogging(LogType.Function, "Modal_CallPartial(actionUrl, data)", [actionUrl, data]);

    try {
        $.ajax({
            type: "post",
            url: actionUrl,
            data: data,
            success: function (response) {
                modal.innerHTML = response;
                modal.removeAttribute("style");
                modal.setAttribute("style", backgroundColor);
                Modal_Center(modal);
                alert(response);
            },
            error: function (response) {
                alert("there was an error: " + json.stringify(response));
                DoLogging(LogType.Error, "Modal_CallPartial(~).ajax{error}" + [JSON.stringify(response)]);
            },
            complete: function () {
            },
        });
    }
    catch(error) {
        DoLogging(LogType.Error, "Modal_CallPartial(~).ajax", [error.message]);
    }


    //let modal = document.getElementById('modal');
    //let modalBody = document.createElement('div');
    //modalBody.setAttribute('class', 'modal-body');
    //modalBody.setAttribute('id', 'modalBody');
    //modal.appendChild(modalBody);
}

function Modal_Center(modal) {
    //    - Get the dimensions of the partial returned from the call.
    let modalBodyDims = GetElementDimensions('modalBody');

    //    - Get the dimensions of the 'modal' element
    let modalDims = GetElementDimensions('modal');

    //    - Subtract the partial dimensions from the modal and divide the remainder by two
    let left = (modalDims.width - modalBodyDims.width) / 2;
    let top = (modalDims.height - modalBodyDims.height) / 2;

    let modalBody = document.getElementById('modalBody');
    modalBody.setAttribute('style', 'left: ' + left + 'px; top: ' + top + 'px;');
}

//#endregion