const createbtn = document.querySelector(".createbtn")
const createProduct = document.querySelector(".create")
const closebtn = document.querySelector(".closebtn")
const form = document.querySelector("form")
const taskDiv = document.querySelector(".task-div")



const taskArr = []

function ui() {
    taskDiv.innerHTML = "";
    taskArr.forEach((elem, index) => {
        if (elem.checked === high) {
           taskDiv.innerHTML+=`<div class="task">
                <h3>${elem.taskTittle}</h3>
                <h4>Piroirty:${elem.high}</h4>
                <p>${elem.}</p>
                <div class="btndiv">
                    <button class="button edit">edit</button>
                    <button class="complete button">Complete</button>
                    <button class="button del">delete</button>
                </div>
            </div>`
        }



        // taskDiv.innerHTML += ` <div class="product">
        // <h3>${elem.taskTittle}</h3>
        // <p>${elem.description}</p>
        // <div class="btndiv">
        //             <button class="button edit">edit</button>
        //             <button class="button complete>complete</button>
        //             <button class="button del">delete</button>
        //         </div>
        //     </div>`
    })
}


createbtn.addEventListener("click", () => {
    createProduct.style.display = "flex"

})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let taskTittle = e.target[0].value
    let description = e.target[1].value
    let high = e.target[2].checked
    let medium = e.target[3].checked
    let low = e.target[4].checked



    let obj = {
        taskTittle,
        description,
        high,
        medium,
        low
    }
    console.log(obj)
    taskArr.push(obj)

    createProduct.style.display = "none"
    ui()

    form.reset()
})



closebtn.addEventListener("click", () => {
    createProduct.style.display = "none"

})
