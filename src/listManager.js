function listManager(){
    let list = []
    const addItem = item => {list.push(item)}
    const editItem = (index, item) => {list[index] = item}
    const deleteItem = index => {list = list.filter((_, i) => i !== index)}
    const getList = () => list
    return {addItem, editItem, deleteItem, getList}
}

export default listManager