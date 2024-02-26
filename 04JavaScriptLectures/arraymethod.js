var studentsName = ["Zaid ", "Ahsan", "Wahaj", "Bisma", "Misbah"];


document.write("Default Array " + studentsName + "<br>")







// push
document.write("Before " + studentsName + "<br>")
studentsName.push("Nouman")
document.write("After " + studentsName + "<br>")



// unshift
document.write("Before " + studentsName + "<br>")
studentsName.unshift("MISBAH")
document.write("After " + studentsName + "<br>")

// add by index
document.write("Before " + studentsName + "<br>")
studentsName[4] = "Ali"
document.write("After " + studentsName + "<br>")



// pop
document.write("Before " + studentsName + "<br>")
studentsName.pop()
document.write("After " + studentsName + "<br>")


//shift
document.write("Before " + studentsName + "<br>")
studentsName.shift()
document.write("After " + studentsName + "<br>")






// count 
document.write("Count of the array list " + studentsName.length + "<br>")

// index of


document.write("Check of index value " + studentsName.indexOf("Misbah") + "<br>")

// sort 
document.write("Sort list" + studentsName.sort() + "<br>")

mystudents = studentsName.slice(3)




document.write("slice array" + mystudents + "<br>")






newnames = ["Bisma", "Fatimah", "Zain", "Sami"]




finalstudents= mystudents.concat(newnames);


document.write("before"+mystudents+"<br>")
document.write("after"+finalstudents+"<br>")


document.write("Student List"+studentsName+"<br>")
document.write(" my splice list =>" + studentsName.splice(2, 5) + "<br>")
document.write(" my updated list after splice =>" + studentsName + "<br>")

