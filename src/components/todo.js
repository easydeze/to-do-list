//Create all to-do items after each submission and import them into project.js, where each
//item is matched up with their corresponding project by the parameter. Then display.

import { populateScreen, clearView, refreshScreen } from '../components/nav.js';

const view = document.querySelector('.view');

let allItems =  new Object();
const submitNote = document.getElementById('addNote');
const overlay = document.querySelector('.overlay');
const noteModal = document.querySelector('.addNote-modal');

submitNote.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodoItem();
});

function populateTodoItem() {
    let title = document.getElementById('inputTaskTitle').value;
    let date = document.getElementById('date').value;
    let project = document.getElementById('project').value;
    let description = document.getElementById('description').value;
    let isComplete = false; 
    return {title, description, date, project, isComplete};
}

function clearForm() {
    document.getElementById('inputTaskTitle').value = "";
    document.getElementById('date').value = "";
    document.getElementById('project').value = "inbox";
    document.getElementById('description').value = "";
}

function closeForm() {
    overlay.classList.remove('active');
    noteModal.classList.remove('active');
}

function addTodoItem() {
    const temp = populateTodoItem();
    if (allItems[document.getElementById('project').value]) {
        allItems[document.getElementById('project').value].push(temp);
    }
    else {
        allItems[document.getElementById('project').value] = [temp];
    }
    if (document.getElementById('project').value != 'inbox' && allItems['inbox']) {
        allItems['inbox'].push(temp);
    }
    else if (document.getElementById('project').value != 'inbox') {
        allItems['inbox'] = [temp];
    }

    let target = document.getElementsByTagName('h1')[0].textContent.replace(/^"(.*)"$/, '$1');
    console.log(target);
    clearView();

    // getAllItems();
    //Refresh current screen/screen last clicked on
    closeForm();
    clearForm();

    refreshScreen(target);
}

// const getAllItems = () => {
//     console.log(allItems);
//     return allItems;
// }

export {allItems};
