# Error when using vue-i18n-composable

Minimal vue project to reproduce GitHub issue https://github.com/intlify/vue-i18n-composable/issues/21

## Steps to reproduce
1. Install dependencies: `npm ci`
2. Start vue dev server: `npm run serve`
3. Open http://localhost:8080 in a browser

You should now see a blank page. The browser console should contain the following error:
```
Uncaught TypeError: Cannot read properties of undefined (reading 'config')
    at VueI18n._initVM (vue-i18n.common.js?08a3:1355:1)
    at new VueI18n (vue-i18n.common.js?08a3:1294:1)
    at createI18n (index.mjs?6239:6:1)
    at eval (main.ts?e4f2:9:1)
    at ./src/main.ts (app.js:1114:1)
    at __webpack_require__ (app.js:849:30)
    at fn (app.js:151:20)
    at 1 (app.js:1127:18)
    at __webpack_require__ (app.js:849:30)
    at checkDeferredModules (app.js:46:23)
```
