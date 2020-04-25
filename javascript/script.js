//Select display
var display = document.querySelector(".result")

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
var mod = document.querySelector('#mod')
var mult = document.querySelector('#mult')
var equal = document.querySelector('#equal')

//Event numbers
seven.addEventListener('click', function (){addNumbersInHTML(seven.value)})
eight.addEventListener('click', function (){addNumbersInHTML(eight.value)})
nine.addEventListener('click', function (){addNumbersInHTML(nine.value)})
four.addEventListener('click', function (){addNumbersInHTML(four.value)})
five.addEventListener('click', function (){addNumbersInHTML(five.value)})
six.addEventListener('click', function (){addNumbersInHTML(six.value)})
one.addEventListener('click', function (){addNumbersInHTML(one.value)})
two.addEventListener('click', function (){addNumbersInHTML(two.value)})
three.addEventListener('click', function (){addNumbersInHTML(three.value)})
zero.addEventListener('click', function (){addNumbersInHTML(zero.value)})

//Event dot and comma
dot.addEventListener('click', function (){console.log(dot.value)})
com.addEventListener('click', function (){console.log(com.value)})

//Event operations
ad.addEventListener('click', function (){defineOperation(ad.value)})
sub.addEventListener('click', function (){defineOperation(sub.value)})
divs.addEventListener('click', function (){defineOperation(divs .value)})
mult.addEventListener('click', function (){defineOperation(mult .value)})
mod.addEventListener('click', function (){defineOperation(mod.value)})

//Event clear and back
clear.addEventListener('click', function (){console.log(clear.value)})
back.addEventListener('click', function (){console.log(back .value)})

//Event iguals
equal.addEventListener('click', function (){(equal.value)})

//Add numbers in display
var stringNumbers = ""

function addNumbersInHTML(numbers){
    stringNumbers += numbers;
    display.innerHTML = stringNumbers
}

//Operations
var operations = ""
var numbers1 = 0
var numbers2 = 0

function defineOperation(operation){
    numbers1 = Number(stringNumbers)
    switch(operation){
        case "+":
            operations = "+"
            addNumbersInHTML(" + ")
        break;
        case "-":
            operations = "-"
            addNumbersInHTML(" - ")
        break;
        case "x":
            operations = "x"
            addNumbersInHTML(" x ")
        break;
        case "/":
            operations = "/"
            addNumbersInHTML(" / ")
        break;
        case "%":
        operations = "%"
        addNumbersInHTML(" % ")
        break
    }
    stringNumbers = ""
}
