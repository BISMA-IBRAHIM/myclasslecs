

var studentName = prompt("Enter Your Name")
let eng = parseFloat(prompt("Enter Your English Marks"))
let urdu = parseFloat(prompt("Enter Your urdu  Marks"))
let maths = parseFloat(prompt("Enter Your maths  Marks"))
let chemistry = parseFloat(prompt("Enter Your chemistry Marks"))
let physics = parseFloat(prompt("Enter Your physics  Marks"))
let biology = parseFloat(prompt("Enter Your biology Marks"))
let pst = parseFloat(prompt("Enter Your PST Marks"))
let islamiyat = parseFloat(prompt("Enter Your Islamiyat  Marks"))
let statistics = parseFloat(prompt("Enter Your statistics Marks"))
let programming = parseFloat(prompt("Enter Your programming  Marks"))

document.write("Student Name =" + studentName + "<br>")
document.write("English Marks =" + eng + "<br>")
document.write("urdu Marks =" + urdu + "<br>")
document.write("maths Marks =" + maths + "<br>")
document.write("chemistry Marks =" + chemistry + "<br>")
document.write("physics Marks =" + physics + "<br>")
document.write("biology Marks =" + biology + "<br>")
document.write("pst Marks =" + pst + "<br>")
document.write("islamiyat Marks =" + islamiyat + "<br>")
document.write("statistics Marks =" + statistics + "<br>")
document.write("programming Marks =" + programming + "<br>")



let total = eng + urdu + maths + chemistry + physics + biology + pst + islamiyat + statistics + programming
document.write("Total Marks =" + total + "<br>")

let per = (total / 1000) * 100;

document.write("Percentage =" + per + "<br>")

if (per <= 100 && per >= 80) {
    document.write("Grade A+")
} else if (per <= 79 && per >= 70) {
    document.write("Grade A")
} else if (per <= 69 && per >= 60) {
    document.write("Grade B")
} else if (per <= 59 && per >= 50) {
    document.write("Grade C")
} else if (per <= 49 && per >= 40) {
    document.write("Grade D")
} else {

    document.write("ghar jaou ya IU main jaieiye ga  ")
}