import listManager from "./listManager"
import {renderCategoryTab, renderProjectTab} from "./createTab"
import "./style.scss"

const categoryManager = listManager()
const projectManager = listManager()
const taskManager = listManager()

const currentTabManager = (function(){
    const tabInfo = {}
    const setCurrentTab = (tabObj, index, taskArr) => {
        tabInfo.obj = tabObj
        tabInfo.index = index
        tabInfo.taskArr = taskArr
    }
    const setTaskArrOfTab = (taskArr) => {
        tabInfo.taskArr = taskArr
    }
    const getCurrentTab = () => {
        return tabInfo
    }
    return {setCurrentTab, setTaskArrOfTab, getCurrentTab}
})();

(function fillCategories(){
    const defCategories = [
        {name: "Today", desc: "For tasks that are due Today"}, 
        {name: "Someday", desc: "For tasks with no due date"},
        {name: "Personal", desc: "Tasks related to your everyday life"},
        {name: "Work", desc: "Tasks strictly related to not relaxing"}
    ]
    for (let el of defCategories){
        categoryManager.addItem(el)
    }
})()

//temp projects
projectManager.addItem({name: "Power", desc: "Destroy weakness"})
projectManager.addItem({name: "Wisdom", desc: "Learn from the past"})
projectManager.addItem({name: "Courage", desc: "Fear nothing"})

//temp tasks
taskManager.addItem({name: "Ganondorf", tag: "Power", "task-priority": "Personal", date: "1995-12-31", priority: "Medium", desc: "Become the Great King of Evil", complete: false})
taskManager.addItem({name: "Conquer", tag: "Power", "task-priority": "Work", date: "1995-03-20", priority: "High", desc: "Overpower your own weakness", complete: false})
taskManager.addItem({name: "Follow ambition", tag: "Power", "task-priority": "Personal", date: "1998-04-21", priority: "High", desc: "Succeed no matter the cost", complete: false})

window.addEventListener("load", () => {
    const categoryList = categoryManager.getList()
    let list = taskManager.getList()
    let filteredList = filterTasks(list, "Today", "tag") //quick fix until I can properly work out task tags
    currentTabManager.setCurrentTab(categoryList[0], 0, filteredList)
    let tabInfo = currentTabManager.getCurrentTab()
    const catContainer = document.querySelector(".category-list-container")
    const projContainer = document.querySelector(".project-list-container")
    const projectTab = document.querySelector(".project-tab")
    renderCategoryList(categoryList, catContainer)
    renderProjectList(projectManager.getList(), projContainer)
    renderCategoryTab(projectTab, tabInfo.obj, tabInfo.taskArr, "Today")
})

document.body.addEventListener("click", (e) => {
    const targetClassList = e.target.classList
    if (targetClassList.contains("category-btn")){
        const list = categoryManager.getList()
        const container = document.querySelector(".project-tab")
        const setTabFn = currentTabManager.setCurrentTab
        // const getTabFn = currentTabManager.getCurrentTab
        handleProjectTypes(e, list, container, setTabFn, renderCategoryTab)
    }
    else if (targetClassList.contains("project-btn")){
        const list = projectManager.getList()
        const container = document.querySelector(".project-tab")
        const setTabFn = currentTabManager.setCurrentTab
        // const getTabFn = currentTabManager.getCurrentTab
        handleProjectTypes(e, list, container, setTabFn, renderProjectTab)
    }
    else if (targetClassList.contains("project-del-btn")){
        const container = document.querySelector(".project-list-container")
        const tabObj = currentTabManager.getCurrentTab().obj
        const projectTab = document.querySelector(".project-tab")
        deleteProjects(e, tabObj, projectManager, projectTab, taskManager)
        renderProjectList(projectManager.getList(), container)
        if (categoryManager.getList().includes(tabObj)){
            let list = filterTasks(taskManager.getList(), tabObj.name, "tag")
            renderCategoryTab(projectTab, tabObj, list)
        }
    }
    else if (targetClassList.contains("add-project-btn")){
        showProjectModal(e)
    }
    else if (targetClassList.contains("close-project-modal")){
        handleClosingProjectForm(e)
    }
    else if (targetClassList.contains("task-form-btn")){
        showTaskModal(e)
    }
    else if (targetClassList.contains("close-task-modal")){
        handleClosingTaskForm(e)
    }
})

document.body.addEventListener("change", (e) => {
    let inputId = e.target.id
    if (inputId === "project-name-input" || inputId === "task-name-input"){
        e.target.setCustomValidity("")
    }
})

document.body.addEventListener("submit", (e) => {
    let formId = e.target.id
    if (formId === "project-form"){
        const container = document.querySelector(".project-list-container")
        handleProjectSubmission(e, projectManager)
        renderProjectList(projectManager.getList(), container)
    }
    else if (formId === "task-form"){
        const container = document.querySelector(".project-tab")
        const tabInfo = currentTabManager.getCurrentTab()
        const taskNames = tabInfo.taskArr.map(task => task.name)
        const taskObj = submitTaskObj(e, taskNames)
        if (!taskObj){
            return
        }
        taskObj.complete = false
        taskObj.tag = tabInfo.obj.name
        taskManager.addItem(taskObj)
        currentTabManager.setTaskArrOfTab(taskManager.getList())
        renderProjectTab(container, tabInfo.obj, tabInfo.taskArr)
    }
})

//event handler functions can definitely be moved to their own module
function handleProjectTypes(e, list, container, tabSetter, renderFn){
    let index = Number(e.target.dataset.index)
    const tabObj = list[index]
    const fList = filterTasks(taskManager.getList(), tabObj.name, "tag")
    tabSetter(tabObj, index, fList)
    renderFn(container, tabObj, fList)
}

function deleteProjects(e, currTabObj, projListManager, projTab, taskListManager){
    let index = e.target.dataset.index
    let clickedObj = projListManager.getList()[index]
    if (currTabObj === clickedObj) {
        projTab.replaceChildren()
    }
    const deletedTasks= []
    const taskList = taskListManager.getList()
    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].tags.includes(clickedObj.name)){
            deletedTasks.push(taskList[i])
        }   
    }
    for (let task of deletedTasks){
        taskListManager.deleteItem(task)
    }
    projListManager.deleteItem(clickedObj) 
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

//below two functions can be further separated to just be responsible for returning an object
function handleProjectSubmission(e, projManager){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const names = projManager.getList().map(el => el.name)
    const nameInput = document.querySelector("#project-name-input")
    if (names.includes(dataObj.name)){
        //show the user an error and an invalid form saying that the name is invalid
        //Error message will be displayed as an HTML element
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    projManager.addItem(dataObj)
    handleClosingProjectForm(e)
}

// function handleTaskSubmission(e, taskListManager){
//     e.preventDefault()
//     const data = new FormData(e.target)
//     const dataObj = Object.fromEntries(data)
//     const names = taskListManager.getList().map(el => el.name)
//     const nameInput = document.querySelector("#task-name-input")
//     if (names.includes(dataObj.name)){
//         nameInput.setCustomValidity("Cannot set duplicate task names")
//         nameInput.reportValidity()
//         return
//     }
//     console.log(dataObj)
//     taskListManager.addItem(data)
//     handleClosingTaskForm(e)
// }

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

function renderCategoryList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.classList.add("category-btn")
        btn.dataset.index = i
        let name = list[i].name
        btn.textContent = name
        li.append(btn)
        container.append(li)
    }
}

function renderProjectList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const btnDiv = document.createElement("div")
        const li = document.createElement("li")
        const btn = document.createElement("button")
        let name = list[i].name
        btn.textContent = name
        btn.dataset.index = i
        btn.classList.add("project-btn")

        const delBtn = document.createElement("button")
        delBtn.classList.add("project-del-btn")
        delBtn.textContent = "Delete"
        delBtn.dataset.index = i
        btnDiv.append(btn, delBtn)
        li.append(btnDiv)
        container.append(li)
    }
    const finalLi = document.createElement("li")
    const addProjBtn = document.createElement("button")
    addProjBtn.textContent = "Add Project"
    addProjBtn.classList.add("add-project-btn")
    finalLi.append(addProjBtn)
    container.append(finalLi)
}

function filterTasks(list, tag, tagType){
    // tagType = tagType || "tags"
    const taggedTasks = list.filter(el => el[tagType].includes(tag))
    return taggedTasks
}