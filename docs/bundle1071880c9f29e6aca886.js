(self.webpackChunkto_do_list = self.webpackChunkto_do_list || []).push([['bundle'], {

  /***/ './src/List.js':
  /*! *********************!*\
  !*** ./src/List.js ***!
  \******************** */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    function _typeof(obj) {
      '@babel/helpers - typeof';

      return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }, _typeof(obj);
    }
    function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor; }
    function _toPropertyKey(arg) { const key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key); }
    function _toPrimitive(input, hint) { if (_typeof(input) !== 'object' || input === null) return input; const prim = input[Symbol.toPrimitive]; if (prim !== undefined) { const res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (hint === 'string' ? String : Number)(input); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    const List = /* #__PURE__ */_createClass(function List(description) {
      const completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      const id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      _classCallCheck(this, List);
      this.description = description;
      this.completed = completed;
      this.id = id;
    });
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);
    /***/ }),

  /***/ './src/index.js':
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ './src/task.js');
    /* harmony import */ const _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ './src/List.js');

    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default();
    document.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const description = document.getElementById('input').value;
      if (description === '') {
        task.showAlert();
      } else {
        const list = new _List_js__WEBPACK_IMPORTED_MODULE_1__.default(description);
        task.addList(list);
        task.clearInput();
      }
    });
    const clearBtn = document.getElementById('clearBtn');
    const reloadBtn = document.querySelector('.fa-arrows-rotate');
    clearBtn.addEventListener('click', () => {
      task.removeCheckedTasks();
    });
    reloadBtn.addEventListener('click', () => {
      task.removeCheckedTasks();
    });
    document.getElementById('lists').addEventListener('click', (event) => {
      if (event.target.classList.contains('fa-trash-can')) {
        const listItem = event.target.closest('.list-item');
        const itemId = parseInt(listItem.dataset.id, 10);
        task.removeList(itemId);
      }
    });
    task.updateList();
    /***/ }),

  /***/ './src/store.js':
  /*! **********************!*\
  !*** ./src/store.js ***!
  \********************* */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    function _typeof(obj) {
      '@babel/helpers - typeof';

      return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor; }
    function _toPropertyKey(arg) { const key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key); }
    function _toPrimitive(input, hint) { if (_typeof(input) !== 'object' || input === null) return input; const prim = input[Symbol.toPrimitive]; if (prim !== undefined) { const res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (hint === 'string' ? String : Number)(input); }
    const Store = /* #__PURE__ */(function () {
      function Store(key) {
        _classCallCheck(this, Store);
        this.key = key;
      }
      _createClass(Store, [{
        key: 'getItems',
        value: function getItems() {
          const item = localStorage.getItem(this.key);
          if (item === null || item === '') {
            return [];
          }
          try {
            return JSON.parse(item);
          } catch (e) {
            return [];
          }
        },
      }, {
        key: 'setItems',
        value: function setItems(items) {
          const item = JSON.stringify(items);
          localStorage.setItem(this.key, item);
        },
      }]);
      return Store;
    }());
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);
    /***/ }),

  /***/ './src/task.js':
  /*! *********************!*\
  !*** ./src/task.js ***!
  \******************** */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    /* harmony import */ const _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ './src/styles.css');
    /* harmony import */ const _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ './src/store.js');
    function _typeof(obj) {
      '@babel/helpers - typeof';

      return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }, _typeof(obj);
    }
    function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter((sym) => Object.getOwnPropertyDescriptor(object, sym).enumerable)), keys.push.apply(keys, symbols); } return keys; }
    function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach((key) => { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
    function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, 'prototype', { writable: false }); return Constructor; }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key); if (key in obj) {
        Object.defineProperty(obj, key, {
          value, enumerable: true, configurable: true, writable: true,
        });
      } else { obj[key] = value; } return obj;
    }
    function _toPropertyKey(arg) { const key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key); }
    function _toPrimitive(input, hint) { if (_typeof(input) !== 'object' || input === null) return input; const prim = input[Symbol.toPrimitive]; if (prim !== undefined) { const res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.'); } return (hint === 'string' ? String : Number)(input); }

    const Task = /* #__PURE__ */(function () {
      function Task() {
        _classCallCheck(this, Task);
        _defineProperty(this, 'clearInput', () => {
          document.getElementById('input').value = '';
        });
        this.container = document.getElementById('lists');
        this.template = document.getElementById('template');
        this.store = new _store_js__WEBPACK_IMPORTED_MODULE_1__.default('todo-list');
        this.items = this.store.getItems();
        this.form = document.getElementById('form');
        this.alertDiv = document.createElement('div');
        this.alertDiv.classList.add('alert');
        this.form.insertAdjacentElement('beforebegin', this.alertDiv);
        this.currentId = 0;
        if (this.items.length > 0) {
          this.currentId = this.items[this.items.length - 1].id;
        }
        this.updateList();
      }
      _createClass(Task, [{
        key: 'updateItem',
        value: function updateItem(item, key, value) {
          const newItem = _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, key, value));
          const index = this.items.findIndex((i) => i.id === item.id);
          this.items[index] = newItem;
          this.store.setItems(this.items);
          this.updateList();
        },
      }, {
        key: 'updateList',
        value: function updateList() {
          const _this = this;
          this.container.innerHTML = '';
          this.items.forEach((item) => {
            const itemElement = _this.template.content.cloneNode(true);
            const taskInput = itemElement.querySelector('.task-description');
            const completedTask = itemElement.querySelector('.task-completed');
            const deleteBtn = itemElement.querySelector('.fa-trash-can');
            const ellipsis = itemElement.querySelector('.fa-ellipsis-vertical');
            ellipsis.addEventListener('click', () => {
              taskInput.disabled = false;
              ellipsis.style.display = 'none';
              deleteBtn.style.display = 'block';
            });
            deleteBtn.addEventListener('click', () => {
              _this.removeList(item.id);
            });
            if (taskInput) {
              taskInput.value = item.description;
              taskInput.disabled = item.completed || true;
            }
            if (completedTask) {
              completedTask.checked = item.completed;
              if (item.completed) {
                deleteBtn.style.display = 'block';
                ellipsis.style.display = 'none';
              } else {
                deleteBtn.style.display = 'none';
                ellipsis.style.display = 'block';
              }
            }
            taskInput.addEventListener('change', (e) => {
              if (!item.completed) {
                _this.updateItem(item, 'description', e.target.value);
              }
            });
            completedTask.addEventListener('change', () => {
              _this.updateItem(item, 'completed', completedTask.checked);
              taskInput.disabled = item.completed;
              completedTask.checked = item.completed;
              if (item.completed) {
                deleteBtn.style.display = 'block';
                ellipsis.style.display = 'none';
              } else {
                deleteBtn.style.display = 'none';
                ellipsis.style.display = 'block';
              }
            });
            _this.container.appendChild(itemElement);
          });
        },
      }, {
        key: 'showAlert',
        value: function showAlert() {
          const _this2 = this;
          this.alertDiv.textContent = 'Please enter a description for the list.';
          this.alertDiv.style.display = 'flex';
          setTimeout(() => {
            _this2.alertDiv.style.display = 'none';
          }, 2000);
        },
      }, {
        key: 'addList',
        value: function addList(list) {
          if (this.items.length > 0) {
            list.id = this.items[this.items.length - 1].id + 1;
          } else {
            list.id = 1;
          }
          this.items.push(list);
          this.store.setItems(this.items);
          this.updateList();
        },
      }, {
        key: 'removeList',
        value: function removeList(id) {
          const index = this.items.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.items.splice(index, 1);
            for (let i = index; i < this.items.length; i += 1) {
              this.items[i].id = i + 1;
            }
            this.store.setItems(this.items);
            this.updateList();
          }
        },
      }, {
        key: 'removeCheckedTasks',
        value: function removeCheckedTasks() {
          const uncheckedItems = this.items.filter((item) => !item.completed);
          this.items = uncheckedItems.map((item, index) => _objectSpread(_objectSpread({}, item), {}, {
            id: index + 1,
          }));
          this.store.setItems(this.items);
          this.updateList();
        },
      }]);
      return Task;
    }());
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);
    /***/ }),

  /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css':
  /*! *****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************************************************** */
  /***/ ((module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js');
    /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js');
    /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
    // Imports

    const ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
    // Module
    ___CSS_LOADER_EXPORT___.push([module.id, '* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  background: bisque;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 80%;\n  height: 60%;\n  max-width: 500px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n#container .heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 0.8rem 1rem 0.5rem;\n  border-bottom: 1px solid #ccc;\n}\n\n#container .heading .fa-arrows-rotate {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n#container .heading .fa-arrows-rotate:hover {\n  transform: rotate(360deg);\n}\n\n#form {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.3rem 0;\n  gap: 1rem;\n  border-bottom: 1px solid #ccc;\n}\n\n#form input {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  border: none;\n}\n\n#form input:focus {\n  background-color: #fff;\n  outline: none;\n}\n\n#form button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n#form button:hover .fa-plus {\n  scale: 1.1;\n}\n\n#clearBtn {\n  width: 100%;\n  padding: 1rem;\n  border: none;\n}\n\n.task-description {\n  padding: 5px;\n  width: 200px;\n  margin-bottom: 10px;\n}\n\n.list-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.2rem 1rem 0.2rem 0.8rem;\n  border-bottom: 1px solid #ccc;\n}\n\n.list-item .task-completed {\n  padding-bottom: 0.5rem;\n}\n\n.list-item .task-description {\n  margin-top: 0.5rem;\n  flex: 1;\n  padding: 1rem 0;\n  border: none;\n}\n\n.list-item .task-description:focus {\n  outline: none;\n}\n\n.list-item .fa-trash-can {\n  display: none;\n}\n\n.task-completed:checked + .task-description {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n#lists {\n  width: 100%;\n}\n\n.alert {\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  height: 3rem;\n  width: 100%;\n  background-color: #fba7a7;\n  display: none;\n}\n\n.fa-ellipsis-vertical {\n  cursor: pointer;\n}', '', {
      version: 3, sources: ['webpack://./src/styles.css'], names: [], mappings: 'AAAA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kCAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,uCAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,gCAAA;EACA,6BAAA;AACF;;AAEA;EACE,eAAA;EACA,gCAAA;AACF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,iBAAA;EACA,SAAA;EACA,6BAAA;AACF;;AAEA;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;AACF;;AAEA;EACE,sBAAA;EACA,aAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,8BAAA;EACA,WAAA;EACA,kCAAA;EACA,6BAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,kBAAA;EACA,OAAA;EACA,eAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,6BAAA;EACA,WAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,aAAA;AACF;;AAEA;EACE,eAAA;AACF', sourcesContent: ['* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  background: bisque;\n}\n\n#container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-color: #fff;\n  border-radius: 5px;\n  width: 80%;\n  height: 60%;\n  max-width: 500px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n#container .heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1rem 0.8rem 1rem 0.5rem;\n  border-bottom: 1px solid #ccc;\n}\n\n#container .heading .fa-arrows-rotate {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n#container .heading .fa-arrows-rotate:hover {\n  transform: rotate(360deg);\n}\n\n#form {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.3rem 0;\n  gap: 1rem;\n  border-bottom: 1px solid #ccc;\n}\n\n#form input {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid #ccc;\n  border: none;\n}\n\n#form input:focus {\n  background-color: #fff;\n  outline: none;\n}\n\n#form button {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n#form button:hover .fa-plus {\n  scale: 1.1;\n}\n\n#clearBtn {\n  width: 100%;\n  padding: 1rem;\n  border: none;\n}\n\n.task-description {\n  padding: 5px;\n  width: 200px;\n  margin-bottom: 10px;\n}\n\n.list-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.2rem 1rem 0.2rem 0.8rem;\n  border-bottom: 1px solid #ccc;\n}\n\n.list-item .task-completed {\n  padding-bottom: 0.5rem;\n}\n\n.list-item .task-description {\n  margin-top: 0.5rem;\n  flex: 1;\n  padding: 1rem 0;\n  border: none;\n}\n\n.list-item .task-description:focus {\n  outline: none;\n}\n\n.list-item .fa-trash-can {\n  display: none;\n}\n\n.task-completed:checked + .task-description {\n  text-decoration: line-through;\n  color: #ccc;\n}\n\n#lists {\n  width: 100%;\n}\n\n.alert {\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  height: 3rem;\n  width: 100%;\n  background-color: #fba7a7;\n  display: none;\n}\n\n.fa-ellipsis-vertical {\n  cursor: pointer;\n}\n'], sourceRoot: '',
    }]);
    // Exports
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/api.js':
  /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
  /***/ ((module) => {
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
    module.exports = function (cssWithMappingToString) {
      const list = [];

      // return the list of modules as css string
      list.toString = function toString() {
        return this.map((item) => {
          let content = '';
          const needLayer = typeof item[5] !== 'undefined';
          if (item[4]) {
            content += '@supports ('.concat(item[4], ') {');
          }
          if (item[2]) {
            content += '@media '.concat(item[2], ' {');
          }
          if (needLayer) {
            content += '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {');
          }
          content += cssWithMappingToString(item);
          if (needLayer) {
            content += '}';
          }
          if (item[2]) {
            content += '}';
          }
          if (item[4]) {
            content += '}';
          }
          return content;
        }).join('');
      };

      // import a list of modules into the list
      list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === 'string') {
          modules = [[null, modules, undefined]];
        }
        const alreadyImportedModules = {};
        if (dedupe) {
          for (let k = 0; k < this.length; k++) {
            const id = this[k][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }
        for (let _k = 0; _k < modules.length; _k++) {
          const item = [].concat(modules[_k]);
          if (dedupe && alreadyImportedModules[item[0]]) {
            continue;
          }
          if (typeof layer !== 'undefined') {
            if (typeof item[5] === 'undefined') {
              item[5] = layer;
            } else {
              item[1] = '@layer'.concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {').concat(item[1], '}');
              item[5] = layer;
            }
          }
          if (media) {
            if (!item[2]) {
              item[2] = media;
            } else {
              item[1] = '@media '.concat(item[2], ' {').concat(item[1], '}');
              item[2] = media;
            }
          }
          if (supports) {
            if (!item[4]) {
              item[4] = ''.concat(supports);
            } else {
              item[1] = '@supports ('.concat(item[4], ') {').concat(item[1], '}');
              item[4] = supports;
            }
          }
          list.push(item);
        }
      };
      return list;
    };
    /***/ }),

  /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
  /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
  /***/ ((module) => {
    module.exports = function (item) {
      const content = item[1];
      const cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }
      if (typeof btoa === 'function') {
        const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        const data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
        const sourceMapping = '/*# '.concat(data, ' */');
        return [content].concat([sourceMapping]).join('\n');
      }
      return [content].join('\n');
    };
    /***/ }),

  /***/ './src/styles.css':
  /*! ************************!*\
  !*** ./src/styles.css ***!
  \*********************** */
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ default: () => (__WEBPACK_DEFAULT_EXPORT__),
      /* harmony export */ });
    /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js');
    /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /* #__PURE__ */__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ const _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ './node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css');

    const options = {};

    options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
    options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

    options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, 'head');

    options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
    options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

    const update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
  /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
  /***/ ((module) => {
    const stylesInDOM = [];
    function getIndexByIdentifier(identifier) {
      let result = -1;
      for (let i = 0; i < stylesInDOM.length; i++) {
        if (stylesInDOM[i].identifier === identifier) {
          result = i;
          break;
        }
      }
      return result;
    }
    function modulesToDom(list, options) {
      const idCountMap = {};
      const identifiers = [];
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = ''.concat(id, ' ').concat(count);
        idCountMap[id] = count + 1;
        const indexByIdentifier = getIndexByIdentifier(identifier);
        const obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3],
          supports: item[4],
          layer: item[5],
        };
        if (indexByIdentifier !== -1) {
          stylesInDOM[indexByIdentifier].references++;
          stylesInDOM[indexByIdentifier].updater(obj);
        } else {
          const updater = addElementStyle(obj, options);
          options.byIndex = i;
          stylesInDOM.splice(i, 0, {
            identifier,
            updater,
            references: 1,
          });
        }
        identifiers.push(identifier);
      }
      return identifiers;
    }
    function addElementStyle(obj, options) {
      const api = options.domAPI(options);
      api.update(obj);
      const updater = function updater(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
            return;
          }
          api.update(obj = newObj);
        } else {
          api.remove();
        }
      };
      return updater;
    }
    module.exports = function (list, options) {
      options = options || {};
      list = list || [];
      let lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];
        for (let i = 0; i < lastIdentifiers.length; i++) {
          const identifier = lastIdentifiers[i];
          const index = getIndexByIdentifier(identifier);
          stylesInDOM[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for (let _i = 0; _i < lastIdentifiers.length; _i++) {
          const _identifier = lastIdentifiers[_i];
          const _index = getIndexByIdentifier(_identifier);
          if (stylesInDOM[_index].references === 0) {
            stylesInDOM[_index].updater();
            stylesInDOM.splice(_index, 1);
          }
        }
        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
  /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
  /***/ ((module) => {
    const memo = {};

    /* istanbul ignore next  */
    function getTarget(target) {
      if (typeof memo[target] === 'undefined') {
        let styleTarget = document.querySelector(target);

        // Special case to return head of iframe instead of iframe itself
        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
          try {
            // This will throw an exception if access to iframe is blocked
            // due to cross-origin restrictions
            styleTarget = styleTarget.contentDocument.head;
          } catch (e) {
            // istanbul ignore next
            styleTarget = null;
          }
        }
        memo[target] = styleTarget;
      }
      return memo[target];
    }

    /* istanbul ignore next  */
    function insertBySelector(insert, style) {
      const target = getTarget(insert);
      if (!target) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      }
      target.appendChild(style);
    }
    module.exports = insertBySelector;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
  /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
  /***/ ((module) => {
    /* istanbul ignore next  */
    function insertStyleElement(options) {
      const element = document.createElement('style');
      options.setAttributes(element, options.attributes);
      options.insert(element, options.options);
      return element;
    }
    module.exports = insertStyleElement;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
  /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    /* istanbul ignore next  */
    function setAttributesWithoutAttributes(styleElement) {
      const nonce = true ? __webpack_require__.nc : 0;
      if (nonce) {
        styleElement.setAttribute('nonce', nonce);
      }
    }
    module.exports = setAttributesWithoutAttributes;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
  /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
  /***/ ((module) => {
    /* istanbul ignore next  */
    function apply(styleElement, options, obj) {
      let css = '';
      if (obj.supports) {
        css += '@supports ('.concat(obj.supports, ') {');
      }
      if (obj.media) {
        css += '@media '.concat(obj.media, ' {');
      }
      const needLayer = typeof obj.layer !== 'undefined';
      if (needLayer) {
        css += '@layer'.concat(obj.layer.length > 0 ? ' '.concat(obj.layer) : '', ' {');
      }
      css += obj.css;
      if (needLayer) {
        css += '}';
      }
      if (obj.media) {
        css += '}';
      }
      if (obj.supports) {
        css += '}';
      }
      const { sourceMap } = obj;
      if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), ' */');
      }

      // For old IE
      /* istanbul ignore if  */
      options.styleTagTransform(css, styleElement, options.options);
    }
    function removeStyleElement(styleElement) {
      // istanbul ignore if
      if (styleElement.parentNode === null) {
        return false;
      }
      styleElement.parentNode.removeChild(styleElement);
    }

    /* istanbul ignore next  */
    function domAPI(options) {
      if (typeof document === 'undefined') {
        return {
          update: function update() {},
          remove: function remove() {},
        };
      }
      const styleElement = options.insertStyleElement(options);
      return {
        update: function update(obj) {
          apply(styleElement, options, obj);
        },
        remove: function remove() {
          removeStyleElement(styleElement);
        },
      };
    }
    module.exports = domAPI;
    /***/ }),

  /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
  /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
  /***/ ((module) => {
    /* istanbul ignore next  */
    function styleTagTransform(css, styleElement) {
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css));
      }
    }
    module.exports = styleTagTransform;
    /***/ }),

},
/** *** */ (__webpack_require__) => { // webpackRuntimeModules
/** *** */ const __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId));
  /** *** */ const __webpack_exports__ = (__webpack_exec__('./src/index.js'));
/** *** */ },
]);
// # sourceMappingURL=bundle1071880c9f29e6aca886.js.map