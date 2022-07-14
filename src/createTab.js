function renderCategoryInfo(container, project){
    const uiDiv = document.createElement("div")
    uiDiv.classList.add("proj-ui-div")
    const h2 = document.createElement("h2")
    h2.textContent = project.name
    uiDiv.append(h2)
    const p = document.createElement("p")
    p.textContent = project.desc 
    container.append(uiDiv, p)
}

function renderProjectInfo(container, project){
    renderCategoryInfo(container, project)
    const btnContainer = document.createElement("div")
    btnContainer.classList.add("project-tab-buttons")
    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit Project"
    editBtn.classList.add("edit-project-btn")
    const addBtn = document.createElement("button")
    addBtn.classList.add("task-form-btn")
    addBtn.textContent = "Add Task"
    const uiDiv = document.querySelector(".proj-ui-div")
    btnContainer.append(editBtn, addBtn)
    uiDiv.append(btnContainer)
}

function renderTaggedTasks(container, list){
    const ul = document.createElement("ul")
    ul.classList.add("task-list")
    for (let j = 0; j < list.length; j++){
        const li = document.createElement("li")
        const checkBox = document.createElement("input")
        checkBox.dataset.index = j
        checkBox.type = "checkbox"
        checkBox.checked = list[j].complete ? true : false
        checkBox.id = `complete-status${j}`
        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task-div")
        const taskName = document.createElement("label")
        taskName.htmlFor = `complete-status${j}`
        taskName.textContent = list[j].name
        const priority = document.createElement("span")
        priority.textContent = `Priority: ${list[j]["task-priority"]}`
        taskDiv.classList.add(`${list[j]["task-priority"].toLowerCase()}-priority`)
        const taskType = document.createElement("span")
        taskType.textContent = `Tag: ${list[j]["task-type"]}`
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
        taskDiv.append(checkBox, taskName, priority, taskType, dateField, expandBtn, delBtn)
        li.append(taskDiv)
        ul.append(li)
    }
    container.append(ul)
}

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