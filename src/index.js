import listManager from "./listManager"
import {renderCategoryTab, renderProjectTab} from "./createTab"
import {findProjectInfo, findIndex, showProjectModal, showTaskModal, handleClosingProjectForm, 
    handleClosingTaskForm, submitProjectObj, submitTaskObj, resetValidity} from "./events"
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
        renderTab(e, categoryManager.getList(), "name", "tag", renderCategoryTab)
    }
    else if (targetClassList.contains("project-btn")){
        renderTab(e, projectManager.getList(), "name", "tag", renderProjectTab)
    }
    else if (targetClassList.contains("project-del-btn")){
        handleProjectDeletion(e)
    }
    else if (targetClassList.contains("delete-task-btn")){
        handleTaskDeletion(e, "name", "tag")
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
    resetValidity(e)
})

document.body.addEventListener("submit", (e) => {
    let formId = e.target.id
    if (formId === "project-form"){
        handleProjectSubmission(e)
    }
    else if (formId === "task-form"){
        handleTaskSubmission(e)
    }
})

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

function renderTab(e, list, tagName, taskType, renderFn){
    const container = document.querySelector(".project-tab")
    const {tabObj, index} = findProjectInfo(e, list)
    const taskArr = filterTasks(taskManager.getList(), tabObj[tagName], taskType)
    currentTabManager.setCurrentTab(tabObj, index, taskArr)
    const tabInfo = currentTabManager.getCurrentTab()
    renderFn(container, tabInfo.obj, tabInfo.taskArr)
}

function handleProjectDeletion(e){
    const container = document.querySelector(".project-list-container")
    const tabObj = currentTabManager.getCurrentTab().obj
    const projectTab = document.querySelector(".project-tab")
    const projIndex = findIndex(e)
    const clickedObj = projectManager.getList()[projIndex]
    if (tabObj === clickedObj) {
        projectTab.replaceChildren()
    }
    const taskList = taskManager.getList()
    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].tag === clickedObj.name){
            taskManager.deleteItem(taskList[i])
        }   
    }
    if (categoryManager.getList().includes(tabObj)){
        let list = filterTasks(taskManager.getList(), tabObj.name, "tag")
        renderCategoryTab(projectTab, tabObj, list)
    }
    projectManager.deleteItem(clickedObj)
    renderProjectList(projectManager.getList(), container)
}

function handleProjectSubmission(e){
    const container = document.querySelector(".project-list-container")
    const projList = projectManager.getList()
    const projectNames = projList.map(proj => proj.name)
    const projectObj = submitProjectObj(e, projectNames)
    if (!projectObj){
        return
    }
    projectManager.addItem(projectObj)
    renderProjectList(projList, container)
}

function handleTaskSubmission(e){
    const container = document.querySelector(".project-tab")
    const tabInfo = currentTabManager.getCurrentTab()
    const tabObj = tabInfo.obj
    const taskNames = tabInfo.taskArr.map(task => task.name)
    const taskObj = submitTaskObj(e, taskNames)
    if (!taskObj){
        return
    }
    taskObj.complete = false
    taskObj.tag = tabInfo.obj.name
    taskManager.addItem(taskObj)
    const taskList = filterTasks(taskManager.getList(), tabObj.name, "tag")
    currentTabManager.setTaskArrOfTab(taskList)
    renderProjectTab(container, tabObj, tabInfo.taskArr)
}

function handleTaskDeletion(e, tagName, tagType){
    const container = document.querySelector(".project-tab")
    const index = findIndex(e)
    const tabInfo = currentTabManager.getCurrentTab()
    const projTaskList = tabInfo.taskArr
    const clickedTask = projTaskList[index]
    taskManager.deleteItem(clickedTask)
    const newTaskList = filterTasks(taskManager.getList(), tabInfo.obj[tagName], tagType)
    currentTabManager.setTaskArrOfTab(newTaskList)
    renderProjectTab(container, tabInfo.obj, tabInfo.taskArr)
}

function filterTasks(list, tag, tagType){
    const taggedTasks = list.filter(el => el[tagType] === tag)
    return taggedTasks
}