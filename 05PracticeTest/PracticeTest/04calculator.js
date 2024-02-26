

let number1 = parseFloat(prompt("Enter Your Number1"))
let number2 = parseFloat(prompt("Enter Your Number2"))


let opr = prompt("Select an operator  options are :(+, -, *, / )")


if (opr == "+") {

    answer = number1 + number2;

    document.write("by adding =" + answer)
}
else if (opr == "-") {

    answer = number1 - number2;

    document.write("by subtracting =" + answer)
}
else if (opr == "*") {

    answer = number1 * number2;

    document.write("by multiplication =" + answer)
}

else if (opr == "/") {

    answer = number1 / number2;

    document.write("by division =" + answer)
}
else {
    document.write(" sahi option select karen ");
}




