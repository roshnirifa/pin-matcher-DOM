function getPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinNum = pin + '';

    if (pinNum.length == 4) {
        return pin;
    }
    else {
        console.log(pin);
        return getPin();

    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('displayPin').value = pin

}
