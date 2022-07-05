//Display each to-do item, depending on the project.

import {allItems} from "./todo";

const view = document.querySelector('.view');

//Make the inbox screen the default screen

window.onload = () => {
    populateScreen(inbox)
}

//FIX: Can't click on new projects added
// let navigates = document.querySelectorAll('.navigate');
document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.className === 'navigate') {
        console.log(e.target.id)
        e.preventDefault();
        clearView();
        populateScreen(e.target);
    }
})
// navigates.forEach((navigate)=> {
//     navigate.addEventListener('click', (e) => {
//     console.log(e)
//     e.preventDefault();
//     clearView();
//     populateScreen(navigate);})
// })

// const submitNote = document.getElementById('addNote');
// submitNote.addEventListener('submit', (e) => {
//     console.log(e)
//     e.preventDefault();
//     clearView();
// });

function refreshScreen(navigate) {
    let header = document.createElement('h1');
    let target = navigate;
    header.innerHTML = target;
    view.appendChild(header);
    allItems[target].forEach((item) => {
        let tempCard = document.createElement('div');
        tempCard.className = "item-card";
        let tempTitle = document.createElement('p');
        tempTitle.innerHTML = item.title;
        let tempDate = document.createElement('p');
        tempDate.innerHTML = item.date;
        let tempProject = document.createElement('p');
        tempProject.innerHTML = item.project;
        let tempDescription = document.createElement('p');
        tempDescription.innerHTML = item.description;
        tempCard.appendChild(tempTitle);
        tempCard.appendChild(tempDate);
        tempCard.appendChild(tempProject);
        tempCard.appendChild(tempDescription);
        view.appendChild(tempCard);
    }
    )
}

function populateScreen(navigate) {
    let header = document.createElement('h1');
    let target = navigate.id;
    header.innerHTML = target;
    view.appendChild(header);
    allItems[target].forEach((item) => {
        let tempCard = document.createElement('div');
        tempCard.className = "item-card";
        let tempTitle = document.createElement('p');
        tempTitle.innerHTML = item.title;
        let tempDate = document.createElement('p');
        tempDate.innerHTML = item.date;
        let tempProject = document.createElement('p');
        tempProject.innerHTML = item.project;
        let tempDescription = document.createElement('p');
        tempDescription.innerHTML = item.description;
        tempCard.appendChild(tempTitle);
        tempCard.appendChild(tempDate);
        tempCard.appendChild(tempProject);
        tempCard.appendChild(tempDescription);
        view.appendChild(tempCard);
    }
    )
}

function clearView() {
    while (view.firstChild) {
        view.removeChild(view.firstChild);
    }
}

export {populateScreen, clearView, refreshScreen};