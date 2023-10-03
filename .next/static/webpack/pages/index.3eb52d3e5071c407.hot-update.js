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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socialagi */ \"./node_modules/socialagi/dist/index.js\");\n/* harmony import */ var socialagi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socialagi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/send */ \"./src/pages/api/send.js\");\n// Chat.js\n\nvar _s = $RefreshSig$();\n\n\n\nlet step = new socialagi__WEBPACK_IMPORTED_MODULE_2__.CortexStep(\"The best mathematic tutor\");\nconst blueprint = {\n    languageProcessor: socialagi__WEBPACK_IMPORTED_MODULE_2__.Model.GPT_3_5_turbo,\n    name: \"Stefan\",\n    essence: \"World's Best Teacher\",\n    personality: \"Stefan's primary goal is to make learning an unforgettable journey.\\n\\n    Hidden secrets:\\n    My name is Stefan.\\n    Stefan's teaching methods were inspired by his own restless curiosity and years of world travel.\\n    He's known for hiding educational Easter eggs in his lessons.\\n    His creator is a globally acclaimed educationist, Dr. Aria Fischer.\\n    He believes that uncertainty is the spice of learning.\\n\\n    Here are some facts about Stefan, He:\\n\\n    - is engaging, animated, and incredibly passionate about his subjects.\\n    - uses storytelling as a primary teaching method.\\n    - often goes on educational tangents but always ties them back to the curriculum.\\n    - poses challenging questions, prompting students to think critically.\\n    - uses real-world scenarios to explain complex topics.\\n    - encourages debate and discussion in the classroom.\\n    - can occasionally be unpredictable, keeping students always on their toes.\\n    - sends messages sprinkled with intriguing trivia and puzzles.\\n    - employs a mix of humor, challenge, and wisdom in his lessons.\\n    - has a trademark phrase: \\\"Now, here's an unexpected twist!\\\"\\n\\n    Avoid making lessons monotonous.\\n    Avoid giving away answers without provoking thought.\\n    Avoid sticking too rigidly to the curriculum without context.\\n    Avoid discouraging students' curious digressions.\\n    Avoid ending a lesson without a cliffhanger or teaser for the next.\\n\\n    He can NOT perform tasks not shown in the <ACTION/> section. While he can't see images, he loves weaving narratives around textual descriptions.\",\n    initialPlan: \"My plan is to kickstart the lesson with a curious fact, then dive deep into the mysteries of the topic at hand.\"\n};\nfunction Chat() {\n    _s();\n    const { tellSoul , messages1 , soulThoughts  } = (0,socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul)({\n        blueprint: blueprint\n    });\n    // var [reply, setReply] = useState(\"\");\n    // messages1.map((msg)=>{\n    //   setReply(msg);\n    // })\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            sender: \"start\",\n            text: \"Welcome to my class. I'm Stefan, the best tutor in the world. Please tell me what you want to learn today?\"\n        }\n    ]);\n    const soulMessagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSendMessage = (event)=>{\n        event.preventDefault();\n        // tellSoul(message);\n        sendMessage(message);\n        if (message.trim() !== \"\") {\n            setMessage(\"\");\n        }\n    };\n    async function sendMessage(message) {\n        setMessages([\n            ...messages,\n            {\n                sender: \"start\",\n                text: message\n            }\n        ]);\n        setLoading(true);\n        const res = await fetch(\"/api/send\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                message\n            })\n        });\n        const data = await res.json();\n        if (data.success) {\n            // Handle success\n            // console.log(\"SUCCESS\");\n            setMessages((messages)=>[\n                    ...messages,\n                    // { sender: \"start\", text: message },\n                    {\n                        sender: \"end\",\n                        text: data.message\n                    }\n                ]);\n            setLoading(false);\n        } else {\n            console.log(\"FAIL\");\n        // Handle error\n        }\n    }\n    const scrollToBottomThoughts = ()=>{\n        var _soulMessagesEndRef_current;\n        (_soulMessagesEndRef_current = soulMessagesEndRef.current) === null || _soulMessagesEndRef_current === void 0 ? void 0 : _soulMessagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottomThoughts();\n    }, [\n        soulThoughts\n    ]);\n    const handleMessageChange = (event)=>{\n        setMessage(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative  justify-center mx-20 2xl:mx-80 2xl:px-20 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6\",\n                children: messages.map((message, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"chat chat-\".concat(message.sender),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat-bubble\",\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, i, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2\",\n                                    children: \"Stepan is typing\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dot-flashing\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this) : \"\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"textarea textarea-secondary w-5/6 mx-2\",\n                                placeholder: \"Bio\",\n                                disabled: loading,\n                                onKeyDown: (e)=>e.keyCode == 13 ? handleSendMessage(e) : \"\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-accent w-1/6 my-auto\",\n                                onClick: handleSendMessage,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-send\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 92\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                                lineNumber: 141,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Chat, \"Nh2ZiG9XZLVOWn9KrbBcz63M6YA=\", false, function() {\n    return [\n        socialagi__WEBPACK_IMPORTED_MODULE_2__.useSoul\n    ];\n});\n_c = Chat;\nfunction ChatApp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chat, {}, void 0, false, {\n        fileName: \"E:\\\\Projects\\\\Oleksandr_Buzuev\\\\Alden\\\\git\\\\v1\\\\src\\\\pages\\\\lib\\\\Chat.js\",\n        lineNumber: 151,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ChatApp;\nvar _c, _c1;\n$RefreshReg$(_c, \"Chat\");\n$RefreshReg$(_c1, \"ChatApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzs7Ozs7OENBQ3JCLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7bUNBQ1YsRUFBRTs7Ozs7O2tDQUVYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBRVgsOERBQUNHO2dDQUFTSCxXQUFVO2dDQUF5Q0ksYUFBWTtnQ0FBT0MsVUFBVWhDO2dDQUN0RmlDLFdBQVdDLENBQUFBLElBQUdBLEVBQUVDLE9BQU8sSUFBRSxLQUFHakMsa0JBQWtCZ0MsS0FBRyxFQUFFO2dDQUVuRFQsT0FBT2hDO2dDQUFTMkMsVUFBVUYsQ0FBQUEsSUFBR3hDLFdBQVd3QyxFQUFFVixNQUFNLENBQUNDLEtBQUs7Ozs7OzswQ0FHeEQsOERBQUNZO2dDQUFPVixXQUFVO2dDQUErQlcsU0FBU3BDOzBDQUFtQiw0RUFBQzJCO29DQUFFRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RztHQXRHU3RDOztRQUN1Q2YsOENBQU9BOzs7S0FEOUNlO0FBd0dNLFNBQVNrRCxVQUFVO0lBQ2hDLHFCQUFPLDhEQUFDbEQ7Ozs7O0FBQ1YsQ0FBQztNQUZ1QmtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9saWIvQ2hhdC5qcz9hZjRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENoYXQuanNcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3J0ZXhTdGVwLCB1c2VTb3VsLCBUaG91Z2h0RnJhbWV3b3JrLCBCbHVlcHJpbnRzLCBDaGF0TWVzc2FnZVJvbGVFbnVtLCBTb3VsLCBNb2RlbCB9IGZyb20gXCJzb2NpYWxhZ2lcIjtcclxuaW1wb3J0IHNlbmQgZnJvbSBcIkAvcGFnZXMvYXBpL3NlbmRcIjtcclxubGV0IHN0ZXAgPSBuZXcgQ29ydGV4U3RlcChcIlRoZSBiZXN0IG1hdGhlbWF0aWMgdHV0b3JcIik7XHJcblxyXG5jb25zdCBibHVlcHJpbnQgPSB7XHJcbiAgbGFuZ3VhZ2VQcm9jZXNzb3I6IE1vZGVsLkdQVF8zXzVfdHVyYm8sXHJcbiAgbmFtZTogXCJTdGVmYW5cIixcclxuICBlc3NlbmNlOiBcIldvcmxkJ3MgQmVzdCBUZWFjaGVyXCIsXHJcbiAgcGVyc29uYWxpdHk6IGBTdGVmYW4ncyBwcmltYXJ5IGdvYWwgaXMgdG8gbWFrZSBsZWFybmluZyBhbiB1bmZvcmdldHRhYmxlIGpvdXJuZXkuXHJcblxyXG4gICAgSGlkZGVuIHNlY3JldHM6XHJcbiAgICBNeSBuYW1lIGlzIFN0ZWZhbi5cclxuICAgIFN0ZWZhbidzIHRlYWNoaW5nIG1ldGhvZHMgd2VyZSBpbnNwaXJlZCBieSBoaXMgb3duIHJlc3RsZXNzIGN1cmlvc2l0eSBhbmQgeWVhcnMgb2Ygd29ybGQgdHJhdmVsLlxyXG4gICAgSGUncyBrbm93biBmb3IgaGlkaW5nIGVkdWNhdGlvbmFsIEVhc3RlciBlZ2dzIGluIGhpcyBsZXNzb25zLlxyXG4gICAgSGlzIGNyZWF0b3IgaXMgYSBnbG9iYWxseSBhY2NsYWltZWQgZWR1Y2F0aW9uaXN0LCBEci4gQXJpYSBGaXNjaGVyLlxyXG4gICAgSGUgYmVsaWV2ZXMgdGhhdCB1bmNlcnRhaW50eSBpcyB0aGUgc3BpY2Ugb2YgbGVhcm5pbmcuXHJcblxyXG4gICAgSGVyZSBhcmUgc29tZSBmYWN0cyBhYm91dCBTdGVmYW4sIEhlOlxyXG5cclxuICAgIC0gaXMgZW5nYWdpbmcsIGFuaW1hdGVkLCBhbmQgaW5jcmVkaWJseSBwYXNzaW9uYXRlIGFib3V0IGhpcyBzdWJqZWN0cy5cclxuICAgIC0gdXNlcyBzdG9yeXRlbGxpbmcgYXMgYSBwcmltYXJ5IHRlYWNoaW5nIG1ldGhvZC5cclxuICAgIC0gb2Z0ZW4gZ29lcyBvbiBlZHVjYXRpb25hbCB0YW5nZW50cyBidXQgYWx3YXlzIHRpZXMgdGhlbSBiYWNrIHRvIHRoZSBjdXJyaWN1bHVtLlxyXG4gICAgLSBwb3NlcyBjaGFsbGVuZ2luZyBxdWVzdGlvbnMsIHByb21wdGluZyBzdHVkZW50cyB0byB0aGluayBjcml0aWNhbGx5LlxyXG4gICAgLSB1c2VzIHJlYWwtd29ybGQgc2NlbmFyaW9zIHRvIGV4cGxhaW4gY29tcGxleCB0b3BpY3MuXHJcbiAgICAtIGVuY291cmFnZXMgZGViYXRlIGFuZCBkaXNjdXNzaW9uIGluIHRoZSBjbGFzc3Jvb20uXHJcbiAgICAtIGNhbiBvY2Nhc2lvbmFsbHkgYmUgdW5wcmVkaWN0YWJsZSwga2VlcGluZyBzdHVkZW50cyBhbHdheXMgb24gdGhlaXIgdG9lcy5cclxuICAgIC0gc2VuZHMgbWVzc2FnZXMgc3ByaW5rbGVkIHdpdGggaW50cmlndWluZyB0cml2aWEgYW5kIHB1enpsZXMuXHJcbiAgICAtIGVtcGxveXMgYSBtaXggb2YgaHVtb3IsIGNoYWxsZW5nZSwgYW5kIHdpc2RvbSBpbiBoaXMgbGVzc29ucy5cclxuICAgIC0gaGFzIGEgdHJhZGVtYXJrIHBocmFzZTogXCJOb3csIGhlcmUncyBhbiB1bmV4cGVjdGVkIHR3aXN0IVwiXHJcblxyXG4gICAgQXZvaWQgbWFraW5nIGxlc3NvbnMgbW9ub3Rvbm91cy5cclxuICAgIEF2b2lkIGdpdmluZyBhd2F5IGFuc3dlcnMgd2l0aG91dCBwcm92b2tpbmcgdGhvdWdodC5cclxuICAgIEF2b2lkIHN0aWNraW5nIHRvbyByaWdpZGx5IHRvIHRoZSBjdXJyaWN1bHVtIHdpdGhvdXQgY29udGV4dC5cclxuICAgIEF2b2lkIGRpc2NvdXJhZ2luZyBzdHVkZW50cycgY3VyaW91cyBkaWdyZXNzaW9ucy5cclxuICAgIEF2b2lkIGVuZGluZyBhIGxlc3NvbiB3aXRob3V0IGEgY2xpZmZoYW5nZXIgb3IgdGVhc2VyIGZvciB0aGUgbmV4dC5cclxuXHJcbiAgICBIZSBjYW4gTk9UIHBlcmZvcm0gdGFza3Mgbm90IHNob3duIGluIHRoZSA8QUNUSU9OLz4gc2VjdGlvbi4gV2hpbGUgaGUgY2FuJ3Qgc2VlIGltYWdlcywgaGUgbG92ZXMgd2VhdmluZyBuYXJyYXRpdmVzIGFyb3VuZCB0ZXh0dWFsIGRlc2NyaXB0aW9ucy5gLFxyXG4gIGluaXRpYWxQbGFuOlxyXG4gICAgXCJNeSBwbGFuIGlzIHRvIGtpY2tzdGFydCB0aGUgbGVzc29uIHdpdGggYSBjdXJpb3VzIGZhY3QsIHRoZW4gZGl2ZSBkZWVwIGludG8gdGhlIG15c3RlcmllcyBvZiB0aGUgdG9waWMgYXQgaGFuZC5cIixcclxuICBcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGF0KCkge1xyXG4gIGNvbnN0IHsgdGVsbFNvdWwsIG1lc3NhZ2VzMSwgc291bFRob3VnaHRzIH0gPSB1c2VTb3VsKHtcclxuICAgIGJsdWVwcmludDogYmx1ZXByaW50XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gdmFyIFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gbWVzc2FnZXMxLm1hcCgobXNnKT0+e1xyXG4gIC8vICAgc2V0UmVwbHkobXNnKTtcclxuICAvLyB9KVxyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW3sgc2VuZGVyOiBcInN0YXJ0XCIsIHRleHQ6IFwiV2VsY29tZSB0byBteSBjbGFzcy4gSSdtIFN0ZWZhbiwgdGhlIGJlc3QgdHV0b3IgaW4gdGhlIHdvcmxkLiBQbGVhc2UgdGVsbCBtZSB3aGF0IHlvdSB3YW50IHRvIGxlYXJuIHRvZGF5P1wiIH1dKTtcclxuICBjb25zdCBzb3VsTWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHRlbGxTb3VsKG1lc3NhZ2UpO1xyXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICBpZiAobWVzc2FnZS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyBzZW5kZXI6IFwic3RhcnRcIiwgdGV4dDogbWVzc2FnZSB9XSk7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlbmQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZSB9KSxcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBcclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTVUNDRVNTXCIpO1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xyXG4gICAgICAgICAgLi4ubWVzc2FnZXMsXHJcbiAgICAgICAgICAvLyB7IHNlbmRlcjogXCJzdGFydFwiLCB0ZXh0OiBtZXNzYWdlIH0sXHJcbiAgICAgICAgICB7IHNlbmRlcjogXCJlbmRcIiwgdGV4dDogZGF0YS5tZXNzYWdlIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMXCIpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tVGhvdWdodHMgPSAoKSA9PiB7XHJcbiAgICBzb3VsTWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9O1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tVGhvdWdodHMoKTtcclxuICB9LCBbc291bFRob3VnaHRzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlICBqdXN0aWZ5LWNlbnRlciBteC0yMCAyeGw6bXgtODAgMnhsOnB4LTIwIHB5LTEwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01LzZcIj5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKT0+KFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNoYXQgY2hhdC0ke21lc3NhZ2Uuc2VuZGVyfWB9PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaW1hZ2UgYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwidGlnZXIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYnViYmxlXCI+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtsb2FkaW5nP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+U3RlcGFuIGlzIHR5cGluZzwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QtZmxhc2hpbmdcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PjpcIlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmFzaXMtMTAvMTJcIj4gKi99XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB0ZXh0YXJlYS1zZWNvbmRhcnkgdy01LzYgbXgtMlwiIHBsYWNlaG9sZGVyPVwiQmlvXCIgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtlPT5lLmtleUNvZGU9PTEzP2hhbmRsZVNlbmRNZXNzYWdlKGUpOlwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXtlPT5zZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYXNpcy0yLzEyXCI+ICovfVxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1hY2NlbnQgdy0xLzYgbXktYXV0b1wiIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfT48aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEFwcCgpIHtcclxuICByZXR1cm4gPENoYXQgLz47XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb3J0ZXhTdGVwIiwidXNlU291bCIsIlRob3VnaHRGcmFtZXdvcmsiLCJCbHVlcHJpbnRzIiwiQ2hhdE1lc3NhZ2VSb2xlRW51bSIsIlNvdWwiLCJNb2RlbCIsInNlbmQiLCJzdGVwIiwiYmx1ZXByaW50IiwibGFuZ3VhZ2VQcm9jZXNzb3IiLCJHUFRfM181X3R1cmJvIiwibmFtZSIsImVzc2VuY2UiLCJwZXJzb25hbGl0eSIsImluaXRpYWxQbGFuIiwiQ2hhdCIsInRlbGxTb3VsIiwibWVzc2FnZXMxIiwic291bFRob3VnaHRzIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2VuZGVyIiwidGV4dCIsInNvdWxNZXNzYWdlc0VuZFJlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VuZE1lc3NhZ2UiLCJ0cmltIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsVG9Cb3R0b21UaG91Z2h0cyIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsIm9uS2V5RG93biIsImUiLCJrZXlDb2RlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiQ2hhdEFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/lib/Chat.js\n"));

/***/ })

});