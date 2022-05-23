student = JSON.parse(localStorage.getItem("students")) || []
nav(student)

function formSubmit(form) {

    event.preventDefault()
    let name = document.querySelector("#name").value
    let course = document.querySelector("#course").value
    let batch = document.querySelector("#batch").value
    let img = document.querySelector("#pic").value

    student_details = new CreateObj(name, course, batch, img)
    student.push(student_details)
    localStorage.setItem("students", JSON.stringify(student))
    nav(student)
}

function CreateObj(name, course, batch, img) {
    this.name = name,
        this.course = course,
        this.batch = batch,
        this.image = img
}
datas = document.querySelector("#datas")

function nav(s) {
    datas.innerHTML = null
    var obj = {}
    for (var i = 0; i < s.length; i++) {
        if (!obj[s[i].batch]) {
            obj[s[i].batch] = 1;
        } else {
            obj[s[i].batch]++
        }
    }
    for (var l in obj) {
        p = document.createElement("p")
        p.innerText = (l + " : " + obj[l])
        datas.append(p)
    }
}