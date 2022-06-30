function createProjectForm(){
    const form = document.createElement("form")
    const props = ["name", "desc"]
    for (let prop of props){
        const label = document.createElement("label")
        label.textContent = prop.toUpperCase()
        label.for = prop
        const input = document.createElement("input")
        input.id = prop
        input.name = prop
        if (prop === "name") {
            input.required = true
            input.classList.add("name-input")
        }
        form.append(label, input)
    }
    const submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Add"
    const cancelBtn = document.createElement("button")
    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add("close-project-form")
    form.append(submit,cancelBtn)
    return form
}

export default createProjectForm