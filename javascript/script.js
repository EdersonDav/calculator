//Select display
var value01 = document.querySelector("#value01")
var operationInDisplay = document.querySelector("#operat")
var value02 = document.querySelector("#value02")
var resultFin = document.querySelector("#resultFin")

//Select number
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var zero = document.querySelector('#zero')

//Select itens
var dot = document.querySelector('#dot')
var com = document.querySelector('#com')
var ad = document.querySelector('#ad')
var sub = document.querySelector('#sub')
var clear = document.querySelector('#clear')
var divs = document.querySelector('#divs')
var back = document.querySelector('#back')
var quad = document.querySelector('#quad')
var mult = document.querySelector('#mult')
var equal = document.querySelector('#equal')

//Event numbers
seven.addEventListener('click', function () { addNumbersInHTML(seven.value) })
eight.addEventListener('click', function () { addNumbersInHTML(eight.value) })
nine.addEventListener('click', function () { addNumbersInHTML(nine.value) })
four.addEventListener('click', function () { addNumbersInHTML(four.value) })
five.addEventListener('click', function () { addNumbersInHTML(five.value) })
six.addEventListener('click', function () { addNumbersInHTML(six.value) })
one.addEventListener('click', function () { addNumbersInHTML(one.value) })
two.addEventListener('click', function () { addNumbersInHTML(two.value) })
three.addEventListener('click', function () { addNumbersInHTML(three.value) })
zero.addEventListener('click', function () { addNumbersInHTML(zero.value) })

//Event dot and comma
dot.addEventListener('click', function () { console.log(dot.value) })
com.addEventListener('click', function () { console.log(com.value) })

//Event operations
ad.addEventListener('click', function () { defineOperation(ad.value) })
sub.addEventListener('click', function () { defineOperation(sub.value) })
divs.addEventListener('click', function () { defineOperation(divs.value) })
mult.addEventListener('click', function () { defineOperation(mult.value) })
quad.addEventListener('click', function () { defineOperation(quad.value) })
//Event clear and back
clear.addEventListener('click', function () { resetValues() })
back.addEventListener('click', function () { backValue() })

//Event equals
equal.addEventListener('click', function () { (finishResult()) })

//Add numbers in display
var stringNumbers1 = ""
var stringNumbers2 = ""
var notBack = 0

function addNumbersInHTML(numbers) {
    resultFin.innerHTML = ""

    if (operations == "") {
        stringNumbers1 += numbers;
        value01.innerHTML = stringNumbers1
    } else if (numbers == "+" || numbers == "-" || numbers == "x" || numbers == "/") {
        operationInDisplay.innerHTML = operations


    } else if (numbers == "²") {
        finishResult()
    } else {
        stringNumbers2 += numbers;
        value02.innerHTML = stringNumbers2
    }

}

//Operations
var operations = ""
var numbers1 = 0
var numbers2 = 0

function defineOperation(operation) {
    numbers1 = Number(stringNumbers1)
    switch (operation) {
        case "+":
            operations = "+"
            addNumbersInHTML("+")
            break;
        case "-":
            operations = "-"
            addNumbersInHTML("-")
            break;
        case "x":
            operations = "x"
            addNumbersInHTML("x")
            break;
        case "/":
            operations = "/"
            addNumbersInHTML("/")
            break;
        case "x²":
            operations = "²"
            addNumbersInHTML("²")
            break
    }
}

//Equals 
var FinishValue
function finishResult() {
    numbers2 = Number(stringNumbers2)
    switch (operations) {
        case "+":
            FinishValue = numbers1 + numbers2
            break;
        case "-":
            FinishValue = numbers1 - numbers2
            break;
        case "x":
            FinishValue = numbers1 * numbers2
            break;
        case "/":
            FinishValue = numbers1 / numbers2
            break;
        case "²":
            FinishValue = Math.pow(numbers1, 2)
            break
    }
    //set for not function backValue
    notBack = 1
    //reset values
    resetValues()
    resultFin.innerHTML = FinishValue


}

//Reset values
function resetValues() {
    value01.innerHTML = ""
    value02.innerHTML = ""
    operationInDisplay.innerHTML = ""
    operations = ""
    numbers1 = 0
    numbers2 = 0
    stringNumbers1 = ""
    stringNumbers2 = ""
    resultFin.innerHTML = ""
}

function backValue() {
    if (notBack != 1) {
        console.log()
    } else {
        console.log("Não apagar")
    }
}