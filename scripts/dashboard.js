student = JSON.parse(localStorage.getItem("students")) || []
displayData(student)
nav(student)
    // _____________________________________________________
list = document.querySelector("#list")

function displayData(student) {
    list.innerHTML = null
    student.forEach(function(elem, index) {

        main_div = document.createElement("div")
        main_div.setAttribute("id", "data")

        img_div = document.createElement("div")
        img_div.setAttribute("id", "img_div")
        img = document.createElement("img")
        img.src = elem.image
        img_div.append(img)

        stname = document.createElement("h3")
        stname.innerText = "Name: " + elem.name

        batch = document.createElement("h4")
        batch.innerText = "Batch: " + elem.batch

        course = document.createElement("p")
        course.innerText = "Course: " + elem.course

        remove_btn = document.createElement("button")
        remove_btn.style.backgroundColor = "red"
        remove_btn.innerText = "REMOVE"
        remove_btn.addEventListener("click", function() {
            remove(event, index)
        })

        main_div.append(img_div, stname, batch, course, remove_btn)
        list.append(main_div)
        nav(student)
    })
}



function remove(ele, index) {
    save(ele, index)

    student.splice(index, 1)
    localStorage.setItem("students", JSON.stringify(student))

    displayData(student)
    nav(student)

}

var arr1 = JSON.parse(localStorage.getItem("trash")) || []

function save(ele, index) {
    var k = student[index]
    arr1.push(k)
    localStorage.setItem("trash", JSON.stringify(arr1))
}

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