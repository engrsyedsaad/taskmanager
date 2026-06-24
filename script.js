const createbtn = document.querySelector(".createbtn")
const createTask = document.querySelector(".create")
const closebtn = document.querySelector(".closebtn")
const form = document.querySelector("form")
const taskDiv = document.querySelector(".task-div")



const taskArr = []
let updateTask= null;

function ui() {
    taskDiv.innerHTML = "";
    taskArr.forEach((elem, index) => {
        
           taskDiv.innerHTML+=`<div class="task">
                <h3>${elem.taskTitle}</h3>
                <h5>Piroirty: ${elem.priority}</h5>
                <p>${elem.description}</p>
                <div class="btndiv">
                    <button  onclick="taskEdit('${elem.taskTitle}')" class="button edit">edit</button>
                    <button class="complete button">Complete</button>
                    <button onclick="deleteTask(${index})" class="button del">delete</button>
                </div>
            </div>`

    })
}


createbtn.addEventListener("click", () => {
    createTask.style.display = "flex"

})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let taskTitle = e.target[0].value
    let description = e.target[1].value
    let priority = document.querySelector('input[name="pi"]:checked').value;



    let obj = {
        taskTitle,
        description,
        priority
    }
    if(updateTask != null){
        taskArr[updateTask]=obj
        updateTask=null
    }
    else{
        taskArr.push(obj)

    }
    createTask.style.display = "none"
    ui()
    form.reset()
})



closebtn.addEventListener("click", () => {
    createTask.style.display = "none"

})

const taskEdit = (task)=>{
    createTask.style.display="flex"
    const editTask = taskArr.find(elem=>elem.taskTitle===task)
    updateTask = taskArr.findIndex(elem=>elem.taskTitle ===task)
        form[0].value=editTask.taskTitle
        form[1].value=editTask.description
        // form[2].value=editTask.priority
}

const deleteTask=(index)=>{

    taskArr.splice(index,1)
    ui()
}
