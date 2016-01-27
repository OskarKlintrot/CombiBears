# Offline First React And Redux Boilerplate
This is a boilerplate in order to quickly get going with new projects in React and Redux.

## What's Included

 - [React](http://facebook.github.io/react/)
 - [React-Router](https://www.npmjs.com/package/react-router)
 - [Redux](http://redux.js.org/)
 - [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
 - [Redux DevTools](https://www.npmjs.com/package/redux-devtools)
 - [Webpack](http://webpack.github.io/)
 - [ESLint config file](http://eslint.org/)

## Production vs Development
Redux Devtools is Included in the development build but not in the production build.

## Directory Tree
Note that all source code is located under `src/`.
```
+---app
|   +---components
|   |   +---root
|   |   \---shared
|   +---redux
|   |   +---actions
|   |   \---store
|   |       \---reducers
|   \---scripts
\---www
    \---css
```

## Installation
After cloning the repository, install the dependencies:
``` Bash
cd <repo folder>
npm install
# If not all where installed, run the following:
npm install --only:dev
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
