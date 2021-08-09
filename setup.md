# Installation

## Node.js and npm
Download and install [Node.js](https://nodejs.org/en/download/) which comes with npm.

Make sure to include the "Add to PATH" option in installer.
  
In a terminal window use the following commands to test if node and npm are installed:  
`npm -v`   
`node -v`  

## create-react-app
Next we will create a react app which will set up all the boilerplate react stuff. This will seet up a project including preform the init step and installing several react modules, including: react, react-dom, and react-scripts. Navigate to the location where you want to store your app, and type:  
`npx create-react-app "app-name"`


## Add Packages
### react-router-dom
Install with: `npm install react-router-dom`  
Import with: `import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';` Notice router, switch, route, link are all aliases.

<BR><BR>
See Also:  
[GitLab - Intro to NPM](https://gitlab.com/revature_training/nodejs-team/-/blob/master/modules/intro-nodejs/npm.md)   
[React - Getting Started](https://create-react-app.dev/docs/getting-started/)
