"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Chat */ \"./src/pages/lib/Chat.js\");\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_Chat__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBRWYsU0FBU0UsT0FBTztJQUM3QixxQkFBTyw4REFBQ0QsaURBQUlBOzs7OztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NpYWxhZ2ktZXhhbXBsZS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vbGliL0NoYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIDxDaGF0IC8+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYXQiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/pages/lib/Chat.js":
/*!*******************************!*\
  !*** ./src/pages/lib/Chat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"socialagi\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n// Chat.js\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nfunction Chat() {\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            sender: \"start\",\n            text: \"Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?\"\n        }\n    ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [soulThoughts, setSoulThoughts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            sender: \"start\",\n            text: \"Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?\"\n        }\n    ]);\n    const scrollToBottomThoughts = ()=>{\n        soulMessagesEndRef.current?.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"end\",\n                text: message\n            }\n        ]);\n        setLoading(true);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"start\",\n                        text: data.message\n                    }\n                ]);\n            setSoulThoughts((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"start\",\n                        text: `Stefan feels user is: ${data.feels}`\n                    }\n                ]);\n            setSoulThoughts((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"start\",\n                        text: `Stefan decides: ${data.decides}`\n                    }\n                ]);\n            setSoulThoughts((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"start\",\n                        text: `Stefan sent message: ${data.message}`\n                    }\n                ]);\n            setLoading(false);\n        }\n    }\n    const scrollToBottom = ()=>{\n        const cont = document.querySelector(\"#cont\");\n        cont.scrollTop = cont.scrollHeight;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>scrollToBottom(), 100);\n    }, [\n        messages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex container px-4 py-12 justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: `text-4xl text-white font-semibold mb-4 text-center pb-7 orbitron`,\n                            children: \"MEET STEFAN\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white rounded-lg shadow-md p-6 max-w-md w-96\",\n                            ref: messagesEndRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col space-y-4 h-96 overflow-y-auto mb-4 min-h-40 hide-scrollbar\",\n                                    id: \"cont\",\n                                    children: messages.map((message, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: `chat chat-${message.sender}`,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"chat-image avatar\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"w-10 rounded-full\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                src: `${message.sender}.png`\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                                lineNumber: 101,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"chat-bubble bg-slate-700\",\n                                                        children: message.text\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                        lineNumber: 104,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, i, false, {\n                                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"basis-10/12\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    className: \"text-black w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-purple-600\",\n                                                    placeholder: \"Bio\",\n                                                    disabled: loading,\n                                                    onKeyDown: (e)=>e.keyCode == 13 ? handleSendMessage(e) : \"\",\n                                                    value: message,\n                                                    onChange: (e)=>setMessage(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                lineNumber: 112,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"rounded-lg bg-purple-600 text-white px-4 py-2 font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600\",\n                                                onClick: handleSendMessage,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fa fa-send\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 203\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white bg-opacity-0 rounded-lg w-96\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full overflow-y-auto fixed ml-10 w-96 mx-auto hide-scrollbar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-col space-y-4 overflow-y-auto mb-4 hide-scrollbar pb-60 mr-4\",\n                            children: [\n                                soulThoughts.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: `text-white bg-purple-100 bg-opacity-30 px-4 py-2 rounded-[35px] shadow-sm opacity-0 transition-all duration-500 ease-in-out animate-fade-in`,\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ref: soulMessagesEndRef\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 149,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUNabEMsYUFBYXNDLEdBQUcsQ0FBQyxDQUFDaEQsU0FBUzZELHNCQUMxQiw4REFBQ2xCO3dDQUVDQyxXQUFVO2tEQUVaLDRFQUFDRDs0Q0FDQ0MsV0FBVyxDQUFDLDJJQUEySSxDQUFDO3NEQUV2SjVDLFFBQVFLLElBQUk7Ozs7Ozt1Q0FOUndEOzs7Ozs4Q0FVVCw4REFBQ2xCO29DQUFJRyxLQUFLckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtBQUVlLFNBQVNxRCxVQUFVO0lBQ2hDLHFCQUFPLDhEQUFDL0Q7Ozs7O0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbGFnaS1leGFtcGxlLy4vc3JjL3BhZ2VzL2xpYi9DaGF0LmpzP2FmNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhdC5qc1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvcnRleFN0ZXAsIHVzZVNvdWwsIFRob3VnaHRGcmFtZXdvcmssIEJsdWVwcmludHMsIENoYXRNZXNzYWdlUm9sZUVudW0sIFNvdWwsIE1vZGVsIH0gZnJvbSBcInNvY2lhbGFnaVwiO1xyXG5cclxubGV0IHN0ZXAgPSBuZXcgQ29ydGV4U3RlcChcIlRoZSBiZXN0IG1hdGhlbWF0aWMgdHV0b3JcIik7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgXHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbeyBzZW5kZXI6IFwic3RhcnRcIiwgdGV4dDogXCJXZWxjb21lIHRvIG15IGNsYXNzLiBJJ20gU3RlZmFuLCB0aGUgYmVzdCB0dXRvciBpbiB0aGUgd29ybGQuIFBsZWFzZSB0ZWxsIG1lIHdoYXQgeW91IHdhbnQgdG8gbGVhcm4gdG9kYXk/XCIgfV0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBzb3VsTWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NvdWxUaG91Z2h0cywgc2V0U291bFRob3VnaHRzXSA9IHVzZVN0YXRlKFxyXG4gICAgW3sgc2VuZGVyOiBcInN0YXJ0XCIsIHRleHQ6IFwiV2VsY29tZSB0byBteSBjbGFzcy4gSSdtIFN0ZWZhbiwgdGhlIGJlc3QgdHV0b3IgaW4gdGhlIHdvcmxkLiBQbGVhc2UgdGVsbCBtZSB3aGF0IHlvdSB3YW50IHRvIGxlYXJuIHRvZGF5P1wiIH1dXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbVRob3VnaHRzID0gKCkgPT4ge1xyXG4gICAgc291bE1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgc2VuZGVyOiBcImVuZFwiLCB0ZXh0OiBtZXNzYWdlIH1dKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIFxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHsgc2VuZGVyOiBcInN0YXJ0XCIsIHRleHQ6IGRhdGEubWVzc2FnZSB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHNldFNvdWxUaG91Z2h0cygobWVzc2FnZXM9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHtzZW5kZXI6XCJzdGFydFwiLCB0ZXh0OiBgU3RlZmFuIGZlZWxzIHVzZXIgaXM6ICR7ZGF0YS5mZWVsc31gfSxcclxuICAgICAgICBdKSk7XHJcbiAgICAgICAgc2V0U291bFRob3VnaHRzKChtZXNzYWdlcz0+IFtcclxuICAgICAgICAgIC4uLm1lc3NhZ2VzLFxyXG4gICAgICAgICAge3NlbmRlcjpcInN0YXJ0XCIsIHRleHQ6IGBTdGVmYW4gZGVjaWRlczogJHtkYXRhLmRlY2lkZXN9YH0sXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIHNldFNvdWxUaG91Z2h0cygobWVzc2FnZXM9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHtzZW5kZXI6XCJzdGFydFwiLCB0ZXh0OiBgU3RlZmFuIHNlbnQgbWVzc2FnZTogJHtkYXRhLm1lc3NhZ2V9YH0sXHJcbiAgICAgICAgXSkpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRcIik7XHJcbiAgICBjb250LnNjcm9sbFRvcCA9IGNvbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gIH07XHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBzY3JvbGxUb0JvdHRvbSgpLCAxMDApO1xyXG4gIH0sIFttZXNzYWdlc10pO1xyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tVGhvdWdodHMoKTtcclxuICB9LCBbc291bFRob3VnaHRzXSk7XHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNDAwIHZpYS1waW5rLTUwMCB0by1yZWQtNTAwIHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRhaW5lciBweC00IHB5LTEyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LTR4bCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlciBwYi03IG9yYml0cm9uYH0+XHJcbiAgICAgICAgICAgICAgTUVFVCBTVEVGQU5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNiBtYXgtdy1tZCB3LTk2XCIgcmVmPXttZXNzYWdlc0VuZFJlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgaC05NiBvdmVyZmxvdy15LWF1dG8gbWItNCBtaW4taC00MCBoaWRlLXNjcm9sbGJhclwiICBpZD1cImNvbnRcIj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJ1YmJsZVwiPkl0J3Mgb3ZlciBBbmFraW4sIDxici8+SSBoYXZlIHRoZSBoaWdoIGdyb3VuZC48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0IGNoYXQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJ1YmJsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSk9PihcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hhdCBjaGF0LSR7bWVzc2FnZS5zZW5kZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW1hZ2UgYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7bWVzc2FnZS5zZW5kZXJ9LnBuZ2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlIGJnLXNsYXRlLTcwMFwiPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2lzLTEwLzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNjAwXCIgcGxhY2Vob2xkZXI9XCJCaW9cIiAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2U9PmUua2V5Q29kZT09MTM/aGFuZGxlU2VuZE1lc3NhZ2UoZSk6XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZT0+c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiBmb250LXNlbWlib2xkIGhvdmVyOmJnLXB1cnBsZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS02MDBcIiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS0wIHJvdW5kZWQtbGcgdy05NlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvIGZpeGVkIG1sLTEwIHctOTYgbXgtYXV0byBoaWRlLXNjcm9sbGJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIHNwYWNlLXktNCBvdmVyZmxvdy15LWF1dG8gbWItNCBoaWRlLXNjcm9sbGJhciBwYi02MCBtci00XCI+XHJcbiAgICAgICAgICAgICAge3NvdWxUaG91Z2h0cy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIGJnLXB1cnBsZS0xMDAgYmctb3BhY2l0eS0zMCBweC00IHB5LTIgcm91bmRlZC1bMzVweF0gc2hhZG93LXNtIG9wYWNpdHktMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgYW5pbWF0ZS1mYWRlLWluYH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXtzb3VsTWVzc2FnZXNFbmRSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0QXBwKCkge1xyXG4gIHJldHVybiA8Q2hhdCAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvcnRleFN0ZXAiLCJ1c2VTb3VsIiwiVGhvdWdodEZyYW1ld29yayIsIkJsdWVwcmludHMiLCJDaGF0TWVzc2FnZVJvbGVFbnVtIiwiU291bCIsIk1vZGVsIiwic3RlcCIsIkNoYXQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzZW5kZXIiLCJ0ZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlc0VuZFJlZiIsInNvdWxNZXNzYWdlc0VuZFJlZiIsInNvdWxUaG91Z2h0cyIsInNldFNvdWxUaG91Z2h0cyIsInNjcm9sbFRvQm90dG9tVGhvdWdodHMiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZVNlbmRNZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRNZXNzYWdlIiwidHJpbSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiZmVlbHMiLCJkZWNpZGVzIiwic2Nyb2xsVG9Cb3R0b20iLCJjb250IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicmVmIiwiaWQiLCJtYXAiLCJpIiwiaW1nIiwic3JjIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwib25LZXlEb3duIiwiZSIsImtleUNvZGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbmRleCIsIkNoYXRBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socialagi":
/*!****************************!*\
  !*** external "socialagi" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socialagi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();