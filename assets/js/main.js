import { createTask, loadTasks, showTask } from './tasks.js';

// Seletores
const btnNewTask = document.querySelector('#btn-newtask');
const containerModal = document.querySelector('.container-modal');
const btnTaskCancel = document.querySelector('#btn-taskCancel');
const btnTaskSave = document.querySelector('#btn-taskSave');

const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');
const taskDatetime = document.querySelector('#task-datetime');
const taskFiles = document.querySelector('#task-uploads');
const taskNotes = document.querySelector('#task-notes');

// Event Listeners
btnTaskSave.addEventListener('click', () => createTask(containerModal, taskTitle, taskDescription, taskDatetime, taskFiles, taskNotes));
btnTaskCancel.addEventListener('click', () => containerModal.classList.add('container-modal-display'));
window.addEventListener('keydown', (event) => (event.key === 'Escape' || event.code === 27) ? containerModal.classList.add('container-modal-display') : '');
btnNewTask.addEventListener('click', () => (taskTitle.value = taskDescription.value = taskDatetime.value = taskFiles.value = taskNotes.value = '', containerModal.classList.remove('container-modal-display')));

// Inicialização
loadTasks();
showTask(containerModal, taskTitle, taskDescription, taskDatetime, taskFiles, taskNotes);
