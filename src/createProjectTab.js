function renderProjectInfo(container, list, index){
    let currProject = list[index]
    const h2 = document.createElement("h2")
    h2.textContent = currProject.name
    const p = document.createElement("p")
    p.textContent = currProject.desc 
    container.append(h2, p)
}

function renderTaggedTasks(container, tag, list, tagType){
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

function renderProjectTab(container, projList, index, taskList, tagName, tagType){
    container.replaceChildren()
    renderProjectInfo(container, projList, index)
    renderTaggedTasks(container, tagName, taskList, tagType)
}

export default renderProjectTab