"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/lib/Chat.js":
/*!*******************************!*\
  !*** ./src/pages/lib/Chat.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"user\",\n                text: message\n            }\n        ]);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            console.log(\"SUCCESS\");\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        sender: \"user\",\n                        text: message\n                    },\n                    {\n                        sender: \"assistant\",\n                        text: response\n                    }\n                ]);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen  relative flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex container px-4 py-12 justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chat chat-start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat-bubble\",\n                        children: [\n                            \"It's over Anakin, \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 109,\n                                columnNumber: 50\n                            }, this),\n                            \"I have the high ground.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 109,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chat chat-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"chat-bubble\",\n                        children: \"You underestimate my power!\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 112,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                    lineNumber: 111,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n            lineNumber: 107,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"FtCdgrPfCCHIVnH5OO+GmiKRRVc=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 120,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGliL0NoYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxVQUFVOzs7QUFDaUQ7QUFDcUQ7QUFDNUU7QUFDcEMsSUFBSVksT0FBTyxJQUFJUixpREFBVUEsQ0FBQztBQUUxQixNQUFNUyxZQUFZO0lBQ2hCQyxtQkFBbUJKLDBEQUFtQjtJQUN0Q00sTUFBTTtJQUNOQyxTQUFTO0lBQ1RDLGFBQWM7SUE2QmRDLGFBQ0U7QUFFSjtBQUdBLFNBQVNDLE9BQU87O0lBQ2QsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFVBQVMsRUFBRUMsYUFBWSxFQUFFLEdBQUdsQixrREFBT0EsQ0FBQztRQUNwRFEsV0FBV0E7SUFDYjtJQUVBLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLEtBQUs7SUFDTCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3lCLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTTJCLHFCQUFxQnpCLDZDQUFNQSxDQUFDLElBQUk7SUFFdEMsTUFBTTBCLG9CQUFvQixDQUFDQyxRQUFVO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCLHFCQUFxQjtRQUNyQkMsWUFBWVI7UUFDWixJQUFJQSxRQUFRUyxJQUFJLE9BQU8sSUFBSTtZQUN6QlIsV0FBVztRQUNiLENBQUM7SUFDSDtJQUVBLGVBQWVPLFlBQVlSLE9BQU8sRUFBRTtRQUNsQ0csWUFBWTtlQUFJRDtZQUFVO2dCQUFFUSxRQUFRO2dCQUFRQyxNQUFNWDtZQUFRO1NBQUU7UUFDMUQsTUFBTVksTUFBTSxNQUFNQyxNQUFNLGFBQWE7WUFDbkNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFbEI7WUFBUTtRQUNqQztRQUVBLE1BQU1tQixPQUFPLE1BQU1QLElBQUlRLElBQUk7UUFFM0IsSUFBSUQsS0FBS0UsT0FBTyxFQUFFO1lBQ2hCLGlCQUFpQjtZQUNqQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pwQixZQUFZLENBQUNELFdBQWE7dUJBQ3JCQTtvQkFDSDt3QkFBRVEsUUFBUTt3QkFBUUMsTUFBTVg7b0JBQVE7b0JBQ2hDO3dCQUFFVSxRQUFRO3dCQUFhQyxNQUFNYTtvQkFBUztpQkFDdkM7UUFDSCxPQUFPO1lBQ0xGLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGVBQWU7UUFDakIsQ0FBQztJQUNMO0lBQ0EsTUFBTUUseUJBQXlCLElBQU07WUFDbkNyQjtRQUFBQSxDQUFBQSw4QkFBQUEsbUJBQW1Cc0IsT0FBTyxjQUExQnRCLHlDQUFBQSxLQUFBQSxJQUFBQSw0QkFBNEJ1QixlQUFlO1lBQUVDLFVBQVU7UUFBUztJQUNsRTtJQUVBbEQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkK0M7SUFDRixHQUFHO1FBQUMxQjtLQUFhO0lBRWpCLE1BQU04QixzQkFBc0IsQ0FBQ3ZCLFFBQVU7UUFDckNMLFdBQVdLLE1BQU13QixNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNuQiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFjOzBDQUFrQiw4REFBQ0M7Ozs7OzRCQUFJOzs7Ozs7Ozs7Ozs7OEJBRXRELDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0F2RVNyQzs7UUFDdUNmLDhDQUFPQTs7O0tBRDlDZTtBQXlFTSxTQUFTdUMsVUFBVTtJQUNoQyxxQkFBTyw4REFBQ3ZDOzs7OztBQUNWLENBQUM7TUFGdUJ1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGliL0NoYXQuanM/YWY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGF0LmpzXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29ydGV4U3RlcCwgdXNlU291bCwgVGhvdWdodEZyYW1ld29yaywgQmx1ZXByaW50cywgQ2hhdE1lc3NhZ2VSb2xlRW51bSwgU291bCwgTW9kZWwgfSBmcm9tIFwic29jaWFsYWdpXCI7XHJcbmltcG9ydCBzZW5kIGZyb20gXCJAL3BhZ2VzL2FwaS9zZW5kXCI7XHJcbmxldCBzdGVwID0gbmV3IENvcnRleFN0ZXAoXCJUaGUgYmVzdCBtYXRoZW1hdGljIHR1dG9yXCIpO1xyXG5cclxuY29uc3QgYmx1ZXByaW50ID0ge1xyXG4gIGxhbmd1YWdlUHJvY2Vzc29yOiBNb2RlbC5HUFRfM181X3R1cmJvLFxyXG4gIG5hbWU6IFwiU3RlZmFuXCIsXHJcbiAgZXNzZW5jZTogXCJXb3JsZCdzIEJlc3QgVGVhY2hlclwiLFxyXG4gIHBlcnNvbmFsaXR5OiBgU3RlZmFuJ3MgcHJpbWFyeSBnb2FsIGlzIHRvIG1ha2UgbGVhcm5pbmcgYW4gdW5mb3JnZXR0YWJsZSBqb3VybmV5LlxyXG5cclxuICAgIEhpZGRlbiBzZWNyZXRzOlxyXG4gICAgTXkgbmFtZSBpcyBTdGVmYW4uXHJcbiAgICBTdGVmYW4ncyB0ZWFjaGluZyBtZXRob2RzIHdlcmUgaW5zcGlyZWQgYnkgaGlzIG93biByZXN0bGVzcyBjdXJpb3NpdHkgYW5kIHllYXJzIG9mIHdvcmxkIHRyYXZlbC5cclxuICAgIEhlJ3Mga25vd24gZm9yIGhpZGluZyBlZHVjYXRpb25hbCBFYXN0ZXIgZWdncyBpbiBoaXMgbGVzc29ucy5cclxuICAgIEhpcyBjcmVhdG9yIGlzIGEgZ2xvYmFsbHkgYWNjbGFpbWVkIGVkdWNhdGlvbmlzdCwgRHIuIEFyaWEgRmlzY2hlci5cclxuICAgIEhlIGJlbGlldmVzIHRoYXQgdW5jZXJ0YWludHkgaXMgdGhlIHNwaWNlIG9mIGxlYXJuaW5nLlxyXG5cclxuICAgIEhlcmUgYXJlIHNvbWUgZmFjdHMgYWJvdXQgU3RlZmFuLCBIZTpcclxuXHJcbiAgICAtIGlzIGVuZ2FnaW5nLCBhbmltYXRlZCwgYW5kIGluY3JlZGlibHkgcGFzc2lvbmF0ZSBhYm91dCBoaXMgc3ViamVjdHMuXHJcbiAgICAtIHVzZXMgc3Rvcnl0ZWxsaW5nIGFzIGEgcHJpbWFyeSB0ZWFjaGluZyBtZXRob2QuXHJcbiAgICAtIG9mdGVuIGdvZXMgb24gZWR1Y2F0aW9uYWwgdGFuZ2VudHMgYnV0IGFsd2F5cyB0aWVzIHRoZW0gYmFjayB0byB0aGUgY3VycmljdWx1bS5cclxuICAgIC0gcG9zZXMgY2hhbGxlbmdpbmcgcXVlc3Rpb25zLCBwcm9tcHRpbmcgc3R1ZGVudHMgdG8gdGhpbmsgY3JpdGljYWxseS5cclxuICAgIC0gdXNlcyByZWFsLXdvcmxkIHNjZW5hcmlvcyB0byBleHBsYWluIGNvbXBsZXggdG9waWNzLlxyXG4gICAgLSBlbmNvdXJhZ2VzIGRlYmF0ZSBhbmQgZGlzY3Vzc2lvbiBpbiB0aGUgY2xhc3Nyb29tLlxyXG4gICAgLSBjYW4gb2NjYXNpb25hbGx5IGJlIHVucHJlZGljdGFibGUsIGtlZXBpbmcgc3R1ZGVudHMgYWx3YXlzIG9uIHRoZWlyIHRvZXMuXHJcbiAgICAtIHNlbmRzIG1lc3NhZ2VzIHNwcmlua2xlZCB3aXRoIGludHJpZ3VpbmcgdHJpdmlhIGFuZCBwdXp6bGVzLlxyXG4gICAgLSBlbXBsb3lzIGEgbWl4IG9mIGh1bW9yLCBjaGFsbGVuZ2UsIGFuZCB3aXNkb20gaW4gaGlzIGxlc3NvbnMuXHJcbiAgICAtIGhhcyBhIHRyYWRlbWFyayBwaHJhc2U6IFwiTm93LCBoZXJlJ3MgYW4gdW5leHBlY3RlZCB0d2lzdCFcIlxyXG5cclxuICAgIEF2b2lkIG1ha2luZyBsZXNzb25zIG1vbm90b25vdXMuXHJcbiAgICBBdm9pZCBnaXZpbmcgYXdheSBhbnN3ZXJzIHdpdGhvdXQgcHJvdm9raW5nIHRob3VnaHQuXHJcbiAgICBBdm9pZCBzdGlja2luZyB0b28gcmlnaWRseSB0byB0aGUgY3VycmljdWx1bSB3aXRob3V0IGNvbnRleHQuXHJcbiAgICBBdm9pZCBkaXNjb3VyYWdpbmcgc3R1ZGVudHMnIGN1cmlvdXMgZGlncmVzc2lvbnMuXHJcbiAgICBBdm9pZCBlbmRpbmcgYSBsZXNzb24gd2l0aG91dCBhIGNsaWZmaGFuZ2VyIG9yIHRlYXNlciBmb3IgdGhlIG5leHQuXHJcblxyXG4gICAgSGUgY2FuIE5PVCBwZXJmb3JtIHRhc2tzIG5vdCBzaG93biBpbiB0aGUgPEFDVElPTi8+IHNlY3Rpb24uIFdoaWxlIGhlIGNhbid0IHNlZSBpbWFnZXMsIGhlIGxvdmVzIHdlYXZpbmcgbmFycmF0aXZlcyBhcm91bmQgdGV4dHVhbCBkZXNjcmlwdGlvbnMuYCxcclxuICBpbml0aWFsUGxhbjpcclxuICAgIFwiTXkgcGxhbiBpcyB0byBraWNrc3RhcnQgdGhlIGxlc3NvbiB3aXRoIGEgY3VyaW91cyBmYWN0LCB0aGVuIGRpdmUgZGVlcCBpbnRvIHRoZSBteXN0ZXJpZXMgb2YgdGhlIHRvcGljIGF0IGhhbmQuXCIsXHJcbiAgXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hhdCgpIHtcclxuICBjb25zdCB7IHRlbGxTb3VsLCBtZXNzYWdlczEsIHNvdWxUaG91Z2h0cyB9ID0gdXNlU291bCh7XHJcbiAgICBibHVlcHJpbnQ6IGJsdWVwcmludFxyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIHZhciBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIG1lc3NhZ2VzMS5tYXAoKG1zZyk9PntcclxuICAvLyAgIHNldFJlcGx5KG1zZyk7XHJcbiAgLy8gfSlcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBzb3VsTWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gdGVsbFNvdWwobWVzc2FnZSk7XHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKTtcclxuICAgIGlmIChtZXNzYWdlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyBzZW5kZXI6IFwidXNlclwiLCB0ZXh0OiBtZXNzYWdlIH1dKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlIH0pLFxyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIFxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIik7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiBbXHJcbiAgICAgICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgICAgIHsgc2VuZGVyOiBcInVzZXJcIiwgdGV4dDogbWVzc2FnZSB9LFxyXG4gICAgICAgICAgeyBzZW5kZXI6IFwiYXNzaXN0YW50XCIsIHRleHQ6IHJlc3BvbnNlIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMXCIpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tVGhvdWdodHMgPSAoKSA9PiB7XHJcbiAgICBzb3VsTWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tVGhvdWdodHMoKTtcclxuICB9LCBbc291bFRob3VnaHRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gIHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRhaW5lciBweC00IHB5LTEyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjaGF0LXN0YXJ0XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJ1YmJsZVwiPkl0J3Mgb3ZlciBBbmFraW4sIDxici8+SSBoYXZlIHRoZSBoaWdoIGdyb3VuZC48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2hhdCBjaGF0LWVuZFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1idWJibGVcIj5Zb3UgdW5kZXJlc3RpbWF0ZSBteSBwb3dlciE8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEFwcCgpIHtcclxuICByZXR1cm4gPENoYXQgLz47XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb3J0ZXhTdGVwIiwidXNlU291bCIsIlRob3VnaHRGcmFtZXdvcmsiLCJCbHVlcHJpbnRzIiwiQ2hhdE1lc3NhZ2VSb2xlRW51bSIsIlNvdWwiLCJNb2RlbCIsInNlbmQiLCJzdGVwIiwiYmx1ZXByaW50IiwibGFuZ3VhZ2VQcm9jZXNzb3IiLCJHUFRfM181X3R1cmJvIiwibmFtZSIsImVzc2VuY2UiLCJwZXJzb25hbGl0eSIsImluaXRpYWxQbGFuIiwiQ2hhdCIsInRlbGxTb3VsIiwibWVzc2FnZXMxIiwic291bFRob3VnaHRzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic291bE1lc3NhZ2VzRW5kUmVmIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJ0cmltIiwic2VuZGVyIiwidGV4dCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic2Nyb2xsVG9Cb3R0b21UaG91Z2h0cyIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiLCJDaGF0QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});