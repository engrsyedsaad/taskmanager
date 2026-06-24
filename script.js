const createbtn = document.querySelector(".createbtn")
const createTask = document.querySelector(".create")
const closebtn = document.querySelector(".closebtn")
const form = document.querySelector("form")
const taskDiv = document.querySelector(".task-div")
const completebtn = document.querySelector(".com")
const completeDiv = document.querySelector(".completed")
const complete = document.querySelector(".completedtask")
const closeCompleteTask =document.querySelector(".taskclose")

const taskArr = []
const completeTask=[]
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
                    <button onclick="completeTaskList('${elem.taskTitle}')" class="complete button">Complete</button>
                    <button onclick="deleteTask(${index})" class="button del">delete</button>
                </div>
            </div>`

    })
}


createbtn.addEventListener("click", () => {
    createTask.style.display = "flex"
    completeDiv.style.display = "none"
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
    completeTask.splice(index,1)
    ui()
    ui2()
}

completebtn.addEventListener("click",()=>{
    completeDiv.style.display="flex"
     createTask.style.display = "none"
     ui2()
    
})




const completeTaskList=(task)=>{
    const completedTask = taskArr.find(elem=>elem.taskTitle===task)
    completeTask.push(completedTask)
    console.log(completeTask)
    taskArr.splice(completedTask,1)
    ui()

}
const ui2=()=>{
    complete.innerHTML=""
    completeTask.forEach((elem,index)=>{  
        complete.innerHTML +=`  <div class="task">
                <h3>${elem.taskTitle} </h3>
                <h5>Piroirty: ${elem.priority}</h5>
                <p>${elem.description}</p>
                <div class="btndiv">
                    <button onclick="deleteTask(${index})" class="button del">delete</button>
                </div>
            </div>`
    })
}

closeCompleteTask.addEventListener("click",()=>{
      completeDiv.style.display = "none"
})
