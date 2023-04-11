import listManager from "./listManager";
import { renderCategoryTab, renderProjectTab } from "./createTab";
import {
  findProjectInfo,
  findIndex,
  showProjectModal,
  showTaskModal,
  handleClosingProjectForm,
  handleClosingTaskForm,
  submitProjectObj,
  submitTaskObj,
  resetValidity,
  showEditForm,
  handleClosingEditProjectForm,
  submitEditProjectObj,
  hideExpandTaskModal,
  showExpandTaskModal,
  handleClosingEditTaskModal,
  showEditTaskModal,
  hideEditTaskModal,
  fetchTaskIndex,
  toggleMobileMenu,
} from "./events";
import * as dateManager from "./dateManager";
import { getStorage, updateStorage } from "./localStorage";
import "./style.scss";

const categoryManager = listManager();
const projectManager = listManager();
const taskManager = listManager();

const currentTabManager = (function () {
  const tabInfo = {};
  const setCurrentTab = (tabObj, index, taskArr) => {
    tabInfo.obj = tabObj;
    tabInfo.index = index;
    tabInfo.taskArr = taskArr;
  };
  const setTaskArrOfTab = (taskArr) => {
    tabInfo.taskArr = taskArr;
  };
  const getCurrentTab = () => {
    return tabInfo;
  };
  return { setCurrentTab, setTaskArrOfTab, getCurrentTab };
})();

(function fillCategories() {
  const defCategories = [
    { name: "Today", desc: "For tasks that are due today" },
    { name: "Tomorrow", desc: "For tasks that are due tomorrow" },
    { name: "Personal", desc: "Tasks related to your everyday life" },
    { name: "Work", desc: "Tasks strictly related to not relaxing" },
  ];
  for (let el of defCategories) {
    categoryManager.addItem(el);
  }
})();

window.addEventListener("load", () => {
  const projectList = getStorage("projects");
  const taskList = getStorage("tasks");
  if (projectList) {
    populateList(projectManager, projectList);
  }
  if (taskList) {
    populateList(taskManager, taskList);
  }

  const categoryList = categoryManager.getList();
  let list = taskManager.getList();
  let today = dateManager.formatDate(dateManager.getCurrentDate());
  let filteredList = filterTasks(list, today, "date");
  currentTabManager.setCurrentTab(categoryList[0], 0, filteredList);
  let tabInfo = currentTabManager.getCurrentTab();
  const catContainer = document.querySelector(".category-list-container");
  const projContainer = document.querySelector(".project-list-container");
  const projectTab = document.querySelector(".project-tab");
  renderCategoryList(categoryList, catContainer);
  renderProjectList(projectManager.getList(), projContainer);
  renderCategoryTab(projectTab, tabInfo.obj, tabInfo.taskArr, "Today");
});

document.body.addEventListener("click", (e) => {
  const targetClassList = e.target.classList;
  if (targetClassList.contains("today")) {
    const date = dateManager.formatDate(dateManager.getCurrentDate());
    tagTasksByDate(e, date);
  } else if (targetClassList.contains("tomorrow")) {
    const date = dateManager.formatDate(dateManager.getTomorrow());
    tagTasksByDate(e, date);
  } else if (
    targetClassList.contains("personal") ||
    targetClassList.contains("work")
  ) {
    const { tabObj, index } = findProjectInfo(e, categoryManager.getList());
    const taskArr = filterTasks(
      taskManager.getList(),
      tabObj.name,
      "task-type"
    );
    handleTabSelection(tabObj, index, taskArr, renderCategoryTab);
  } else if (targetClassList.contains("project-btn")) {
    const { tabObj, index } = findProjectInfo(e, projectManager.getList());
    const taskArr = filterTasks(taskManager.getList(), tabObj.name, "tag");
    handleTabSelection(tabObj, index, taskArr, renderProjectTab);
  } else if (targetClassList.contains("project-del-btn")) {
    handleProjectDeletion(e);
  } else if (targetClassList.contains("delete-task-btn")) {
    handleTaskDeletion(e, "name", "tag");
  } else if (targetClassList.contains("add-project-btn")) {
    showProjectModal(e);
  } else if (targetClassList.contains("close-project-modal")) {
    handleClosingProjectForm(e);
  } else if (targetClassList.contains("task-form-btn")) {
    showTaskModal(e);
  } else if (targetClassList.contains("close-task-modal")) {
    handleClosingTaskForm(e);
  } else if (targetClassList.contains("edit-project-btn")) {
    openEditProjectForm(e);
  } else if (targetClassList.contains("close-edit-project-modal")) {
    handleClosingEditProjectForm(e);
  } else if (targetClassList.contains("expand-task-details")) {
    showExpandTaskModal(e);
    fillTaskModal(e);
  } else if (targetClassList.contains("close-expandTask-modal")) {
    hideExpandTaskModal(e);
  } else if (targetClassList.contains("edit-task-btn")) {
    showEditTaskModal(e);
    fillEditTaskForm(e);
  } else if (targetClassList.contains("close-edit-task-modal")) {
    hideEditTaskModal();
  } else if (targetClassList.contains("mobile-burger")) {
    toggleMobileMenu();
  }
});

function fillEditTaskForm(e) {
  const index = e.target.dataset.index;
  const form = document.querySelector("#edit-task-form");
  form.dataset.index = index;
  const task = currentTabManager.getCurrentTab().taskArr[index];
  const nameInput = document.querySelector("#edit-task-name-input");
  nameInput.value = task.name;
  const descInput = document.querySelector("#edit-task-desc-input");
  descInput.value = task.desc;
  const dateInput = document.querySelector("#edit-task-date");
  dateInput.value = dateManager.revertHTMLDate(task.date);
  const chosenType = task["task-type"].toLowerCase();
  const typeInput = document.querySelector(`#edit-${chosenType}`);
  typeInput.checked = true;
  const chosenPriority = task["task-priority"].toLowerCase();
  const priorityInput = document.querySelector(`#edit-${chosenPriority}`);
  priorityInput.checked = true;
}

function fillTaskModal(e) {
  const index = Number(e.target.dataset.index);
  const editBtn = document.querySelector(".edit-task-btn");
  editBtn.dataset.index = index;
  const task = currentTabManager.getCurrentTab().taskArr[index];
  const taskTitle = document.querySelector(".task-title");
  taskTitle.textContent = task.name;
  const taskDesc = document.querySelector(".task-description");
  taskDesc.textContent = task.desc;
  const taskDate = document.querySelector(".task-date-info");
  taskDate.textContent = dateManager.formatHTMLDate(`Due Date: ${task.date}`);
  const taskType = document.querySelector(".task-type-info");
  taskType.textContent = `Type: ${task["task-type"]}`;
  const taskPriority = document.querySelector(".task-priority-info");
  taskPriority.textContent = `Priority: ${task["task-priority"]}`;
}

function openEditProjectForm(e) {
  const tabObj = currentTabManager.getCurrentTab().obj;
  showEditForm(e, tabObj.name, tabObj.desc);
}

document.body.addEventListener("input", (e) => {
  resetValidity(e);
});

document.body.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const index = fetchTaskIndex(e);
    toggleCompletionStatus(index);
  }
});

document.body.addEventListener("submit", (e) => {
  let formId = e.target.id;
  if (formId === "project-form") {
    handleProjectSubmission(e);
  } else if (formId === "task-form") {
    handleTaskSubmission(e);
  } else if (formId === "edit-project-form") {
    handleProjectEdit(e);
  } else if (formId === "edit-task-form") {
    handleEditTaskSubmission(e);
    // fillTaskModal(e);
    hideExpandTaskModal();
  }
});

function submitEditTaskObj(e, taskNameArr) {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObj = Object.fromEntries(data);
  const nameInput = document.querySelector("#edit-task-name-input");
  if (taskNameArr.includes(dataObj.name)) {
    nameInput.setCustomValidity("Cannot set duplicate task names");
    nameInput.reportValidity();
    return;
  }
  handleClosingTaskForm(e);
  return dataObj;
}

function renderCategoryList(list, container) {
  container.replaceChildren();
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.classList.add(`${list[i].name.toLowerCase()}`);
    btn.dataset.index = i;
    let name = list[i].name;
    btn.textContent = name;
    li.append(btn);
    container.append(li);
  }
}

function renderProjectList(list, container) {
  container.replaceChildren();
  for (let i = 0; i < list.length; i++) {
    const btnDiv = document.createElement("div");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    let name = list[i].name;
    btn.textContent = name;
    btn.dataset.index = i;
    btn.classList.add("project-btn");

    const delBtn = document.createElement("button");
    delBtn.classList.add("project-del-btn");
    delBtn.textContent = "X";
    delBtn.dataset.index = i;
    btnDiv.append(btn, delBtn);
    li.append(btnDiv);
    container.append(li);
  }
  const finalLi = document.createElement("li");
  const addProjBtn = document.createElement("button");
  addProjBtn.textContent = "Add Project";
  addProjBtn.classList.add("add-project-btn");
  finalLi.append(addProjBtn);
  container.append(finalLi);
}

function handleTabSelection(tabObj, index, taskArr, renderFn) {
  const container = document.querySelector(".project-tab");
  currentTabManager.setCurrentTab(tabObj, index, taskArr);
  const tabInfo = currentTabManager.getCurrentTab();
  renderFn(container, tabInfo.obj, tabInfo.taskArr);
}

function handleProjectDeletion(e) {
  const container = document.querySelector(".project-list-container");
  const tabObj = currentTabManager.getCurrentTab().obj;
  const projectTab = document.querySelector(".project-tab");
  const projIndex = findIndex(e);
  const clickedObj = projectManager.getList()[projIndex];
  if (tabObj === clickedObj) {
    projectTab.replaceChildren();
  }
  const taskList = taskManager.getList();
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].tag === clickedObj.name) {
      taskManager.deleteItem(taskList[i]);
    }
  }
  if (categoryManager.getList().includes(tabObj)) {
    let list = filterTasks(taskManager.getList(), tabObj.name, "tag");
    renderCategoryTab(projectTab, tabObj, list);
  }
  projectManager.deleteItem(clickedObj);
  renderProjectList(projectManager.getList(), container);
  updateStorage("projects", projectManager.getList());
  updateStorage("tasks", taskManager.getList());
}

function handleProjectSubmission(e) {
  const container = document.querySelector(".project-list-container");
  const nameInput = document.querySelector("#project-name-input");
  const projList = projectManager.getList();
  const projectNames = projList.map((proj) => proj.name);
  const projectObj = submitProjectObj(e, projectNames, nameInput);
  if (!projectObj) {
    return;
  }
  projectManager.addItem(projectObj);
  renderProjectList(projList, container);
  updateStorage("projects", projList);
}

function handleProjectEdit(e) {
  const container = document.querySelector(".project-list-container");
  const tabContainer = document.querySelector(".project-tab");
  const nameInput = document.querySelector("#edit-project-name-input");
  const projList = projectManager.getList();
  const tabInfo = currentTabManager.getCurrentTab();
  const projTaskList = tabInfo.taskArr;
  const currentProjName = tabInfo.obj.name;
  const projectNames = projList
    .map((proj) => proj.name)
    .filter((name) => name !== currentProjName);
  const projectObj = submitEditProjectObj(e, projectNames, nameInput);
  if (!projectObj) {
    return;
  }
  const taskList = taskManager.getList();
  for (let i = 0; i < taskList.length; i++) {
    if (projTaskList.includes(taskList[i])) {
      const newTaggedTask = { ...taskList[i], tag: projectObj.name };
      taskManager.editItem(i, newTaggedTask);
    }
  }
  const filterTaskList = filterTasks(
    taskManager.getList(),
    projectObj.name,
    "tag"
  );
  projectManager.editItem(tabInfo.index, projectObj);
  currentTabManager.setCurrentTab(projectObj, tabInfo.index, filterTaskList);
  renderProjectList(projectManager.getList(), container);
  renderProjectTab(tabContainer, projectObj, filterTaskList);
  updateStorage("projects", projList);
  updateStorage("tasks", taskList);
}

function handleEditTaskSubmission(e) {
  const taskIndex = Number(e.target.dataset.index);
  const container = document.querySelector(".project-tab");
  const oldTaskObj = currentTabManager.getCurrentTab().taskArr[taskIndex];
  const oldTaskName = oldTaskObj.name;
  const taskNames = taskManager
    .getList()
    .map((task) => task.name)
    .filter((name) => name !== oldTaskName);
  const taskObj = submitEditTaskObj(e, taskNames);
  if (!taskObj) {
    return;
  }
  const newTaskObj = { ...oldTaskObj, ...taskObj };
  newTaskObj.date = dateManager.formatHTMLDate(newTaskObj.date);
  const fullTaskList = taskManager.getList();
  for (let i = 0; i < fullTaskList.length; i++) {
    if (fullTaskList[i] === oldTaskObj) {
      taskManager.editItem(i, newTaskObj);
    }
  }
  const tabInfo = currentTabManager.getCurrentTab();
  const categoryList = categoryManager.getList();
  if (categoryList.includes(tabInfo.obj)) {
    handleCategoryTaskList();
    renderCategoryTab(container, tabInfo.obj, tabInfo.taskArr);
  } else {
    const taskList = filterTasks(
      taskManager.getList(),
      tabInfo.obj.name,
      "tag"
    );
    currentTabManager.setTaskArrOfTab(taskList);
    renderProjectTab(container, tabInfo.obj, tabInfo.taskArr);
  }
  handleClosingEditTaskModal(e);
  updateStorage("tasks", fullTaskList);
}

function handleTaskSubmission(e) {
  const container = document.querySelector(".project-tab");
  const tabInfo = currentTabManager.getCurrentTab();
  const tabObj = tabInfo.obj;
  const taskNames = tabInfo.taskArr.map((task) => task.name);
  const taskObj = submitTaskObj(e, taskNames);
  if (!taskObj) {
    return;
  }
  taskObj.complete = false;
  taskObj.tag = tabInfo.obj.name;
  taskObj.date = dateManager.formatHTMLDate(taskObj.date);
  taskManager.addItem(taskObj);
  const taskList = filterTasks(taskManager.getList(), tabObj.name, "tag");
  currentTabManager.setTaskArrOfTab(taskList);
  renderProjectTab(container, tabObj, tabInfo.taskArr);
  updateStorage("tasks", taskManager.getList());
}

function handleTaskDeletion(e, tagName, tagType) {
  const container = document.querySelector(".project-tab");
  const index = findIndex(e);
  const tabInfo = currentTabManager.getCurrentTab();
  const projTaskList = tabInfo.taskArr;
  const clickedTask = projTaskList[index];
  taskManager.deleteItem(clickedTask);
  const categoryList = categoryManager.getList();
  if (categoryList.includes(tabInfo.obj)) {
    handleCategoryTaskList();
    renderCategoryTab(container, tabInfo.obj, tabInfo.taskArr);
  } else {
    const newTaskList = filterTasks(
      taskManager.getList(),
      tabInfo.obj[tagName],
      tagType
    );
    currentTabManager.setTaskArrOfTab(newTaskList);
    renderProjectTab(container, tabInfo.obj, tabInfo.taskArr);
  }
  updateStorage("tasks", taskManager.getList());
}

function tagTasksByDate(e, date) {
  const { tabObj, index } = findProjectInfo(e, categoryManager.getList());
  const taskArr = filterTasks(taskManager.getList(), date, "date");
  handleTabSelection(tabObj, index, taskArr, renderCategoryTab);
}

function filterTasks(list, tag, tagType) {
  const taggedTasks = list.filter((el) => el[tagType] === tag);
  return taggedTasks;
}

function toggleCompletionStatus(index) {
  const tabInfo = currentTabManager.getCurrentTab();
  const taskObj = tabInfo.taskArr[index];
  const completionStatus = !taskObj.complete;
  const newTaskObj = { ...taskObj, complete: completionStatus };
  taskManager.editItem(index, newTaskObj);
  const categoryList = categoryManager.getList();
  if (categoryList.includes(tabInfo.obj)) {
    handleCategoryTaskList();
  } else {
    const taskList = filterTasks(
      taskManager.getList(),
      tabInfo.obj.name,
      "tag"
    );
    currentTabManager.setTaskArrOfTab(taskList);
  }
  updateStorage("tasks", taskManager.getList());
}

function populateList(managerObj, arr) {
  for (let el of arr) {
    managerObj.addItem(el);
  }
}

function handleCategoryTaskList() {
  const tabName = currentTabManager.getCurrentTab().obj.name;
  const list = taskManager.getList();
  let taskList;
  if (tabName === "Today") {
    const date = dateManager.formatDate(dateManager.getCurrentDate());
    taskList = filterTasks(list, date, "date");
  } else if (tabName === "Tomorrow") {
    const date = dateManager.formatDate(dateManager.getTomorrow());
    taskList = filterTasks(list, date, "date");
  } else if (tabName === "Work" || tabName === "Personal") {
    taskList = filterTasks(list, tabName, "task-type");
  }
  currentTabManager.setTaskArrOfTab(taskList);
}
