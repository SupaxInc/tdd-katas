# tdd-katas

## Setup

1. Create a new project folder

2. Create a `Vite.js` project:

   1. `npm create vite@latest`
   2. We will use the vanilla option to just set-up a simple app.
   3. Navigate to the vite project folder
   4. Run `npm install` to install the packages.
   5. `npm run dev` to run the development server

3. Install `jest` in the vite project folder:

   1. `npm install jest`
   2. Allows us to run test files in our project

4. Create test files

   1. To run the code in the test files, we have to execute the jest test runner
   2. To do this, create a new `npm test` script that runs the jest command.
      1. `"test": "jest --watchAll --verbose"`
      2. The script above will watch the code in the background and re-run the test anytime the code is changed.
      3. The verbose flag will add an extra output to the terminal

5. For interviews if it is allowed, it is also smart to install `@types/jest` to the project to give intellisense for matchers in Jest

   1. Install with `npm install --save @types/jest`

   2. Create a `jsconfig.json` file that will have a type acquisition property for Jest

      1. This will allow VS code to autocomplete using intellisense for Jest

         ```javascript
         {
             "typeAcquisition": {
                 "include": [
                     "jest"
                 ]
             }
         }
         ```

   3. **Another way is possibly purchasing `Wallaby.js` that will show if tests are passing directly onto the editor without having to look at the console.**













# ViteJS

## Introduction

- A Javascript build tool that allows us to build and develop front-end web applications.
- At its core it does two things:
  - Serve code locally during development
  - Bundle Javascripts/CSS and other assets for production
- Other build tools such as Webpack that does it similarly.



## How it works

- You are able to create a Vite starter project with a front-end framework
- The project comes with a Vite config file
- You are able to install plugins
  - Including server-side rendering
- Able to serve the development server locally
- Instead of importing a javascript bundle file, it will import the actual source code
- If you are using React, when you change the source code, the state will be preserved
  - This is called HMR, **hot module replacement**
- Running the build will:
  - Generate a Javascript bundle with roll up
  - Uses automatic optimization such as code splitting



## Difference to other build tools

- Simplifies and speeds up the build process
- A while ago, there was no native way to combine Javascript files together in a modular way.
  - Led to tools like Webpack to concactenante multiple files together into a single bundle to the browser
  - The problem is it becomes increasingly slower when more dependencies come along in a larger code base.
- Vite leverages native ES modules in the browser to load your code instantly, no matter **how large the app is**.
  - Uses `rollup` under the hood

