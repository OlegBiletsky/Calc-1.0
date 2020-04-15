var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick() {
    var firstNumber = document.getElementById("first-number");
    var secondNumber = document.getElementById("second-number");
    var one = Number (firstNumber.value);
    var two = Number (secondNumber.value);
    window.alert(one + two);
}

function onButtonMinusClick() {
    var firstNumber = document.getElementById("first-number");
    var secondNumber = document.getElementById("second-number");
    var one = Number (firstNumber.value);
    var two = Number (secondNumber.value);
    window.alert(one - two);
}

function onButtonMultiplyClick() {
    var firstNumber = document.getElementById("first-number");
    var secondNumber = document.getElementById("second-number");
    var one = Number (firstNumber.value);
    var two = Number (secondNumber.value);
    window.alert(one * two);
}

function onButtonDevideClick() {
    var firstNumber = document.getElementById("first-number");
    var secondNumber = document.getElementById("second-number");
    var one = Number (firstNumber.value);
    var two = Number (secondNumber.value);
    window.alert(one / two);
}

// if (buttonPlus !== null) {
//     buttonPlus.addEventListener("onclick",onButtonPlusClick);
// }
// else (window.alert("00000"))

buttonPlus.addEventListener("click",onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);










// но сейчас к калькулятору, сделанному по этому видео, я добавил
//кнопку очистить, которая выставляет значения всех инпутов 
//на " ", также я сделал третий инпут и прописал в функциях чтобы
//решение  примера выводилось не в window.alert, а в третьий 
//инпут


