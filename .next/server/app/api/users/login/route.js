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
exports.id = "app/api/users/login/route";
exports.ids = ["app/api/users/login/route"];
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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_bhavesh_Desktop_my_next_app_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/login/route.ts */ \"(rsc)/./src/app/api/users/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/login/route\",\n        pathname: \"/api/users/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\bhavesh\\\\Desktop\\\\my-next-app\\\\src\\\\app\\\\api\\\\users\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_bhavesh_Desktop_my_next_app_src_app_api_users_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRmxvZ2luJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNiaGF2ZXNoJTVDRGVza3RvcCU1Q215LW5leHQtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNiaGF2ZXNoJTVDRGVza3RvcCU1Q215LW5leHQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQjtBQUM1RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcYmhhdmVzaFxcXFxEZXNrdG9wXFxcXG15LW5leHQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGJoYXZlc2hcXFxcRGVza3RvcFxcXFxteS1uZXh0LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/users/login/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/users/login/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dbConfig_dbconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/dbConfig/dbconfig */ \"(rsc)/./src/dbConfig/dbconfig.ts\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_dbConfig_dbconfig__WEBPACK_IMPORTED_MODULE_4__.DbConnection)();\n        const reqBody = await request.json();\n        const { email, password } = reqBody;\n        // Check if user exists\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User does not exist\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if password is correct\n        const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n        if (!validPassword) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid password\"\n            }, {\n                status: 400\n            });\n        }\n        // Create token data\n        const tokenData = {\n            id: user._id,\n            username: user.username,\n            email: user.email\n        };\n        // Create token\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign(tokenData, process.env.JWT_SECRET, {\n            expiresIn: \"1d\"\n        });\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Login successful\",\n            success: true\n        });\n        // Set cookie\n        response.cookies.set(\"token\", token, {\n            httpOnly: true,\n            secure: \"development\" === \"production\"\n        });\n        return response;\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9sb2dpbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3RDtBQUNsQjtBQUNOO0FBQ0Q7QUFDb0I7QUFFNUMsZUFBZUssS0FBS0MsT0FBb0I7SUFDN0MsSUFBSTtRQUNGLE1BQU1GLGdFQUFZQTtRQUNsQixNQUFNRyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7UUFDbEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtRQUU1Qix1QkFBdUI7UUFDdkIsTUFBTUksT0FBTyxNQUFNVix5REFBSUEsQ0FBQ1csT0FBTyxDQUFDO1lBQUVIO1FBQU07UUFDeEMsSUFBSSxDQUFDRSxNQUFNO1lBQ1QsT0FBT1gscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBc0IsR0FDL0I7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLCtCQUErQjtRQUMvQixNQUFNQyxnQkFBZ0IsTUFBTWIsdURBQWdCLENBQUNRLFVBQVVDLEtBQUtELFFBQVE7UUFDcEUsSUFBSSxDQUFDSyxlQUFlO1lBQ2xCLE9BQU9mLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVLLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1HLFlBQVk7WUFDaEJDLElBQUlQLEtBQUtRLEdBQUc7WUFDWkMsVUFBVVQsS0FBS1MsUUFBUTtZQUN2QlgsT0FBT0UsS0FBS0YsS0FBSztRQUNuQjtRQUVBLGVBQWU7UUFDZixNQUFNWSxRQUFRbEIsd0RBQVEsQ0FBQ2MsV0FBV00sUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUc7WUFDekRDLFdBQVc7UUFDYjtRQUVBLE1BQU1DLFdBQVczQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ2pDb0IsU0FBUztZQUNUQyxTQUFTO1FBQ1g7UUFFQSxhQUFhO1FBQ2JGLFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVNWLE9BQU87WUFDbkNXLFVBQVU7WUFDVkMsUUFBUVYsa0JBQXlCO1FBQ25DO1FBRUEsT0FBT0k7SUFDVCxFQUFFLE9BQU9kLE9BQVk7UUFDbkIsT0FBT2IscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFSyxPQUFPQSxNQUFNZSxPQUFPO1FBQUMsR0FBRztZQUFFZCxRQUFRO1FBQUk7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxiaGF2ZXNoXFxEZXNrdG9wXFxteS1uZXh0LWFwcFxcc3JjXFxhcHBcXGFwaVxcdXNlcnNcXGxvZ2luXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyTW9kZWxcIjtcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgRGJDb25uZWN0aW9uIH0gZnJvbSBcIkAvZGJDb25maWcvZGJjb25maWdcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IERiQ29ubmVjdGlvbigpO1xyXG4gICAgY29uc3QgcmVxQm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcUJvZHk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHNcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJVc2VyIGRvZXMgbm90IGV4aXN0XCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBwYXNzd29yZCBpcyBjb3JyZWN0XHJcbiAgICBjb25zdCB2YWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XHJcbiAgICBpZiAoIXZhbGlkUGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBwYXNzd29yZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRva2VuIGRhdGFcclxuICAgIGNvbnN0IHRva2VuRGF0YSA9IHtcclxuICAgICAgaWQ6IHVzZXIuX2lkLFxyXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSB0b2tlblxyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih0b2tlbkRhdGEsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhLCB7XHJcbiAgICAgIGV4cGlyZXNJbjogXCIxZFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNvb2tpZVxyXG4gICAgcmVzcG9uc2UuY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbiwge1xyXG4gICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlVzZXIiLCJiY3J5cHRqcyIsImp3dCIsIkRiQ29ubmVjdGlvbiIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxQm9keSIsImpzb24iLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsImZpbmRPbmUiLCJlcnJvciIsInN0YXR1cyIsInZhbGlkUGFzc3dvcmQiLCJjb21wYXJlIiwidG9rZW5EYXRhIiwiaWQiLCJfaWQiLCJ1c2VybmFtZSIsInRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3VjY2VzcyIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSIsInNlY3VyZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/login/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/bcryptjs","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Flogin%2Froute&page=%2Fapi%2Fusers%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cbhavesh%5CDesktop%5Cmy-next-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();