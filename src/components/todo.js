//Create all to-do items after each submission and import them into project.js, where each
//item is matched up with their corresponding project by the parameter. Then display.

let allItems = [];
const submitNote = document.getElementById('addNote');
submitNote.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("HI");
    addTodoItem;
    getAllItems;
});


function populateTodoItem() {
    let title = document.getElementById('inputTaskTitle').value;
    let date = document.getElementById('date').value;
    let project = document.getElementById('project').value;
    let description = document.getElementById('description').value;
    let isComplete = false;
    return {title, description, date, project, isComplete};
}

function addTodoItem(e) {
    e.preventDefault();
    const temp = populateTodoItem();
    allItems.push(temp);
    getAllItems();
}

const getAllItems = () => {
    console.log(allItems);
}

export {getAllItems};
