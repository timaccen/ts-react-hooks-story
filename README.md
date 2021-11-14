# TypeScript with React

## ts-react-hooks-story

Based on the articles by Alex Bespoyasov articles.

[How to Write Your First Unit Test in React + TypeScript App](https://www.newline.co/@bespoyasov/how-to-write-your-first-unit-test-in-react-typescript-app--ca51d0c0)

[How to Write Your First Component Test in React + TypeScript App](https://www.newline.co/@bespoyasov/how-to-write-your-first-component-test-in-react-typescript-app--77f874a7)

[How to Test Your First React Hook Using Testing Library](https://www.newline.co/@bespoyasov/how-to-test-your-first-react-hook-using-testing-library--159fd007)

## Workflow

```txt
yarn start
yarn test
yarn build
yarn storybook
serve -s build
```

## Using Styles Components

Using the article [Using styled-components in TypeScript: A tutorial with examples](https://blog.logrocket.com/using-styled-components-in-typescript-a-tutorial-with-examples/) by Hafsah Emekoma as a guide for this.

yarn add styled-components

yarn add -D @types/styled-components 

yarn add @material-ui/icons @material-ui/core


## App requires a dependency: "babel-loader": "8.1.0"

After installing Storybook, all the other commands are borken.

```txt
% yarn start
yarn run v1.22.11
$ react-scripts start

There might be a problem with the project dependency tree.
It is likely not a bug in Create React App, but something you need to fix locally.

The react-scripts package provided by Create React App requires a dependency:

  "babel-loader": "8.1.0"

Don't try to install it manually: your package manager does it automatically.
However, a different version of babel-loader was detected higher up in the tree:

  /Users/timothy.curchod/repos/tim/react/typescript-with-react/node_modules/babel-loader (version: 8.2.3) 

Manually installing incompatible versions is known to cause hard-to-debug issues.

If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That will permanently disable this message but you might encounter other issues.

To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-loader" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
     This may help because npm has known issues with package hoisting which may get resolved in future versions.

  6. Check if /Users/timothy.curchod/repos/tim/react/typescript-with-react/node_modules/babel-loader is outside your project directory.
     For example, you might have accidentally installed something in your home folder.

  7. Try running npm ls babel-loader in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed babel-loader.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.

P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!
```

Followed the first set of instructions and deleted the lock file and node_modules, removed babel-loader from devDependencies and re-ran yarn.

This did not solve the issue.  Followed the last instructions instead, and added a .env file with the following:

```txt
SKIP_PREFLIGHT_CHECK=true
```

Then the tests were able to run.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
