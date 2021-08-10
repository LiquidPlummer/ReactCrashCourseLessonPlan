# React Overview
React is a Javascript library created by Facebook for the purpose of creating fast and responsive user interfaces for web apps.  
Technically React is a library, not a framework. This means React is less opinionated than other technologies, and is very lightweight. React by itself is rarely enough for a polished project, and often is used with other modules like React Router and Redux.  

### Component Based
The basic code unit of a react project is the component. A component is a re-usable portion of UI located in it's own file. Components can be written in one of two ways, as a class or as a function. A component must be made up of exactly one root element, all other elements mst be nested inside the root. To help with this, react has fragments. `<> </>` these empty tags can be used to contain multiple top-level elements.

### Virtual DOM
One of the things that makes React good at rendering pages quickly and reactively is the concept of a virtual DOM. Instead of updating and rendering the entire DOM, a virtual DOM is kept in memory. The virtual DOM is changed by program execution, and React then compares it to a previous snapshot. This is called "diffing". Once the differences are identified, only those differences are updated in the real DOM which gets rendered. This process is called "reconciliation". 
#### VDOM Update:
 1. Virtual DOM updated.
 2. Diff - VDOM compared to previous snapshot to identify which objects need to update.
 3. Changed objects are updated in the real DOM.
 4. Real DOM is rendered, updating what is on screen.
 








<BR><BR>See Also:  
[React Docs - Getting Started guide](https://reactjs.org/docs/getting-started.html)   
[Why React is taking over the front-end](https://jscomplete.com/learn/why-react)  
[React: The Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)
