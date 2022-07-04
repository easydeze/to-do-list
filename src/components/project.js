//Create an addProject function and a getAllProjects function to pass into the todo.js file.

let allProjects = [{title: 'inbox'}, {title: 'gym'}, {title: 'internships'}, {title: 'lifestyle'}];
const addProject = document.querySelector('#addProject');
const overlay = document.querySelector('.overlay');
const projectModal = document.querySelector('.addProject-modal');
const buttonNav = document.querySelector('.projects .button-nav');
const projectSelection = document.querySelector('#project');

addProject.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProject();
});

function populateProject() {
    let title = document.getElementById('inputProjectName').value;
    return {title};
}

function clearForm() {
    document.getElementById('inputProjectName').value = "";
}

function closeForm() {
    overlay.classList.remove('active');
    projectModal.classList.remove('active');
}

function addNewProject() {
    const temp = populateProject();
    allProjects.push(temp);
    clearProjectDisplay();
    displayAllProjects();
    clearProjectSelection();
    updateProjectSelection();
    closeForm();
    clearForm();
}

const clearProjectDisplay = () => {
    while (buttonNav.firstChild) {
        buttonNav.removeChild(buttonNav.firstChild);
    }
}

const displayAllProjects = () => {
    for (let i = 1; i < allProjects.length; i++) {
        let tempButton = document.createElement('button');
        tempButton.className = "navigate";
        tempButton.id = allProjects[i].title;
        let tempImg = document.createElement('img');
        let tempText = document.createTextNode(allProjects[i].title);
        tempImg.src = "images/folder-outline.svg";
        tempButton.appendChild(tempImg);
        tempButton.appendChild(tempText);
        buttonNav.appendChild(tempButton);
    }
}

const clearProjectSelection = () => {
    while (projectSelection.firstChild) {
        projectSelection.removeChild(projectSelection.firstChild);
    }
}

const updateProjectSelection = () => {
    for (let i = 0; i < allProjects.length; i++) {
        let tempOption = document.createElement('option');
        tempOption.innerHTML = allProjects[i].title;
        projectSelection.appendChild(tempOption);
    }
}

// const getAllProjects = () => {
//     console.log(allProjects);
//     return allProjects;
// }

export {allProjects};