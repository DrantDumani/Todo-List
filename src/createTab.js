//updated function. Only receives project object
function renderCategoryInfo(container, project){
    const h2 = document.createElement("h2")
    h2.textContent = project.name 
    const p = document.createElement("p")
    p.textContent = project.desc 
    container.append(h2, p)
}

//separated functions for rendering tabs for containers and projects
function renderProjectInfo(container, project){
    renderCategoryInfo(container, project)
    const btn = document.createElement("button")
    btn.id = "task-form-btn"
    btn.textContent = "Add Task"
    container.append(btn)
}

//this should just be fed an already filtered list of tasks
function renderTaggedTasks(container, list){
    const ul = document.createElement("ul")
    for (let j = 0; j < list.length; j++){
        const li = document.createElement("li")
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.id = `complete-status${j}`
        const taskDiv = document.createElement("div")
        const taskName = document.createElement("label")
        taskName.htmlFor = `complete-status${j}`
        taskName.textContent = list[j].name
        const priority = document.createElement("span")
        priority.textContent = list[j].priority
        const dateField = document.createElement("span")
        dateField.textContent = list[j].date
        const delBtn = document.createElement("button")
        delBtn.classList.add("delete-task-btn")
        delBtn.textContent = "Delete"
        delBtn.dataset.index = j
        const expandBtn = document.createElement("button")
        expandBtn.classList.add("expand-task-details")
        expandBtn.textContent = "Expand"
        expandBtn.dataset.index = j
        taskDiv.append(checkBox, taskName, priority, dateField, expandBtn, delBtn)
        li.append(taskDiv)
        ul.append(li)
    }
    container.append(ul)
}

//updated renderProjectTab. No longer responsible for combing through a list
function renderCategoryTab(container, project, taskList){
    container.replaceChildren()
    renderCategoryInfo(container, project)
    renderTaggedTasks(container, taskList)
}

function renderProjectTab(container, project, taskList){
    container.replaceChildren()
    renderProjectInfo(container, project)
    renderTaggedTasks(container, taskList)
}

export {renderCategoryTab, renderProjectTab}