# react-juicy-ts-boilerplate

Juicy Boilerplate for TypeScript React Apps.

## Quick start

1. Clone this repo using `git clone https://github.com/ohexus/react-juicy-ts-boilerplate.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Run `yarn setup` to install all packages, (optional) start with a new repo and (optional) rename project.
4. Finally run `yarn start` and navigate to [http://localhost:9000](http://localhost:9000) to see the app running.

## Features

### Easy setup

You can just run `yarn setup`. This command installs all packages. Then you will get a questionnaire with the next questions:

- Do you want to start with a new repository?
- Do you want to change project name?
- Please type new project name, e.g. HoneyProjectVeryLongName:
- Please type new short name, e.g. HoneyProject (if you leave empty string full name will be used):

Internal scripts will do all the work and rename the project for you. All you have to do is add a remote link to your repository (if you like).

### SCSS

Project includes SCSS by default and also supports absolute imports.\
You can import your SCSS modules by typing `@import '@styles/module'`.\

### ESLint

Project includes ESLint configuration for development in React.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### `yarn test`

Launches the test runner.\

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn setup`

This command installs all packages, renames project and (optional) removes .git/ dir and creates a new one.

### `yarn lint`

Lints the app and shows errors and warnings in console.
