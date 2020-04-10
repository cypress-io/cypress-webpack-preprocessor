This is an example React application clone from [codesandbox.io](https://codesandbox.io/s/oj3qm2zq06) and blog post [How To Build a React To-Do App with React Hooks](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks).

Because the application is using `react-scripts`, we can point our Cypress Webpack preprocessor at the Webpack config included with `react-scripts` module. See [cypress/plugins/index.js](cypress/plugins/index.js) file.

**Tip:** you can use [find-webpack](https://github.com/bahmutov/find-webpack) utility to find the Webpack config options provided by common tools: `react-scripts`, Vue CLI.
