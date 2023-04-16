function listManager() {
  const list = [];
  const addItem = (item) => {
    list.push(item);
  };
  const editItem = (index, item) => {
    list[index] = item;
  };
  const deleteItem = (item) => {
    const names = list.map((el) => el.name);
    const index = names.indexOf(item.name);
    list.splice(index, 1);
  };
  const getList = () => list;
  const setList = (arr) => {
    list.length = 0;
    for (let el of arr) {
      list.push(el);
    }
  };
  return { addItem, editItem, deleteItem, getList, setList };
}

export default listManager;
