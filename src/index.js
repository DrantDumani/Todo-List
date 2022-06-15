import listManager from "./listManager"
import renderProjectTab from "./createProjectTab"
import createProjectForm from "./createProjectForm"

const projectManager = listManager()
const taskManager = listManager()

//temp projects
projectManager.addItem({name: "Heal", desc: "Getting better"})
projectManager.addItem({name: "victory", desc: "It's not impossible"})
projectManager.addItem({name: "Loving someone", desc: "Loving myself"})

window.addEventListener("load", () => {
    const defCategories = [
        {name: "Today", desc: "For tasks that are due Today"}, 
        {name: "Someday", desc: "For tasks with no due date"},
        {name: "Personal", desc: "Tasks related to your everyday life"},
        {name: "Work", desc: "Tasks strictly related to not relaxing"}
    ]
    const catContainer = document.querySelector(".category-list-container")
    const projContainer = document.querySelector(".project-list-container")
    const projectTab = document.querySelector(".project-tab")
    renderCategoryList(defCategories, catContainer)
    renderProjectList(projectManager.getList(), projContainer)
    renderProjectTab(projectTab, defCategories, 0, taskManager.getList(), "Today") 
})

function renderCategoryList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.dataset.index = i
        let name = list[i].name
        btn.textContent = name
        btn.addEventListener("click", (e)=> {
            const container = document.querySelector(".project-tab")
            renderProjectTab(container, list, i, taskManager.getList(), name)
        })
        li.append(btn)
        container.append(li)
    }
}

function checkForDeletedTab(str){
    let currTabName = document.querySelector(".project-tab h2").textContent
    console.log(str, currTabName)
    if (currTabName === str){
       document.querySelector(".project-tab").replaceChildren()
    }
}

function renderProjectList(list, container){
    renderCategoryList(list, container)
    const lis = container.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++){
        const delBtn = document.createElement("button")
        delBtn.textContent = "Delete"
        delBtn.dataset.index = i
        delBtn.addEventListener("click", (e) => {
            let testName = projectManager.getList()[i].name
            checkForDeletedTab(testName) //fix this tomorrow
            projectManager.deleteItem(Number(e.target.dataset.index))
            const newList = projectManager.getList()
            renderProjectList(newList, container)
            
        })
        lis[i].append(delBtn)
    }
    const finalLi = document.createElement("li")
    const addProjBtn = document.createElement("button")
    addProjBtn.textContent = "Add Project"
    finalLi.append(addProjBtn)
    container.append(finalLi)
}