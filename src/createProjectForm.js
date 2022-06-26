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
        //will probably just go the event delegation route
        input.addEventListener("change", (e) => {
            e.target.setCustomValidity("")
        })
        if (prop === "name") {
            input.required = true
        }
        form.append(label, input)
    }
    const submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Add"
    form.append(submit)
    return form
}

export default createProjectForm