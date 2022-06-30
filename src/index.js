import listManager from "./listManager"
import {renderCategoryTab, renderProjectTab} from "./createTab"
import createProjectForm from "./createProjectForm"

const categoryManager = listManager()
const projectManager = listManager()
const taskManager = listManager()

const currentTabManager = (function(){
    const tabInfo = {}
    const setCurrentTab = (tabObj, index, taskArr) => {
        tabInfo.obj = tabObj
        tabInfo.index = index
        tabInfo.taggedTasks = taskArr
    }
    const getCurrentTab = () => {
        return tabInfo
    }
    return {setCurrentTab, getCurrentTab}
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
taskManager.addItem({name: "Ganondorf", tags: ["Power", "Personal"], date: "12/12/1995", priority: "Medium", desc: "Become the Great King of Evil"})
taskManager.addItem({name: "Conquer", tags: ["Power", "Work"], date: "3/20/1995", priority: "High", desc: "Overpower your own weakness"})
taskManager.addItem({name: "Follow ambition", tags: ["Power", "Personal"], date: "4/23/1998", priority: "High", desc: "Succeed no matter the cost"})

window.addEventListener("load", () => {
    const categoryList = categoryManager.getList()
    let list = taskManager.getList()
    let filteredList = filterTasks(list, "Today")
    currentTabManager.setCurrentTab(categoryList[0], 0, filteredList)
    let tabInfo = currentTabManager.getCurrentTab()
    const catContainer = document.querySelector(".category-list-container")
    const projContainer = document.querySelector(".project-list-container")
    const projectTab = document.querySelector(".project-tab")
    renderCategoryList(categoryList, catContainer)
    renderProjectList(projectManager.getList(), projContainer)
    renderCategoryTab(projectTab, tabInfo.obj, tabInfo.taggedTasks, "Today")
})

document.body.addEventListener("click", (e) => {
    const targetClassList = e.target.classList
    if (targetClassList.contains("category-btn")){
        const list = categoryManager.getList()
        const container = document.querySelector(".project-tab")
        const setTabFn = currentTabManager.setCurrentTab
        const getTabFn = currentTabManager.getCurrentTab
        handleProjectTypes(e, list, container, setTabFn, getTabFn, renderCategoryTab)
    }
    else if (targetClassList.contains("project-btn")){
        const list = projectManager.getList()
        const container = document.querySelector(".project-tab")
        const setTabFn = currentTabManager.setCurrentTab
        const getTabFn = currentTabManager.getCurrentTab
        handleProjectTypes(e, list, container, setTabFn, getTabFn, renderProjectTab)
    }
    else if (targetClassList.contains("project-del-btn")){
        const container = document.querySelector(".project-list-container")
        const tabObj = currentTabManager.getCurrentTab().obj
        const projectTab = document.querySelector(".project-tab")
        deleteProjects(e, container, tabObj, projectManager, projectTab, taskManager, renderProjectList)
        if (categoryManager.getList().includes(tabObj)){
            let list = filterTasks(taskManager.getList(), tabObj.name)
            renderCategoryTab(projectTab, tabObj, list)
        }
    }
    else if (targetClassList.contains("add-project-btn")){
        addFormModal(e)
    }
    else if (targetClassList.contains("close-project-form")){
        closeForm(e)
    }
})

document.body.addEventListener("change", (e) => {
    if (e.target.classList.contains("name-input")){
        e.target.setCustomValidity("")
    }
})

document.body.addEventListener("submit", (e) => {
    let formId = e.target.id
    if (formId === "add-project-form"){
        const container = document.querySelector(".project-list-container")
        submitProjectForm(e, projectManager, container, renderProjectList)
    }
})

//event handler functions can definitely be moved to their own module
function handleProjectTypes(e, list, container, tabSetter, tabGetter, renderFn, tagType){
    let index = Number(e.target.dataset.index)
    const tabObj = list[index]
    const fList = filterTasks(taskManager.getList(), tabObj.name)
    tabSetter(tabObj, index, fList)
    renderFn(container, tabObj, fList)
}

function deleteProjects(e, projContainer, currTabObj, projListManager, projTab, taskListManager, renderFn){
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
    let newList = projListManager.getList()
    renderFn(newList, projContainer)
}

function addFormModal(e){
    let formId = "add-project-form"
        if (document.querySelector(`#${formId}`)){
            return
        }
        const formDiv = document.createElement("div")
        formDiv.classList.add("form-modal")
        const form = createProjectForm()
        form.id = formId 
        formDiv.append(form)
        document.body.append(formDiv)
}

function closeForm(e){
    const formDiv = document.querySelector(".form-modal")
    formDiv.remove()
}

function submitProjectForm(e, projManager, container, renderFn){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const names = projManager.getList().map(el => el.name)
    const nameInput = document.querySelector("#name")
    if (names.includes(dataObj.name)){
        //show the user an error and an invalid form saying that the name is invalid
        //Error message will be displayed as an HTML element
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    projManager.addItem(dataObj)
    renderFn(projManager.getList(), container)
    e.target.parentElement.remove()
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
    tagType = tagType || "tags"
    const taggedTasks = list.filter(el => el[tagType].includes(tag))
    return taggedTasks
}