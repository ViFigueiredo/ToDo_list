import { createElementWithClasses } from './utils.js';

// Função para criar uma nova tarefa
export function createTask(containerModal, taskTitle, taskDescription, taskDatetime, taskFiles, taskNotes) {

    const taskTitleValue = taskTitle.value.trim();
    if (!taskTitleValue) {
        return alert('Título da tarefa é obrigatório!');
    }

    const taskCreated = {
        title: taskTitleValue,
        description: taskDescription.value,
        datetime: taskDatetime.value,
        files: taskFiles.value,
        notes: taskNotes.value,
    };

    console.log(taskCreated);

    const tasksArrayStorage = JSON.parse(localStorage.getItem('todo-tasks')) || [];
    tasksArrayStorage.push(taskCreated);
    localStorage.setItem('todo-tasks', JSON.stringify(tasksArrayStorage));

    alert('Tarefa criada com sucesso!');
    containerModal.classList.add('container-modal-display');
    location.reload();
}

// Função para carregar as tarefas
export function loadTasks() {
    const noData = document.querySelector('.no-data');
    const tasksContainer = document.querySelector('.tasks-list');
    tasksContainer.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];
    if (tasks.length > 0) {
        noData.classList.remove('no-data-show');
        noData.classList.add('no-data-hide');
    }

    tasks.forEach((task, index) => {
        const divTaskWrapper = createElementWithClasses('div', 'tasks');
        const spanTaskTitle = document.createElement('span');
        const divTaskActions = createElementWithClasses('div', 'actions');
        const spanTaskDoneIcon = createElementWithClasses('span', 'material-symbols-outlined');
        const spanDeleteIcon = createElementWithClasses('span', 'material-symbols-outlined');

        spanTaskTitle.textContent = `Tarefa ${index + 1}: ${task.title}`;
        spanTaskDoneIcon.innerHTML = 'check';
        spanDeleteIcon.innerHTML = 'delete';

        divTaskWrapper.appendChild(spanTaskTitle);
        divTaskWrapper.appendChild(divTaskActions);
        divTaskActions.appendChild(spanTaskDoneIcon);
        divTaskActions.appendChild(spanDeleteIcon);
        tasksContainer.appendChild(divTaskWrapper);
    });
}

// Função para exibir uma tarefa
export function showTask(containerModal, taskTitle, taskDescription, taskDatetime, taskFiles, taskNotes) {
    const listTasks = document.querySelectorAll('.tasks');

    listTasks.forEach((task, index) => {
        const titleTask = task.childNodes[0];

        titleTask.addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];

            containerModal.classList.remove('container-modal-display');

            taskTitle.value = tasks[index].title;
            taskDescription.value = tasks[index].description;
            taskDatetime.value = tasks[index].datetime;
            taskFiles.value = tasks[index].files;
            taskNotes.value = tasks[index].notes;
        });
    });
}
