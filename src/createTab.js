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

function renderTaggedTasks(container, list, tag, tagType){
    tagType = tagType || "tags"
    const taggedTasks = list.filter(el => el[tagType].includes(tag))
    const ul = document.createElement("ul")
    for (let j = 0; j < taggedTasks.length; j++){
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.textContent = taggedTasks[j].name
        btn.dataset.index = j
        //tasks are more complex than this to render, but this is a test
        li.append(btn)
        ul.append(li)
    }
    container.append(ul)
}

//updated renderProjectTab. No longer responsible for combing through a list
function renderCategoryTab(container, project, taskList, tagName, tagType){
    container.replaceChildren()
    renderCategoryInfo(container, project)
    renderTaggedTasks(container, taskList, tagName, tagType)
}

function renderProjectTab(container, project, taskList, tagName, tagType){
    container.replaceChildren()
    renderProjectInfo(container, project)
    renderTaggedTasks(container, taskList, tagName, tagType)
}

export {renderCategoryTab, renderProjectTab}