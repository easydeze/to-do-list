/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllItems": () => (/* binding */ getAllItems)
/* harmony export */ });
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todo */ "./src/components/todo.js");


(0,_components_todo__WEBPACK_IMPORTED_MODULE_0__.getAllItems)();

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7VUNqQ3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0Q7O0FBRWhELDZEQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQ3JlYXRlIGFsbCB0by1kbyBpdGVtcyBhZnRlciBlYWNoIHN1Ym1pc3Npb24gYW5kIGltcG9ydCB0aGVtIGludG8gcHJvamVjdC5qcywgd2hlcmUgZWFjaFxuLy9pdGVtIGlzIG1hdGNoZWQgdXAgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIHByb2plY3QgYnkgdGhlIHBhcmFtZXRlci4gVGhlbiBkaXNwbGF5LlxuXG5sZXQgYWxsSXRlbXMgPSBbXTtcbmNvbnN0IHN1Ym1pdE5vdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTm90ZScpO1xuc3VibWl0Tm90ZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiSElcIik7XG4gICAgYWRkVG9kb0l0ZW07XG4gICAgZ2V0QWxsSXRlbXM7XG59KTtcblxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRvZG9JdGVtKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFRhc2tUaXRsZScpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCwgaXNDb21wbGV0ZX07XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9JdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGVtcCA9IHBvcHVsYXRlVG9kb0l0ZW0oKTtcbiAgICBhbGxJdGVtcy5wdXNoKHRlbXApO1xuICAgIGdldEFsbEl0ZW1zKCk7XG59XG5cbmNvbnN0IGdldEFsbEl0ZW1zID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFsbEl0ZW1zKTtcbn1cblxuZXhwb3J0IHtnZXRBbGxJdGVtc307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEFsbEl0ZW1zIH0gZnJvbSBcIi4vY29tcG9uZW50cy90b2RvXCI7XG5cbmdldEFsbEl0ZW1zKCk7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtbW9kYWwnKTtcbmNvbnN0IG5vdGVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGROb3RlLW1vZGFsJyk7XG5jb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbFByb2plY3QnKTtcbmNvbnN0IGNhbmNlbE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsTm90ZScpO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsdXMnKTtcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiSElcIik7XG4gICAgaWYgKG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbn0pXG5cbmNvbnN0IGFkZE5vdGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbm90ZScpO1xuYWRkTm90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAob3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgbm90ZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBub3RlTW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufSlcblxuY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0pXG5cbmNhbmNlbE5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBub3RlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=