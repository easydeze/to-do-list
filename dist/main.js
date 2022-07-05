/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/calendar-blank.svg":
/*!***************************************!*\
  !*** ./src/images/calendar-blank.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/calendar-blank.svg");

/***/ }),

/***/ "./src/images/calendar-week-outline.svg":
/*!**********************************************!*\
  !*** ./src/images/calendar-week-outline.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/calendar-week-outline.svg");

/***/ }),

/***/ "./src/images/folder-outline.svg":
/*!***************************************!*\
  !*** ./src/images/folder-outline.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/folder-outline.svg");

/***/ }),

/***/ "./src/images/inbox.svg":
/*!******************************!*\
  !*** ./src/images/inbox.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/inbox.svg");

/***/ }),

/***/ "./src/css/skeleton.css":
/*!******************************!*\
  !*** ./src/css/skeleton.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearView": () => (/* binding */ clearView),
/* harmony export */   "populateScreen": () => (/* binding */ populateScreen),
/* harmony export */   "refreshScreen": () => (/* binding */ refreshScreen)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/components/todo.js");
//Display each to-do item, depending on the project.



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
    _todo__WEBPACK_IMPORTED_MODULE_0__.allItems[target].forEach((item) => {
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
    _todo__WEBPACK_IMPORTED_MODULE_0__.allItems[target].forEach((item) => {
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



/***/ }),

/***/ "./src/components/project.js":
/*!***********************************!*\
  !*** ./src/components/project.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
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



/***/ }),

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allItems": () => (/* binding */ allItems)
/* harmony export */ });
/* harmony import */ var _components_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav.js */ "./src/components/nav.js");
//Create all to-do items after each submission and import them into project.js, where each
//item is matched up with their corresponding project by the parameter. Then display.



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
    (0,_components_nav_js__WEBPACK_IMPORTED_MODULE_0__.clearView)();

    // getAllItems();
    //Refresh current screen/screen last clicked on
    closeForm();
    clearForm();

    (0,_components_nav_js__WEBPACK_IMPORTED_MODULE_0__.refreshScreen)(target);
}

// const getAllItems = () => {
//     console.log(allItems);
//     return allItems;
// }




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/skeleton.css */ "./src/css/skeleton.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _images_calendar_blank_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/calendar-blank.svg */ "./src/images/calendar-blank.svg");
/* harmony import */ var _images_calendar_week_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/calendar-week-outline.svg */ "./src/images/calendar-week-outline.svg");
/* harmony import */ var _images_folder_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/folder-outline.svg */ "./src/images/folder-outline.svg");
/* harmony import */ var _images_inbox_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/inbox.svg */ "./src/images/inbox.svg");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/todo */ "./src/components/todo.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project */ "./src/components/project.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav.js");











const overlay = document.querySelector('.overlay');
const projectModal = document.querySelector('.addProject-modal');
const noteModal = document.querySelector('.addNote-modal');
const cancelProject = document.querySelector('#cancelProject');
const cancelNote = document.querySelector('#cancelNote');

const addProject = document.querySelector('.plus');
addProject.addEventListener('click', () => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QjtBQUNIO0FBQ1k7QUFDTztBQUNQO0FBQ1Q7O0FBRUQ7QUFDRztBQUNKOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9jYWxlbmRhci1ibGFuay5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWFnZXMvY2FsZW5kYXItd2Vlay1vdXRsaW5lLnN2ZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9mb2xkZXItb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbWFnZXMvaW5ib3guc3ZnIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3NrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NhbGVuZGFyLWJsYW5rLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY2FsZW5kYXItd2Vlay1vdXRsaW5lLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbmJveC5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvL0Rpc3BsYXkgZWFjaCB0by1kbyBpdGVtLCBkZXBlbmRpbmcgb24gdGhlIHByb2plY3QuXG5cbmltcG9ydCB7YWxsSXRlbXN9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3Jyk7XG5cbi8vTWFrZSB0aGUgaW5ib3ggc2NyZWVuIHRoZSBkZWZhdWx0IHNjcmVlblxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIHBvcHVsYXRlU2NyZWVuKGluYm94KVxufVxuXG4vL0ZJWDogQ2FuJ3QgY2xpY2sgb24gbmV3IHByb2plY3RzIGFkZGVkXG4vLyBsZXQgbmF2aWdhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRlJyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICduYXZpZ2F0ZScpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xlYXJWaWV3KCk7XG4gICAgICAgIHBvcHVsYXRlU2NyZWVuKGUudGFyZ2V0KTtcbiAgICB9XG59KVxuLy8gbmF2aWdhdGVzLmZvckVhY2goKG5hdmlnYXRlKT0+IHtcbi8vICAgICBuYXZpZ2F0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY2xlYXJWaWV3KCk7XG4vLyAgICAgcG9wdWxhdGVTY3JlZW4obmF2aWdhdGUpO30pXG4vLyB9KVxuXG4vLyBjb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5vdGUnKTtcbi8vIHN1Ym1pdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhlKVxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjbGVhclZpZXcoKTtcbi8vIH0pO1xuXG5mdW5jdGlvbiByZWZyZXNoU2NyZWVuKG5hdmlnYXRlKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IHRhcmdldCA9IG5hdmlnYXRlO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0YXJnZXQ7XG4gICAgdmlldy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGFsbEl0ZW1zW3RhcmdldF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdGVtcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcENhcmQuY2xhc3NOYW1lID0gXCJpdGVtLWNhcmRcIjtcbiAgICAgICAgbGV0IHRlbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcFRpdGxlLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGxldCB0ZW1wRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcERhdGUuaW5uZXJIVE1MID0gaXRlbS5kYXRlO1xuICAgICAgICBsZXQgdGVtcFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBQcm9qZWN0LmlubmVySFRNTCA9IGl0ZW0ucHJvamVjdDtcbiAgICAgICAgbGV0IHRlbXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBUaXRsZSk7XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBEYXRlKTtcbiAgICAgICAgdGVtcENhcmQuYXBwZW5kQ2hpbGQodGVtcFByb2plY3QpO1xuICAgICAgICB0ZW1wQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wRGVzY3JpcHRpb24pO1xuICAgICAgICB2aWV3LmFwcGVuZENoaWxkKHRlbXBDYXJkKTtcbiAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVNjcmVlbihuYXZpZ2F0ZSkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCB0YXJnZXQgPSBuYXZpZ2F0ZS5pZDtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gdGFyZ2V0O1xuICAgIHZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBhbGxJdGVtc1t0YXJnZXRdLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHRlbXBDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBDYXJkLmNsYXNzTmFtZSA9IFwiaXRlbS1jYXJkXCI7XG4gICAgICAgIGxldCB0ZW1wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBUaXRsZS5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xuICAgICAgICBsZXQgdGVtcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBEYXRlLmlubmVySFRNTCA9IGl0ZW0uZGF0ZTtcbiAgICAgICAgbGV0IHRlbXBQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wUHJvamVjdC5pbm5lckhUTUwgPSBpdGVtLnByb2plY3Q7XG4gICAgICAgIGxldCB0ZW1wRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICB0ZW1wQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wVGl0bGUpO1xuICAgICAgICB0ZW1wQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wRGF0ZSk7XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBQcm9qZWN0KTtcbiAgICAgICAgdGVtcENhcmQuYXBwZW5kQ2hpbGQodGVtcERlc2NyaXB0aW9uKTtcbiAgICAgICAgdmlldy5hcHBlbmRDaGlsZCh0ZW1wQ2FyZCk7XG4gICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gY2xlYXJWaWV3KCkge1xuICAgIHdoaWxlICh2aWV3LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdmlldy5yZW1vdmVDaGlsZCh2aWV3LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtwb3B1bGF0ZVNjcmVlbiwgY2xlYXJWaWV3LCByZWZyZXNoU2NyZWVufTsiLCIvL0NyZWF0ZSBhbiBhZGRQcm9qZWN0IGZ1bmN0aW9uIGFuZCBhIGdldEFsbFByb2plY3RzIGZ1bmN0aW9uIHRvIHBhc3MgaW50byB0aGUgdG9kby5qcyBmaWxlLlxuXG5sZXQgYWxsUHJvamVjdHMgPSBbe3RpdGxlOiAnaW5ib3gnfSwge3RpdGxlOiAnZ3ltJ30sIHt0aXRsZTogJ2ludGVybnNoaXBzJ30sIHt0aXRsZTogJ2xpZmVzdHlsZSd9XTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1tb2RhbCcpO1xuY29uc3QgYnV0dG9uTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzIC5idXR0b24tbmF2Jyk7XG5jb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcblxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGROZXdQcm9qZWN0KCk7XG59KTtcblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0KCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3ROYW1lJykudmFsdWU7XG4gICAgcmV0dXJuIHt0aXRsZX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcm9qZWN0TmFtZScpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICAgIGNvbnN0IHRlbXAgPSBwb3B1bGF0ZVByb2plY3QoKTtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHRlbXApO1xuICAgIGNsZWFyUHJvamVjdERpc3BsYXkoKTtcbiAgICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcbiAgICBjbGVhclByb2plY3RTZWxlY3Rpb24oKTtcbiAgICB1cGRhdGVQcm9qZWN0U2VsZWN0aW9uKCk7XG4gICAgY2xvc2VGb3JtKCk7XG4gICAgY2xlYXJGb3JtKCk7XG59XG5cbmNvbnN0IGNsZWFyUHJvamVjdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgd2hpbGUgKGJ1dHRvbk5hdi5maXJzdENoaWxkKSB7XG4gICAgICAgIGJ1dHRvbk5hdi5yZW1vdmVDaGlsZChidXR0b25OYXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBkaXNwbGF5QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZW1wQnV0dG9uLmNsYXNzTmFtZSA9IFwibmF2aWdhdGVcIjtcbiAgICAgICAgdGVtcEJ1dHRvbi5pZCA9IGFsbFByb2plY3RzW2ldLnRpdGxlO1xuICAgICAgICBsZXQgdGVtcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBsZXQgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhbGxQcm9qZWN0c1tpXS50aXRsZSk7XG4gICAgICAgIHRlbXBJbWcuc3JjID0gXCJpbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnXCI7XG4gICAgICAgIHRlbXBCdXR0b24uYXBwZW5kQ2hpbGQodGVtcEltZyk7XG4gICAgICAgIHRlbXBCdXR0b24uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xuICAgICAgICBidXR0b25OYXYuYXBwZW5kQ2hpbGQodGVtcEJ1dHRvbik7XG4gICAgfVxufVxuXG5jb25zdCBjbGVhclByb2plY3RTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RTZWxlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0U2VsZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3RTZWxlY3Rpb24uZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVQcm9qZWN0U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgdGVtcE9wdGlvbi5pbm5lckhUTUwgPSBhbGxQcm9qZWN0c1tpXS50aXRsZTtcbiAgICAgICAgcHJvamVjdFNlbGVjdGlvbi5hcHBlbmRDaGlsZCh0ZW1wT3B0aW9uKTtcbiAgICB9XG59XG5cbi8vIGNvbnN0IGdldEFsbFByb2plY3RzID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcbi8vICAgICByZXR1cm4gYWxsUHJvamVjdHM7XG4vLyB9XG5cbmV4cG9ydCB7YWxsUHJvamVjdHN9OyIsIi8vQ3JlYXRlIGFsbCB0by1kbyBpdGVtcyBhZnRlciBlYWNoIHN1Ym1pc3Npb24gYW5kIGltcG9ydCB0aGVtIGludG8gcHJvamVjdC5qcywgd2hlcmUgZWFjaFxuLy9pdGVtIGlzIG1hdGNoZWQgdXAgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIHByb2plY3QgYnkgdGhlIHBhcmFtZXRlci4gVGhlbiBkaXNwbGF5LlxuXG5pbXBvcnQgeyBjbGVhclZpZXcsIHJlZnJlc2hTY3JlZW4gfSBmcm9tICcuLi9jb21wb25lbnRzL25hdi5qcyc7XG5cbmxldCBhbGxJdGVtcyA9ICBuZXcgT2JqZWN0KCk7XG5jb25zdCBzdWJtaXROb3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5vdGUnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3Qgbm90ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZE5vdGUtbW9kYWwnKTtcblxuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRUb2RvSXRlbSgpO1xufSk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9kb0l0ZW0oKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFza1RpdGxlJykudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlOyBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCwgaXNDb21wbGV0ZX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRUYXNrVGl0bGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiaW5ib3hcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG5vdGVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0l0ZW0oKSB7XG4gICAgY29uc3QgdGVtcCA9IHBvcHVsYXRlVG9kb0l0ZW0oKTtcbiAgICBpZiAoYWxsSXRlbXNbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZV0pIHtcbiAgICAgICAgYWxsSXRlbXNbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZV0ucHVzaCh0ZW1wKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsbEl0ZW1zW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWVdID0gW3RlbXBdO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSAhPSAnaW5ib3gnICYmIGFsbEl0ZW1zWydpbmJveCddKSB7XG4gICAgICAgIGFsbEl0ZW1zWydpbmJveCddLnB1c2godGVtcCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWUgIT0gJ2luYm94Jykge1xuICAgICAgICBhbGxJdGVtc1snaW5ib3gnXSA9IFt0ZW1wXTtcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gxJylbMF0udGV4dENvbnRlbnQucmVwbGFjZSgvXlwiKC4qKVwiJC8sICckMScpO1xuICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgY2xlYXJWaWV3KCk7XG5cbiAgICAvLyBnZXRBbGxJdGVtcygpO1xuICAgIC8vUmVmcmVzaCBjdXJyZW50IHNjcmVlbi9zY3JlZW4gbGFzdCBjbGlja2VkIG9uXG4gICAgY2xvc2VGb3JtKCk7XG4gICAgY2xlYXJGb3JtKCk7XG5cbiAgICByZWZyZXNoU2NyZWVuKHRhcmdldCk7XG59XG5cbi8vIGNvbnN0IGdldEFsbEl0ZW1zID0gKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGFsbEl0ZW1zKTtcbi8vICAgICByZXR1cm4gYWxsSXRlbXM7XG4vLyB9XG5cbmV4cG9ydCB7YWxsSXRlbXN9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9za2VsZXRvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9jYWxlbmRhci1ibGFuay5zdmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9jYWxlbmRhci13ZWVrLW91dGxpbmUuc3ZnJztcbmltcG9ydCAnLi9pbWFnZXMvZm9sZGVyLW91dGxpbmUuc3ZnJztcbmltcG9ydCAnLi9pbWFnZXMvaW5ib3guc3ZnJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdG9kbyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9wcm9qZWN0JztcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdic7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtbW9kYWwnKTtcbmNvbnN0IG5vdGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGROb3RlLW1vZGFsJyk7XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFByb2plY3QnKTtcbmNvbnN0IGNhbmNlbE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsTm90ZScpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKTtcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn0pXG5cbmNvbnN0IGFkZE5vdGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZScpO1xuYWRkTm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAob3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbm90ZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBub3RlTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufSlcblxuY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pXG5cbmNhbmNlbE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBub3RlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==