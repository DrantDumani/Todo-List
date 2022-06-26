import listManager from "./listManager"
import {renderCategoryTab, renderProjectTab} from "./createTab"
import createProjectForm from "./createProjectForm"

const projectManager = listManager()
const taskManager = listManager()

const currentTabManager = (function(){
    const tabInfo = []
    const setCurrentTab = (tabObj, index) => {
        tabInfo[0] = tabObj
        tabInfo[1] = index
    }
    const getCurrentTab = () => {
        return tabInfo
    }
    return {setCurrentTab, getCurrentTab}
})()

//temp projects
projectManager.addItem({name: "Power", desc: "Destroy weakness"})
projectManager.addItem({name: "Wisdom", desc: "Learn from the past"})
projectManager.addItem({name: "Courage", desc: "Fear nothing"})

//temp tasks
taskManager.addItem({name: "Ganondorf", tags: ["Power"]})
taskManager.addItem({name: "Conquer", tags: ["Power"]})
taskManager.addItem({name: "Follow ambition", tags: ["Power"]})

window.addEventListener("load", () => {
    const defCategories = [
        {name: "Today", desc: "For tasks that are due Today"}, 
        {name: "Someday", desc: "For tasks with no due date"},
        {name: "Personal", desc: "Tasks related to your everyday life"},
        {name: "Work", desc: "Tasks strictly related to not relaxing"}
    ]
    currentTabManager.setCurrentTab(defCategories[0], 0)
    let tabInfo = currentTabManager.getCurrentTab()
    let list = taskManager.getList()
    const catContainer = document.querySelector(".category-list-container")
    const projContainer = document.querySelector(".project-list-container")
    const projectTab = document.querySelector(".project-tab")
    renderCategoryList(defCategories, catContainer)
    renderProjectList(projectManager.getList(), projContainer)
    renderCategoryTab(projectTab, tabInfo[0], list, "Today")
})

function renderCategoryList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const li = document.createElement("li")
        const btn = document.createElement("button")
        let name = list[i].name
        btn.textContent = name
        btn.addEventListener("click", (e)=> {
            const container = document.querySelector(".project-tab")
            currentTabManager.setCurrentTab(list[i], i)
            let tabInfo = currentTabManager.getCurrentTab()
            renderCategoryTab(container, tabInfo[0], taskManager.getList(), tabInfo[0].name)
        })
        li.append(btn)
        container.append(li)
    }
}

//the following function could be made solely responsible for rendering the elements.
//event listeners could be added elsewhere.
function renderProjectList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const btnDiv = document.createElement("div")
        const li = document.createElement("li")
        const btn = document.createElement("button")
        let name = list[i].name
        btn.textContent = name
        btn.addEventListener("click", (e)=> {
            const container = document.querySelector(".project-tab")
            currentTabManager.setCurrentTab(list[i], i)
            let tabInfo = currentTabManager.getCurrentTab()
            renderProjectTab(container, tabInfo[0], taskManager.getList(), tabInfo[0].name)
        })

        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", () => {
            let currentTab = currentTabManager.getCurrentTab()[0]
            let clickedObj = projectManager.getList()[i]
            if (currentTab === clickedObj) {
                const projectTab = document.querySelector(".project-tab")
                projectTab.replaceChildren()
            }
            const deletedTasks= []
            const taskList = taskManager.getList()
            for (let i = 0; i < taskList.length; i++){
                if (taskList[i].tags.includes(clickedObj.name)){
                    deletedTasks.push(taskList[i])
                }   
            }
            for (let task of deletedTasks){
                taskManager.deleteItem(task)
            }
            projectManager.deleteItem(clickedObj) 
            let newList = projectManager.getList()
            renderProjectList(newList, container)
            console.log(deletedTasks)
            console.log(taskList)
        })
        btnDiv.append(btn, delBtn)
        li.append(btnDiv)
        container.append(li)
    }
    const finalLi = document.createElement("li")
    const addProjBtn = document.createElement("button")
    addProjBtn.textContent = "Add Project"
    //add event listener for project form submission
    addProjBtn.addEventListener("click", (e) => {
        let formId = "add-project-form"
        if (document.querySelector(`#${formId}`)){
            return
        }
        //let's try having the forms show up as modals. Use CSS to deal with this later
        const formDiv = document.createElement("div")
        const form = createProjectForm()
        form.id = formId
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const data = new FormData(e.target)
            const dataObj = Object.fromEntries(data)
            const names = projectManager.getList().map(el => el.name)
            const nameInput = document.querySelector("#name")
            if (names.includes(dataObj.name)){
                //show the user an error and an invalid form saying that the name is invalid
                //Error message will be displayed as an HTML element
                nameInput.setCustomValidity("Cannot set duplicate project names")
                nameInput.reportValidity()
                return
            }
            projectManager.addItem(dataObj)
            renderProjectList(projectManager.getList(), container)
            formDiv.remove()
        })
        const cancelBtn = document.createElement("button")
        cancelBtn.textContent = "Cancel"
        cancelBtn.addEventListener("click", () => {
            formDiv.remove()
        })
        form.append(cancelBtn)
        formDiv.append(form)
        document.body.append(formDiv)
    })
    finalLi.append(addProjBtn)
    container.append(finalLi)
}

// function renderProjectList(list, container){
//     container.replaceChildren()
//     for (let i = 0; i < list.length; i++){
//         const btnDiv = document.createElement("div")
//         const li = document.createElement("li")
//         const btn = document.createElement("button")
//         let name = list[i].name
//         btn.textContent = name
//         btn.addEventListener("click", (e)=> {
//             const container = document.querySelector(".project-tab")
//             currentTabManager.setCurrentTab(list[i], i)
//             let tabInfo = currentTabManager.getCurrentTab()
//             renderProjectTab(container, tabInfo[0], taskManager.getList(), tabInfo[0].name)
//         })

//         const delBtn = document.createElement("button")
//         delBtn.textContent = "Delete"
//         delBtn.addEventListener("click", () => {
//             let currentTab = currentTabManager.getCurrentTab()[0]
//             let clickedObj = projectManager.getList()[i]
//             if (currentTab === clickedObj) {
//                 const projectTab = document.querySelector(".project-tab")
//                 projectTab.replaceChildren()
//             }
//             const deletedTasksIndices = []
//             const taskList = taskManager.getList()
//             for (let i = 0; i < taskList.length; i++){
//                 if (taskList[i].tags.includes(clickedObj.name)){
//                     deletedTasksIndices.push(i)
//                 }   
//             }
//             for (let index of deletedTasksIndices){
//                 taskManager.deleteItem(index)
//             }
//             projectManager.deleteItem(i) //NOT GONNA WORK. You need to delete by something other than index in a loop
//             let newList = projectManager.getList()
//             renderProjectList(newList, container)
//             console.log(deletedTasksIndices)
//             console.log(taskList)
//             //remember to delete the related tasks as well
//         })
//         btnDiv.append(btn, delBtn)
//         li.append(btnDiv)
//         container.append(li)
//     }
//     const finalLi = document.createElement("li")
//     const addProjBtn = document.createElement("button")
//     addProjBtn.textContent = "Add Project"
//     //add event listener for project form submission
//     addProjBtn.addEventListener("click", (e) => {
//         let formId = "add-project-form"
//         if (document.querySelector(`#${formId}`)){
//             return
//         }
//         //let's try having the forms show up as modals. Use CSS to deal with this later
//         const formDiv = document.createElement("div")
//         const form = createProjectForm()
//         form.id = formId
//         form.addEventListener("submit", (e) => {
//             e.preventDefault()
//             const data = new FormData(e.target)
//             const dataObj = Object.fromEntries(data)
//             const names = projectManager.getList().map(el => el.name)
//             const nameInput = document.querySelector("#name")
//             if (names.includes(dataObj.name)){
//                 //show the user an error and an invalid form saying that the name is invalid
//                 //Error message will be displayed as an HTML element
//                 nameInput.setCustomValidity("Cannot set duplicate project names")
//                 nameInput.reportValidity()
//                 return
//             }
//             projectManager.addItem(dataObj)
//             renderProjectList(projectManager.getList(), container)
//             formDiv.remove()
//         })
//         const cancelBtn = document.createElement("button")
//         cancelBtn.textContent = "Cancel"
//         cancelBtn.addEventListener("click", () => {
//             formDiv.remove()
//         })
//         form.append(cancelBtn)
//         formDiv.append(form)
//         document.body.append(formDiv)
//     })
//     finalLi.append(addProjBtn)
//     container.append(finalLi)
// }