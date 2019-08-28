
let keyPress = window.addEventListener("keydown",() => {
    let code = event.code;
    let key = event.key;
    let which = event.which

    let mainDisplay = document.getElementById("event-which-display")
    let eventKey = document.getElementById("event-key")
    let eventCode = document.getElementById("event-code")
    let eventWhich = document.getElementById("event-which")

    mainDisplay.textContent = which
    eventKey.textContent = key
    eventCode.textContent = code
    eventWhich.textContent = which
} )

