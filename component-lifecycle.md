# React.Component Lifecycle Methods
### Mounting
 - [constructor(props)](https://reactjs.org/docs/react-component.html#constructor)  
The constructor is called before the component is mounted and renders for the first time. Typically we **initialize local state** and **bind event handlers** in the constructor. Note: you should always call super(props) before any other statement.  
You should not call setState() in the constructor. The constructor is the only place where you should manually manipulate state, simply set the state, including default values if necessary, in the constructor by assigning the initial state to this.state. Outside the constructor, use setState() instead of manipulating state directly.
 - [render()](https://reactjs.org/docs/react-component.html#render)  
This is the only required method. All class components must have exactly one render() method. This should return a single root element described with JSX.
 - [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)  
This is invoked immediately after a component is inserted into the tree. Initialization that requires DOM nodes should go here. This is also a good place to make requests for data to remote endpoints. You can also begin calling setState() here. This will trigger an extra render, but both should complete before the browser updates the screen.

### Updating
 - [render()](https://reactjs.org/docs/react-component.html#render)
 - [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidupdate)

### Unmounting
 - [componentWillUnmount()](https://reactjs.org/docs/react-component.html#componentwillunmount)  
This is invoked immediately before a component is unmounted and destroyed. This is where you would preform cleanup steps. From here out the component will never be rendered again, so you shouldn't setState() here. 

![React Component Lifecycle Diagram](https://raw.githubusercontent.com/LiquidPlummer/ReactCrashCourseLessonPlan/main/images/component-lifecycle-diagram.PNG)

There are a number of less frequently used lifecycle ethods that can be found in the React docs.

## Function Components and useEffect()
The above lifecycle methods are only for use with class-based component definition. In the pasclass components were more robust, but with React version 16.8 introducing state to function components, there is very little class components can do that function components can't.  
  
Typically constructors are only used in components to initialize local state and bind event handlers. We can use state hooks to initialize state in function components.  
  
To get the functionality of componentDidMount, componentDidUpdate(), and componentDidUnmount() we use the useEffect() hook. Pass a function as a parameter to useEffect, and this function will be invoked after each render. This effect hook functionality covers componentDidMount() and componentDidUpdate(). In order to emulate componentWillUnmount() functionality, have your effect hook funciton return another function. The returned function is used as an optional cleanup step and is analogous to componentWillUnmount().  
  
Keep in mind, the effect cleanup function will be invoked to clean up after every render. There are ways to fine tune this behavior, see "Using the Effect Hook".

<BR><BR>See Also:
  - [React Component Lifecycle Doc](https://reactjs.org/docs/react-component.html)
  - [Interactive React Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
