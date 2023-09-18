let btnNewTask = document.querySelector('#btn-newtask');
let containerModal = document.querySelector('.container-modal');
let btnTaskCancel = document.querySelector('#btn-taskCancel');
let btnTaskSave = document.querySelector('#btn-taskSave');

btnNewTask.addEventListener('click', () => {
    
    console.log(btnNewTask);
    console.log(containerModal);

    containerModal.classList.remove('container-modal-display');
    
});

btnTaskCancel.addEventListener('click', () => {
    
    console.log(btnTaskCancel);
    containerModal.classList.add('container-modal-display');
    
});

btnTaskSave.addEventListener('click', () => {
    let taskTitle = document.querySelector('#task-title');
    let taskDescription = document.querySelector('#task-description');
    let taskDatetime = document.querySelector('#task-datetime');
    let taskFiles = document.querySelector('#task-uploads');
    let taskNotes = document.querySelector('#task-notes');

    let tasksArrayStorage = JSON.parse(localStorage.getItem('todo-tasks'));
    console.log(tasksArrayStorage);

    let taskCreated = {
        title: (taskTitle.value.length > 0) ? taskTitle.value : null,
        description: taskDescription.value,
        datetime: taskDatetime.value,
        files: taskFiles.value,
        notes: taskNotes.value,
    }

    console.log(taskCreated);

    if (taskCreated.title !== null) {
        if (tasksArrayStorage === null || tasksArrayStorage === undefined || tasksArrayStorage.length <= 0) {
            tasksArrayStorage = [];
            tasksArrayStorage.push(taskCreated);
            localStorage.setItem('todo-tasks', JSON.stringify(tasksArrayStorage));
        } else {
            tasksArrayStorage.push(taskCreated);
            localStorage.setItem('todo-tasks', JSON.stringify(tasksArrayStorage));
        }
    
        alert('Tarefa criada com sucesso!');
        containerModal.classList.add('container-modal-display');
        location.reload();
    } else {
        alert('Título da tarefa é obrigatória!')
    }

});

function loadTasks() {
    let noData = document.querySelector('.no-data');
    let tasksContainer = document.querySelector('.tasks-list');

    // Limpa o conteúdo atual do container
    tasksContainer.innerHTML = '';

    let tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];
    console.log(tasks);

    if (tasks.length > 0) {
        noData.classList.remove('no-data-show');
        noData.classList.add('no-data-hide');
    }

    tasks.forEach((task, index) => {
        let divTaskWrapper = document.createElement('div');
        let spanTaskTitle = document.createElement('span');
        let divTaskActions = document.createElement('div');
        let spanTaskDoneIcon = document.createElement('span');
        let spanDeleteIcon = document.createElement('span');

        divTaskWrapper.classList.add('tasks'); // Corrigido: Adicionar classe à div
        divTaskActions.classList.add('actions'); // Corrigido: Adicionar classe à div
        spanTaskDoneIcon.classList.add('material-symbols-outlined'); // Corrigido: Adicionar classe ao span
        spanDeleteIcon.classList.add('material-symbols-outlined'); // Corrigido: Adicionar classe ao span

        spanTaskTitle.textContent = `Tarefa ${index + 1}: ${task.title}`;
        spanTaskDoneIcon.innerHTML = 'check';
        spanDeleteIcon.innerHTML = 'delete';

        tasksContainer.appendChild(divTaskWrapper).appendChild(spanTaskTitle);
        tasksContainer.appendChild(divTaskWrapper).appendChild(divTaskActions);
        divTaskActions.appendChild(spanTaskDoneIcon);
        divTaskActions.appendChild(spanDeleteIcon);
    });
};

loadTasks();

