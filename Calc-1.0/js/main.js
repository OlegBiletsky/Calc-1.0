var buttonPlus = document.getElementById(id = "buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick() {
    console.log("onButtonPlusClick");
}

function onButtonMinusClick() {
    console.log("onButtonMinusClick");
}

function onButtonMultiplyClick() {
    console.log("onButtonMultiplyClick");
}

function onButtonDevideClick() {
    console.log("onButtonDevideClick");
}



// if (buttonPlus !== null) {
//     buttonPlus.addEventListener("onclick",onButtonPlusClick);
// }
// else (window.alert("00000"))

buttonPlus.addEventListener("click",onButtonPlusClick);





