const state = {
  tasks: [
    { id: 1, title: "查看 README，了解项目结构", done: true },
    { id: 2, title: "创建第一个功能分支", done: false },
    { id: 3, title: "合并分支回 main", done: false },
  ],
};

const elements = {
  form: document.querySelector("#task-form"),
  input: document.querySelector("#task-input"),
  list: document.querySelector("#task-list"),
  total: document.querySelector("#total-count"),
  done: document.querySelector("#done-count"),
  open: document.querySelector("#open-count"),
};

function getNextId() {
  const ids = state.tasks.map((task) => task.id);
  return ids.length === 0 ? 1 : Math.max(...ids) + 1;
}

function renderStats() {
  const total = state.tasks.length;
  const done = state.tasks.filter((task) => task.done).length;

  elements.total.textContent = total;
  elements.done.textContent = done;
  elements.open.textContent = total - done;
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = `task-item${task.done ? " is-done" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.setAttribute("aria-label", `切换任务：${task.title}`);
  checkbox.addEventListener("change", () => toggleTask(task.id));

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const deleteButton = document.createElement("button");
  deleteButton.className = "task-delete";
  deleteButton.type = "button";
  deleteButton.textContent = "删除";
  deleteButton.addEventListener("click", () => deleteTask(task.id));

  item.append(checkbox, title, deleteButton);
  return item;
}

function renderTasks() {
  elements.list.replaceChildren();

  if (state.tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "还没有任务。添加一个任务，然后尝试在新分支里改进它。";
    elements.list.append(empty);
    return;
  }

  state.tasks.forEach((task) => {
    elements.list.append(createTaskElement(task));
  });
}

function render() {
  renderStats();
  renderTasks();
}

function addTask(title) {
  state.tasks.push({
    id: getNextId(),
    title,
    done: false,
  });

  render();
}

function toggleTask(id) {
  state.tasks = state.tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task,
  );

  render();
}

function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  render();
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = elements.input.value.trim();
  if (!title) {
    return;
  }

  addTask(title);
  elements.input.value = "";
  elements.input.focus();
});

render();

