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

let navigates = document.querySelectorAll('.navigate');
navigates.forEach((navigate)=> {
    navigate.addEventListener('click', (e) => {
    e.preventDefault();
    clearView();
    populateScreen(navigate);})
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ0g7QUFDWTtBQUNPO0FBQ1A7QUFDVDs7QUFFRDtBQUNHO0FBQ0o7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2NhbGVuZGFyLWJsYW5rLnN2ZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9jYWxlbmRhci13ZWVrLW91dGxpbmUuc3ZnIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1hZ2VzL2ZvbGRlci1vdXRsaW5lLnN2ZyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ltYWdlcy9pbmJveC5zdmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jc3Mvc2tlbGV0b24uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY2FsZW5kYXItYmxhbmsuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9jYWxlbmRhci13ZWVrLW91dGxpbmUuc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mb2xkZXItb3V0bGluZS5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2luYm94LnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vRGlzcGxheSBlYWNoIHRvLWRvIGl0ZW0sIGRlcGVuZGluZyBvbiB0aGUgcHJvamVjdC5cblxuaW1wb3J0IHthbGxJdGVtc30gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCB2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXcnKTtcblxuLy9NYWtlIHRoZSBpbmJveCBzY3JlZW4gdGhlIGRlZmF1bHQgc2NyZWVuXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcG9wdWxhdGVTY3JlZW4oaW5ib3gpXG59XG5cbmxldCBuYXZpZ2F0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGUnKTtcbm5hdmlnYXRlcy5mb3JFYWNoKChuYXZpZ2F0ZSk9PiB7XG4gICAgbmF2aWdhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbGVhclZpZXcoKTtcbiAgICBwb3B1bGF0ZVNjcmVlbihuYXZpZ2F0ZSk7fSlcbn0pXG5cbi8vIGNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTm90ZScpO1xuLy8gc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNsZWFyVmlldygpO1xuLy8gfSk7XG5cbmZ1bmN0aW9uIHJlZnJlc2hTY3JlZW4obmF2aWdhdGUpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsZXQgdGFyZ2V0ID0gbmF2aWdhdGU7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHRhcmdldDtcbiAgICB2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYWxsSXRlbXNbdGFyZ2V0XS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wQ2FyZC5jbGFzc05hbWUgPSBcIml0ZW0tY2FyZFwiO1xuICAgICAgICBsZXQgdGVtcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wVGl0bGUuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcbiAgICAgICAgbGV0IHRlbXBEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wRGF0ZS5pbm5lckhUTUwgPSBpdGVtLmRhdGU7XG4gICAgICAgIGxldCB0ZW1wUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcFByb2plY3QuaW5uZXJIVE1MID0gaXRlbS5wcm9qZWN0O1xuICAgICAgICBsZXQgdGVtcERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZW1wRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGVtcENhcmQuYXBwZW5kQ2hpbGQodGVtcFRpdGxlKTtcbiAgICAgICAgdGVtcENhcmQuYXBwZW5kQ2hpbGQodGVtcERhdGUpO1xuICAgICAgICB0ZW1wQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wUHJvamVjdCk7XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBEZXNjcmlwdGlvbik7XG4gICAgICAgIHZpZXcuYXBwZW5kQ2hpbGQodGVtcENhcmQpO1xuICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU2NyZWVuKG5hdmlnYXRlKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IHRhcmdldCA9IG5hdmlnYXRlLmlkO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0YXJnZXQ7XG4gICAgdmlldy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGFsbEl0ZW1zW3RhcmdldF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgdGVtcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcENhcmQuY2xhc3NOYW1lID0gXCJpdGVtLWNhcmRcIjtcbiAgICAgICAgbGV0IHRlbXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcFRpdGxlLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGxldCB0ZW1wRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcERhdGUuaW5uZXJIVE1MID0gaXRlbS5kYXRlO1xuICAgICAgICBsZXQgdGVtcFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRlbXBQcm9qZWN0LmlubmVySFRNTCA9IGl0ZW0ucHJvamVjdDtcbiAgICAgICAgbGV0IHRlbXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGVtcERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBUaXRsZSk7XG4gICAgICAgIHRlbXBDYXJkLmFwcGVuZENoaWxkKHRlbXBEYXRlKTtcbiAgICAgICAgdGVtcENhcmQuYXBwZW5kQ2hpbGQodGVtcFByb2plY3QpO1xuICAgICAgICB0ZW1wQ2FyZC5hcHBlbmRDaGlsZCh0ZW1wRGVzY3JpcHRpb24pO1xuICAgICAgICB2aWV3LmFwcGVuZENoaWxkKHRlbXBDYXJkKTtcbiAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBjbGVhclZpZXcoKSB7XG4gICAgd2hpbGUgKHZpZXcuZmlyc3RDaGlsZCkge1xuICAgICAgICB2aWV3LnJlbW92ZUNoaWxkKHZpZXcuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3BvcHVsYXRlU2NyZWVuLCBjbGVhclZpZXcsIHJlZnJlc2hTY3JlZW59OyIsIi8vQ3JlYXRlIGFuIGFkZFByb2plY3QgZnVuY3Rpb24gYW5kIGEgZ2V0QWxsUHJvamVjdHMgZnVuY3Rpb24gdG8gcGFzcyBpbnRvIHRoZSB0b2RvLmpzIGZpbGUuXG5cbmxldCBhbGxQcm9qZWN0cyA9IFt7dGl0bGU6ICdpbmJveCd9LCB7dGl0bGU6ICdneW0nfSwge3RpdGxlOiAnaW50ZXJuc2hpcHMnfSwge3RpdGxlOiAnbGlmZXN0eWxlJ31dO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBidXR0b25OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMgLmJ1dHRvbi1uYXYnKTtcbmNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZE5ld1Byb2plY3QoKTtcbn0pO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3QoKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJvamVjdE5hbWUnKS52YWx1ZTtcbiAgICByZXR1cm4ge3RpdGxlfTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3ROYW1lJykudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgdGVtcCA9IHBvcHVsYXRlUHJvamVjdCgpO1xuICAgIGFsbFByb2plY3RzLnB1c2godGVtcCk7XG4gICAgY2xlYXJQcm9qZWN0RGlzcGxheSgpO1xuICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICAgIGNsZWFyUHJvamVjdFNlbGVjdGlvbigpO1xuICAgIHVwZGF0ZVByb2plY3RTZWxlY3Rpb24oKTtcbiAgICBjbG9zZUZvcm0oKTtcbiAgICBjbGVhckZvcm0oKTtcbn1cblxuY29uc3QgY2xlYXJQcm9qZWN0RGlzcGxheSA9ICgpID0+IHtcbiAgICB3aGlsZSAoYnV0dG9uTmF2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYnV0dG9uTmF2LnJlbW92ZUNoaWxkKGJ1dHRvbk5hdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpc3BsYXlBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBCdXR0b24uY2xhc3NOYW1lID0gXCJuYXZpZ2F0ZVwiO1xuICAgICAgICB0ZW1wQnV0dG9uLmlkID0gYWxsUHJvamVjdHNbaV0udGl0bGU7XG4gICAgICAgIGxldCB0ZW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFsbFByb2plY3RzW2ldLnRpdGxlKTtcbiAgICAgICAgdGVtcEltZy5zcmMgPSBcImltYWdlcy9mb2xkZXItb3V0bGluZS5zdmdcIjtcbiAgICAgICAgdGVtcEJ1dHRvbi5hcHBlbmRDaGlsZCh0ZW1wSW1nKTtcbiAgICAgICAgdGVtcEJ1dHRvbi5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XG4gICAgICAgIGJ1dHRvbk5hdi5hcHBlbmRDaGlsZCh0ZW1wQnV0dG9uKTtcbiAgICB9XG59XG5cbmNvbnN0IGNsZWFyUHJvamVjdFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICB3aGlsZSAocHJvamVjdFNlbGVjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2plY3RTZWxlY3Rpb24ucmVtb3ZlQ2hpbGQocHJvamVjdFNlbGVjdGlvbi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmNvbnN0IHVwZGF0ZVByb2plY3RTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGVtcE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICB0ZW1wT3B0aW9uLmlubmVySFRNTCA9IGFsbFByb2plY3RzW2ldLnRpdGxlO1xuICAgICAgICBwcm9qZWN0U2VsZWN0aW9uLmFwcGVuZENoaWxkKHRlbXBPcHRpb24pO1xuICAgIH1cbn1cblxuLy8gY29uc3QgZ2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuLy8gICAgIHJldHVybiBhbGxQcm9qZWN0cztcbi8vIH1cblxuZXhwb3J0IHthbGxQcm9qZWN0c307IiwiLy9DcmVhdGUgYWxsIHRvLWRvIGl0ZW1zIGFmdGVyIGVhY2ggc3VibWlzc2lvbiBhbmQgaW1wb3J0IHRoZW0gaW50byBwcm9qZWN0LmpzLCB3aGVyZSBlYWNoXG4vL2l0ZW0gaXMgbWF0Y2hlZCB1cCB3aXRoIHRoZWlyIGNvcnJlc3BvbmRpbmcgcHJvamVjdCBieSB0aGUgcGFyYW1ldGVyLiBUaGVuIGRpc3BsYXkuXG5cbmltcG9ydCB7IHBvcHVsYXRlU2NyZWVuLCBjbGVhclZpZXcsIHJlZnJlc2hTY3JlZW4gfSBmcm9tICcuLi9jb21wb25lbnRzL25hdi5qcyc7XG5cbmNvbnN0IHZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldycpO1xuXG5sZXQgYWxsSXRlbXMgPSAgbmV3IE9iamVjdCgpO1xuY29uc3Qgc3VibWl0Tm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGROb3RlJyk7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0IG5vdGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGROb3RlLW1vZGFsJyk7XG5cbnN1Ym1pdE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkVG9kb0l0ZW0oKTtcbn0pO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9JdGVtKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2tUaXRsZScpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QsIGlzQ29tcGxldGV9O1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VGFza1RpdGxlJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWUgPSBcImluYm94XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBub3RlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9JdGVtKCkge1xuICAgIGNvbnN0IHRlbXAgPSBwb3B1bGF0ZVRvZG9JdGVtKCk7XG4gICAgaWYgKGFsbEl0ZW1zW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWVdKSB7XG4gICAgICAgIGFsbEl0ZW1zW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWVdLnB1c2godGVtcCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGxJdGVtc1tkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlXSA9IFt0ZW1wXTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWUgIT0gJ2luYm94JyAmJiBhbGxJdGVtc1snaW5ib3gnXSkge1xuICAgICAgICBhbGxJdGVtc1snaW5ib3gnXS5wdXNoKHRlbXApO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlICE9ICdpbmJveCcpIHtcbiAgICAgICAgYWxsSXRlbXNbJ2luYm94J10gPSBbdGVtcF07XG4gICAgfVxuXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMScpWzBdLnRleHRDb250ZW50LnJlcGxhY2UoL15cIiguKilcIiQvLCAnJDEnKTtcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIGNsZWFyVmlldygpO1xuXG4gICAgLy8gZ2V0QWxsSXRlbXMoKTtcbiAgICAvL1JlZnJlc2ggY3VycmVudCBzY3JlZW4vc2NyZWVuIGxhc3QgY2xpY2tlZCBvblxuICAgIGNsb3NlRm9ybSgpO1xuICAgIGNsZWFyRm9ybSgpO1xuXG4gICAgcmVmcmVzaFNjcmVlbih0YXJnZXQpO1xufVxuXG4vLyBjb25zdCBnZXRBbGxJdGVtcyA9ICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhhbGxJdGVtcyk7XG4vLyAgICAgcmV0dXJuIGFsbEl0ZW1zO1xuLy8gfVxuXG5leHBvcnQge2FsbEl0ZW1zfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9jc3Mvc2tlbGV0b24uY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvY2FsZW5kYXItYmxhbmsuc3ZnJztcbmltcG9ydCAnLi9pbWFnZXMvY2FsZW5kYXItd2Vlay1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2ZvbGRlci1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2luYm94LnN2Zyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL3RvZG8nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvamVjdCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXYnO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBub3RlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkTm90ZS1tb2RhbCcpO1xuY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWxQcm9qZWN0Jyk7XG5jb25zdCBjYW5jZWxOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbE5vdGUnKTtcblxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbHVzJyk7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG59KVxuXG5jb25zdCBhZGROb3RlPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUnKTtcbmFkZE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIG5vdGVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgbm90ZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn0pXG5cbmNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KVxuXG5jYW5jZWxOb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgbm90ZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=