// import "./style.scss"
//run a window.onload function to handle the page loading and what the default project is
import { projectObj, projectsToDOM } from "./projects"

const headerElem = (() => {
    const header = document.createElement("header")
    const title = document.createElement("h1")
    title.textContent = "Todo List App"
    header.append(title)
    return header
})()

const footerElem = (() => {
    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    footerText.textContent = "Created by Darnell"
    footer.append(footerText)
    return footer
})()

const mainElem = (() => {
    const main = document.createElement("main")
    const defaultList = document.createElement("div")
    const projectList = document.createElement("div")
    projectList.classList.add("project-list")
    
    const newProjectBtnn = document.createElement("button")
    newProjectBtnn.textContent = "New Project"
    newProjectBtnn.addEventListener("click", () => {
        let tempProj = prompt("Please enter a new project")
        projectObj.addProject(tempProj)
        let oldList = document.querySelector(".project-list")
        while (oldList.firstChild) {
            oldList.removeChild(oldList.firstChild)
        }
        for (let el of projectsToDOM()){
            oldList.append(el)
        }
    })
    const todayBttn = document.createElement("button")
    todayBttn.textContent = "Today"
    const workBttn = document.createElement("button")
    workBttn.textContent = "Work"
    const personalBttn = document.createElement("button")
    personalBttn.textContent = "Personal"

 defaultList.append(newProjectBtnn, todayBttn, workBttn, personalBttn, projectList)
    main.append(defaultList)
    return main
})()

document.body.append(headerElem, mainElem, footerElem)