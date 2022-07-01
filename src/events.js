function findProjectInfo(e, list){
    let index = Number(e.target.dataset.index)
    const tabObj = list[index]
    return {tabObj, index}
}

function findProjectIndex(e){
    const index = e.target.dataset.index 
    return index
}

function showProjectModal(e){
    const modal = document.querySelector(".project-form-div")
    modal.classList.remove("hide")
}

function showTaskModal(e){
    const modal = document.querySelector(".task-form-div")
    modal.classList.remove("hide")
}

function hideProjectForm(e){
    const modal = document.querySelector(".project-form-div")
    modal.classList.add("hide")
}

function hideTaskForm(e){
    const modal = document.querySelector(".task-form-div")
    modal.classList.add("hide")
}

function resetForm(form){
    form.reset()
}

function handleClosingProjectForm(e){
    hideProjectForm(e)
    const form = document.querySelector("#project-form")
    resetForm(form)
}

function handleClosingTaskForm(e){
    hideTaskForm(e)
    const form = document.querySelector("#task-form")
    resetForm(form)
}

function submitProjectObj(e, projNameArr){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const nameInput = document.querySelector("#project-name-input")
    if (projNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    handleClosingProjectForm(e)
    return dataObj
}

function submitTaskObj(e, taskNameArr){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const nameInput = document.querySelector("#task-name-input")
    if (taskNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate task names")
        nameInput.reportValidity()
        return
    }
    handleClosingTaskForm(e)
    return dataObj
}

function resetValidity(e){
    let inputId = e.target.id
    if (inputId === "project-name-input" || inputId === "task-name-input"){
        e.target.setCustomValidity("")
    }
}

export {findProjectInfo, findProjectIndex, showProjectModal, showTaskModal, handleClosingProjectForm, 
    handleClosingTaskForm, submitProjectObj, submitTaskObj, resetValidity}