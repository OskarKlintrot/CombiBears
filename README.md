# CombiBears
An iOS app based on web technology.

## Technology used in this project

 - [React](http://facebook.github.io/react/)
 - [React-Router](https://www.npmjs.com/package/react-router)
 - [Redux](http://redux.js.org/)
 - [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
 - [Redux DevTools](https://www.npmjs.com/package/redux-devtools)
 - [Webpack](http://webpack.github.io/)
 - [ESLint](http://eslint.org/)

## Production vs Development
Redux Devtools is included in the development build but not in the production build.

## Directory Tree
Note that all source code is located under `src/`.
```
+---app
|   +---components
|   |   +---gameView
|   |   +---resultview
|   |   +---root
|   |   +---shared
|   |   \---startView
|   |       +---languages
|   |       \---shared
|   +---redux
|   |   +---actions
|   |   |   \---helpers
|   |   \---store
|   |       +---helpers
|   |       \---reducers
|   \---scripts
\---www
    \---public
        +---css
        \---pics
            +---accessories
            +---bears
            +---favicons
            +---icons
            +---seats
            \---sofas
```

## Installation
After cloning the repository, install the dependencies:
``` Bash
cd <repo folder>
npm install
# If not all where installed, run the following:
npm install --dev # A warning that --dev might show, ignore it
```

Now you can run your local server with live preview:
```
npm start
```
Server is located at http://localhost:3000

To build a static version of the project run:
```
npm run build
```
Note that the build is ignored in the `.gitignore` this because Travis CI will build and deploy to gh-pages from the master repo. And don't forget to empty you previous `build` and `cordova/www` directories before building a new version.

To build `stats.json` to use at http://webpack.github.io/analyse/ run:
```
npm run analyse
```
