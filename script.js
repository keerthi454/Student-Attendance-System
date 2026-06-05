function addStudent() {
    let name = document.getElementById("studentName").value;

    if(name === "") {
        alert("Enter student name");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " - Present";

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";
}