


// alert("welcome in our web")




// take an student name 

var studentName = prompt("Enter Your Name");
document.write("Student Name =" + studentName + "<br>")



// input all subject values 
var eng = parseFloat(prompt("Enter Your English Marks"));
var urdu = parseFloat(prompt("Enter Your Urdu Marks"));
var math = parseFloat(prompt("Enter Your Math Marks"));




var obtainedmarks = eng + urdu + math;
var per = (obtainedmarks / 300) * 100;




// print all subject values 
document.write("English Marks =" + eng + "<br>");
document.write("Urdu Marks =" + urdu + "<br>");
document.write("Mathematics Marks =" + math + "<br>");




// print percentage and obatined marks 



document.write("Obtained Marks =" + obtainedmarks + "<br>");
document.write("Percentage =" + per.toFixed(2) + "%" + "<br>")





if (per <= 100 && per >= 80) {
    document.write("grade A+");
}
else if (per <= 79 && per >= 70) {
    document.write("grade A");
}
else if (per <= 69 && per >= 60) {
    document.write("grade B");
}
else if (per <= 59 && per >= 50) {
    document.write("grade C");
}
else {
    document.write("Fail Hogaye Mubarak Ho")
}


