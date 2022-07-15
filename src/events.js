function findProjectInfo(e, list){
    let index = Number(e.target.dataset.index)
    const tabObj = list[index]
    return {tabObj, index}
}

function findIndex(e){
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

function showEditForm(e, name, desc){
    const modal = document.querySelector(".edit-project-div")
    const inputName = modal.querySelector("#edit-project-name-input")
    const inputDesc = modal.querySelector("#edit-project-desc-input")
    inputName.value = name 
    inputDesc.value = desc
    modal.classList.remove("hide")
}

function hideEditTaskForm(e){
    const modal = document.querySelector(".edit-project-div")
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

function handleClosingEditProjectForm(e){
    hideEditTaskForm(e)
    const form = document.querySelector("#edit-project-form")
    resetForm(form)
}

function submitProjectObj(e, projNameArr, nameInput){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    if (projNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    handleClosingProjectForm(e)
    return dataObj
}

function showExpandTaskModal(e){
    const modal = document.querySelector(".expanded-task-info")
    modal.classList.remove("hide")
}

function hideExpandTaskModal(e){
    const modal = document.querySelector(".expanded-task-info")
    modal.classList.add("hide")
}

function submitEditProjectObj(e, projNameArr, nameInput){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    if (projNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    handleClosingEditProjectForm(e)
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
    if (inputId === "project-name-input" || inputId === "task-name-input"
        || inputId === "edit-project-name-input" || inputId === "edit-task-name-input"){
        e.target.setCustomValidity("")
    }
}

function hideEditTaskModal(){
    const modal = document.querySelector(".edit-task-form-div")
    modal.classList.add("hide")
}

function handleClosingEditTaskModal(){
    hideEditTaskModal()
    const form = document.querySelector("#edit-task-form")
    form.reset()
}

function showEditTaskModal(e){
    const modal = document.querySelector(".edit-task-form-div")
    modal.classList.remove("hide")
}

function fetchTaskIndex(e){
    const index = e.target.dataset.index
    return index
}

function toggleMobileMenu(){
    const menu = document.querySelector(".sidebar-nav")
    menu.classList.toggle("visible")
}

export {findProjectInfo, findIndex, showProjectModal, showTaskModal, handleClosingProjectForm, 
    handleClosingTaskForm, submitProjectObj, submitTaskObj, resetValidity, showEditForm, 
    handleClosingEditProjectForm, submitEditProjectObj, hideExpandTaskModal, showExpandTaskModal,
    handleClosingEditTaskModal, showEditTaskModal, hideEditTaskModal, fetchTaskIndex, toggleMobileMenu
}