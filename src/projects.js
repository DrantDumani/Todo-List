let projectArr = []

const projectObj = (() => {
    const addProject = (str) => {
        projectArr.push(str)
    }
    const editProject = (index, str) => {
        projectArr[index] = str
    }
    
    const resetProjects = () => {
        projectArr = []
    }
    return {addProject, editProject, resetProjects}
})()

function projectsToDOM(){
    return projectArr.map((el) => {
        const projectBttn = document.createElement("button")
        projectBttn.textContent = el
        return projectBttn
    })
}

export {projectObj, projectsToDOM}