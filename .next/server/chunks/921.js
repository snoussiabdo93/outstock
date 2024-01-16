"use strict";
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 3921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CZ": () => (/* binding */ add_to_wishlist),
/* harmony export */   "Hm": () => (/* binding */ remove_wishlist_product),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iC": () => (/* binding */ wishlistItems)
/* harmony export */ });
/* unused harmony export wishlistSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    wishlist: []
};
const wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wishlist",
    initialState,
    reducers: {
        add_to_wishlist: (state, { payload  })=>{
            const productIndex = state.wishlist.findIndex((item)=>item.id === payload.id);
            if (productIndex >= 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`${payload.title} already added to wishlist`, {
                    position: "top-left"
                });
            } else {
                state.wishlist.push(payload);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${payload.title} added to wishlist`, {
                    position: "top-left"
                });
            }
        },
        remove_wishlist_product: (state, { payload  })=>{
            state.wishlist = state.wishlist.filter((item)=>item.id !== payload.id);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`remove from your wishlist`, {
                position: "top-left"
            });
        }
    }
});
const { add_to_wishlist , remove_wishlist_product  } = wishlistSlice.actions;
const wishlistItems = (state)=>state.wishlist.wishlist;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;