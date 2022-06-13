import { getAllItems } from "./components/todo";

getAllItems();

const overlay = document.querySelector('.overlay');
const projectModal = document.querySelector('.addProject-modal');
const noteModal = document.querySelector('.addNote-modal');
const cancelProject = document.querySelector('#cancelProject');
const cancelNote = document.querySelector('#cancelNote');

const addProject = document.querySelector('.plus');
addProject.addEventListener('click', () => {
  console.log("HI");
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      projectModal.classList.remove('active');
    }
    else {
      overlay.classList.add('active');
      projectModal.classList.add('active');
    }
})

const addNote= document.querySelector('.add-note');
addNote.addEventListener('click', () => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      noteModal.classList.remove('active');
    }
    else {
      overlay.classList.add('active');
      noteModal.classList.add('active');
    }
})

cancelProject.addEventListener('click', () => {
    overlay.classList.remove('active');
    projectModal.classList.remove('active');
})

cancelNote.addEventListener('click', () => {
    overlay.classList.remove('active');
    noteModal.classList.remove('active');
})

