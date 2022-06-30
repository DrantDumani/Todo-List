function listManager(){
    let list = []
    const addItem = item => {list.push(item)}
    const editItem = (index, item) => {list[index] = item}
    const deleteItem = item => {list = list.filter(el => el !== item)}
    const getList = () => list
    return {addItem, editItem, deleteItem, getList}
}

export default listManager