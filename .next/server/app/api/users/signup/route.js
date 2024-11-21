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
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bhavesh_Desktop_my_next_app_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bhavesh\\\\Desktop\\\\my-next-app\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_bhavesh_Desktop_my_next_app_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiaGF2ZXNoJTVDRGVza3RvcCU1Q215LW5leHQtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNiaGF2ZXNoJTVDRGVza3RvcCU1Q215LW5leHQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYmhhdmVzaFxcXFxEZXNrdG9wXFxcXG15LW5leHQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxiaGF2ZXNoXFxcXERlc2t0b3BcXFxcbXktbmV4dC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcc2lnbnVwXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbconfig */ \"(rsc)/./src/dbConfig/dbconfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,_dbConfig_dbconfig__WEBPACK_IMPORTED_MODULE_0__.DbConnection)();\n// POST route (Create a new user inside the DB)\nasync function POST(request) {\n    try {\n        // grab data from body\n        const reqBody = await request.json();\n        // destructure the incoming variables\n        const { username, email, password } = reqBody;\n        // REMOVE IN PRODUCTION\n        console.log(reqBody);\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: 'This user already exists'\n            }, {\n                status: 400\n            });\n        }\n        // hash password\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        // create a new user\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        // save it inside the DB\n        const savedUser = await newUser.save();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: 'User created!',\n            success: true,\n            savedUser\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRWI7QUFFa0I7QUFFeEI7QUFFaENBLGdFQUFZQTtBQUVaLCtDQUErQztBQUN4QyxlQUFlSSxLQUFLQyxPQUFvQjtJQUM5QyxJQUFJO1FBQ0gsc0JBQXNCO1FBQ3RCLE1BQU1DLFVBQVUsTUFBTUQsUUFBUUUsSUFBSTtRQUVsQyxxQ0FBcUM7UUFDckMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO1FBRXRDLHVCQUF1QjtRQUN2QkssUUFBUUMsR0FBRyxDQUFDTjtRQUVaLE1BQU1PLE9BQU8sTUFBTVoseURBQUlBLENBQUNhLE9BQU8sQ0FBQztZQUFFTDtRQUFNO1FBRXhDLElBQUlJLE1BQU07WUFDVCxPQUFPWCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUN2QjtnQkFDQ1EsT0FBTztZQUNSLEdBQ0E7Z0JBQUVDLFFBQVE7WUFBSTtRQUVoQjtRQUVBLGdCQUFnQjtRQUNoQixNQUFNQyxPQUFPLE1BQU1kLHVEQUFnQixDQUFDO1FBQ3BDLE1BQU1nQixpQkFBaUIsTUFBTWhCLG9EQUFhLENBQUNPLFVBQVVPO1FBRXJELG9CQUFvQjtRQUNwQixNQUFNSSxVQUFVLElBQUlwQix5REFBSUEsQ0FBQztZQUN4Qk87WUFDQUM7WUFDQUMsVUFBVVM7UUFDWDtRQUVBLHdCQUF3QjtRQUN4QixNQUFNRyxZQUFZLE1BQU1ELFFBQVFFLElBQUk7UUFFcEMsT0FBT3JCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFDeEJpQixTQUFTO1lBQ1RDLFNBQVM7WUFDVEg7UUFDRDtJQUNELEVBQUUsT0FBT1AsT0FBWTtRQUNwQixPQUFPYixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVRLE9BQU9BLE1BQU1TLE9BQU87UUFBQyxHQUFHO1lBQUVSLFFBQVE7UUFBSTtJQUNsRTtBQUNEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJoYXZlc2hcXERlc2t0b3BcXG15LW5leHQtYXBwXFxzcmNcXGFwcFxcYXBpXFx1c2Vyc1xcc2lnbnVwXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHtEYkNvbm5lY3Rpb259ICBmcm9tIFwiQC9kYkNvbmZpZy9kYmNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvdXNlck1vZGVsJztcclxuXHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuRGJDb25uZWN0aW9uKCk7XHJcblxyXG4vLyBQT1NUIHJvdXRlIChDcmVhdGUgYSBuZXcgdXNlciBpbnNpZGUgdGhlIERCKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG5cdHRyeSB7XHJcblx0XHQvLyBncmFiIGRhdGEgZnJvbSBib2R5XHJcblx0XHRjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG5cdFx0Ly8gZGVzdHJ1Y3R1cmUgdGhlIGluY29taW5nIHZhcmlhYmxlc1xyXG5cdFx0Y29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXFCb2R5O1xyXG5cclxuXHRcdC8vIFJFTU9WRSBJTiBQUk9EVUNUSU9OXHJcblx0XHRjb25zb2xlLmxvZyhyZXFCb2R5KTtcclxuXHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGVycm9yOiAnVGhpcyB1c2VyIGFscmVhZHkgZXhpc3RzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHsgc3RhdHVzOiA0MDAgfVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGhhc2ggcGFzc3dvcmRcclxuXHRcdGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KDEwKTtcclxuXHRcdGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0anMuaGFzaChwYXNzd29yZCwgc2FsdCk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGEgbmV3IHVzZXJcclxuXHRcdGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7XHJcblx0XHRcdHVzZXJuYW1lLFxyXG5cdFx0XHRlbWFpbCxcclxuXHRcdFx0cGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2F2ZSBpdCBpbnNpZGUgdGhlIERCXHJcblx0XHRjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuXHJcblx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiAnVXNlciBjcmVhdGVkIScsXHJcblx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdHNhdmVkVXNlcixcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuXHRcdHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJEYkNvbm5lY3Rpb24iLCJVc2VyIiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0anMiLCJQT1NUIiwicmVxdWVzdCIsInJlcUJvZHkiLCJqc29uIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaW5kT25lIiwiZXJyb3IiLCJzdGF0dXMiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsIm5ld1VzZXIiLCJzYXZlZFVzZXIiLCJzYXZlIiwibWVzc2FnZSIsInN1Y2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbconfig.ts":
/*!**********************************!*\
  !*** ./src/dbConfig/dbconfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DbConnection: () => (/* binding */ DbConnection)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function DbConnection() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on('connected', ()=>{\n            console.log('Great! MongoDb is connected');\n        });\n        connection.on('error', (err)=>{\n            console.log('MongoDB connected ERROR. ' + err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log('Something went wrong! ' + error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJjb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ3JCLElBQUk7UUFDSEQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUN0QyxNQUFNQyxhQUFhTiw0REFBbUI7UUFFdENNLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDYjtRQUVBSCxXQUFXQyxFQUFFLENBQUMsU0FBUyxDQUFDRztZQUN2QkYsUUFBUUMsR0FBRyxDQUFDLDhCQUE4QkM7WUFDMUNQLFFBQVFRLElBQUk7UUFDYjtJQUNELEVBQUUsT0FBT0MsT0FBTztRQUNmSixRQUFRQyxHQUFHLENBQUMsMkJBQTJCRztJQUN4QztBQUNEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJoYXZlc2hcXERlc2t0b3BcXG15LW5leHQtYXBwXFxzcmNcXGRiQ29uZmlnXFxkYmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERiQ29ubmVjdGlvbigpIHtcclxuXHR0cnkge1xyXG5cdFx0bW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKTtcclxuXHRcdGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuXHRcdGNvbm5lY3Rpb24ub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0dyZWF0ISBNb25nb0RiIGlzIGNvbm5lY3RlZCcpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBFUlJPUi4gJyArIGVycik7XHJcblx0XHRcdHByb2Nlc3MuZXhpdCgpO1xyXG5cdFx0fSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZyEgJyArIGVycm9yKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiRGJDb25uZWN0aW9uIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXhpdCIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbconfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.ts":
/*!*********************************!*\
  !*** ./src/models/userModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Schema definition with TypeScript types\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        unique: true,\n        trim: true,\n        minlength: [\n            3,\n            \"Username must be at least 3 characters long\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        trim: true,\n        lowercase: true,\n        match: [\n            /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n            \"Please enter a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        minlength: [\n            6,\n            \"Password must be at least 6 characters long\"\n        ]\n    }\n}, {\n    timestamps: true\n});\n// Index for faster queries\nuserSchema.index({\n    email: 1,\n    username: 1\n});\n// Export the model and return type\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFXdEQsMENBQTBDO0FBQzFDLE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQzNCO0lBQ0VFLFVBQVU7UUFDUkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7UUFDeENDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxXQUFXO1lBQUM7WUFBRztTQUE4QztJQUMvRDtJQUNBQyxPQUFPO1FBQ0xOLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQW9CO1FBQ3JDQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkcsV0FBVztRQUNYQyxPQUFPO1lBQ0w7WUFDQTtTQUNEO0lBQ0g7SUFDQUMsVUFBVTtRQUNSVCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q0csV0FBVztZQUFDO1lBQUc7U0FBOEM7SUFDL0Q7QUFDRixHQUNBO0lBQ0VLLFlBQVk7QUFDZDtBQUdGLDJCQUEyQjtBQUMzQlosV0FBV2EsS0FBSyxDQUFDO0lBQUVMLE9BQU87SUFBR1AsVUFBVTtBQUFFO0FBRXpDLG1DQUFtQztBQUNuQyxNQUFNYSxPQUFPaEIsd0RBQWUsQ0FBQ2dCLElBQUksSUFBSWhCLHFEQUFjLENBQVEsUUFBUUU7QUFFbkUsaUVBQWVjLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmhhdmVzaFxcRGVza3RvcFxcbXktbmV4dC1hcHBcXHNyY1xcbW9kZWxzXFx1c2VyTW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50LCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbi8vIEludGVyZmFjZSBmb3IgdGhlIFVzZXIgZG9jdW1lbnRcclxuZXhwb3J0IGludGVyZmFjZSBJVXNlciBleHRlbmRzIERvY3VtZW50IHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgdXBkYXRlZEF0OiBEYXRlO1xyXG59XHJcblxyXG4vLyBTY2hlbWEgZGVmaW5pdGlvbiB3aXRoIFR5cGVTY3JpcHQgdHlwZXNcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWE8SVVzZXI+KFxyXG4gIHtcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJdLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIHRyaW06IHRydWUsXHJcbiAgICAgIG1pbmxlbmd0aDogWzMsIFwiVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ1wiXSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJFbWFpbCBpcyByZXF1aXJlZFwiXSxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICB0cmltOiB0cnVlLFxyXG4gICAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICAgIG1hdGNoOiBbXHJcbiAgICAgICAgL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8sXHJcbiAgICAgICAgXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXHJcbiAgICAgIG1pbmxlbmd0aDogWzYsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLCAvLyBBdXRvbWF0aWNhbGx5IGFkZCBjcmVhdGVkQXQgYW5kIHVwZGF0ZWRBdCBmaWVsZHNcclxuICB9XHJcbik7XHJcblxyXG4vLyBJbmRleCBmb3IgZmFzdGVyIHF1ZXJpZXNcclxudXNlclNjaGVtYS5pbmRleCh7IGVtYWlsOiAxLCB1c2VybmFtZTogMSB9KTtcclxuXHJcbi8vIEV4cG9ydCB0aGUgbW9kZWwgYW5kIHJldHVybiB0eXBlXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbDxJVXNlcj4oXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlclNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwidHJpbSIsIm1pbmxlbmd0aCIsImVtYWlsIiwibG93ZXJjYXNlIiwibWF0Y2giLCJwYXNzd29yZCIsInRpbWVzdGFtcHMiLCJpbmRleCIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();