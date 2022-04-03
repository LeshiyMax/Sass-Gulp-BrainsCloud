/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst body = document.body;\r\nconst page = document.getElementById('page');\r\n\r\n\r\n\r\nburger.addEventListener('click', event => {\r\n   if (body.classList.contains('show-sidebar')) {\r\n      closeSidebar();\r\n   } else {\r\n      showSidebar();\r\n   }\r\n   \r\n});\r\n\r\nfunction showSidebar() {\r\n   let mask = document.createElement('div');\r\n   mask.classList.add('page__mask');\r\n   mask.addEventListener('click', closeSidebar);\r\n   page.appendChild(mask);\r\n\r\n   body.classList.add('show-sidebar');\r\n}\r\n\r\n\r\nfunction closeSidebar() {\r\n   body.classList.remove('show-sidebar');\r\n   document.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("// все кнопки у которых есть атрибут data-modal\r\nconst modalBtn = document.querySelectorAll('[data-modal]');\r\n\r\nconst body = document.body;\r\n\r\n// Все кнпки закрыть модальное окно\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\n\r\n// Все модальные окна\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item => {\r\n   item.addEventListener('click', (event) => {\r\n      let $this = event.currentTarget;\r\n\r\n      // у кнопки получаем значение data-modal\r\n      let modalId = $this.getAttribute('data-modal');\r\n\r\n      // в переменую modal добавляем элемент по id\r\n      let modal = document.getElementById(modalId);\r\n\r\n      // Получаем блок modal__content \r\n      let modalContent = modal.querySelector('.modal__content')\r\n\r\n      // отменяем закрытие модального окна при клики по нему\r\n      modalContent.addEventListener('click', event => {\r\n         event.stopPropagation();\r\n      });\r\n\r\n\r\n      // элементу с найденым ID добавляем класс .show\r\n      // класс .show display: block;\r\n      modal.classList.add('show');\r\n\r\n      // убираем скролл когда модальное окно открыто\r\n      body.classList.add('no-scroll');\r\n\r\n      setTimeout(() => {\r\n         modalContent.style.transform = 'none';\r\n         modalContent.style.opacity = '1';\r\n      }, 1);\r\n   });\r\n});\r\n\r\n// закрытие модального окна по клику на кнопку крестика\r\nmodalClose.forEach(item => {\r\n   item.addEventListener('click', (event) => {\r\n      // получаем родителя кнопки\r\n      let currentModal = event.currentTarget.closest('.modal');\r\n\r\n      // вызываем функцию на закрытие модального окна\r\n      closeModal(currentModal)\r\n   });\r\n});\r\n\r\n// Закрытие модального окна при клики по фону сзади \r\nmodal.forEach(item => {\r\n   item.addEventListener('click', (event) => {\r\n      // получаем родителя кнопки\r\n      let currentModal = event.currentTarget;\r\n\r\n      // вызываем функцию на закрытие модального окна\r\n      closeModal(currentModal)\r\n   });\r\n});\r\n\r\n// функция которая закрывает модальное окно\r\nfunction closeModal(modal) {\r\n   let modalContent = modal.querySelector('.modal__content');\r\n   modalContent.removeAttribute('style');\r\n\r\n   setTimeout(() => {\r\n      // Убираем класс .show у открытого модального окна \r\n      modal.classList.remove('show');\r\n      body.classList.remove('no-scroll');\r\n   }, 250);\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\n\r\ntextArea.forEach(item => {\r\n   let textAreaH = item.offsetHeight;\r\n   item.addEventListener('input', (event) => {\r\n      let $this = event.target;\r\n\r\n      $this.style.height = textAreaH + '';\r\n      $this.style.height = $this.scrollHeight + 'px';\r\n   });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;