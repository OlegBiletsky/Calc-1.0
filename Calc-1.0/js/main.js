var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick() {
    console.log("onButtonPlusClick");
    var firstNumber = document.getElementById("first-number");
    var secondNumber = document.getElementById("second-number");

    console.log(firstNumber.value);
    console.log(secondNumber.value);
    
    var one = Number (firstNumber.value);
    var two = Number (secondNumber.value);

    console.log(one + two);
    window.alert(one + two);
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
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);










// но сейчас к калькулятору, сделанному по этому видео, я добавил
//кнопку очистить, которая выставляет значения всех инпутов 
//на " ", также я сделал третий инпут и прописал в функциях чтобы
//решение  примера выводилось не в window.alert, а в третьий 
//инпут


