## Components
The basic code unit of a react project is the component. A component is a re-usable portion of UI located in it's own file. Components should each have a single use, and be separated according to the Single Responsibility Principle.  
  
Components can be written in one of two ways, as a class or as a function. A component must be made up of exactly one root element, all other elements mst be nested inside the root. To help with this, react has fragments. `<> </>` these empty tags can be used to contain multiple top-level elements.

### Class Components
Class components are written as a class that extends React.Component. Each class component has it's own built-in state. A class component must have a render() method which contains a return statement returning the JSX that describes the component. Other logic for the component should be inside the render() method.  
  
You can create the component state in the constructor, and manage state with the this.setState() method.  
```
export class ClassExample extends React.Component {
    render() {
        return (
            <>
              <div className="ClassExample">
                  <h1>This is a test class component!</h1>
              </div>
            </>
          );
    }
}

```


### Function Components
Function components are written as a function. These components don't define their own render() method, they just need to return the JSX describing the component. Other logic should be in the function, outside the return block.  
  
State in functional components can be managed using the state hooks.
```
function FunctionExample() {
    return (
        <>
            <div className="Test">
                <h1>This is a test function component!</h1>
            </div>
        </>
    );
}

export default FunctionExample;
```

## Props
Props are data passed from parent component down to child components.  
```
function Kangaroo(props){
    return (
        <div>
            <h3>I am a kangaroo and I have a child called 'Joey'</h3>
            <Joey secret="property to be passed..."/> {/*The parent Kangaroo Component is passing a prop called 'secret' to its child, Joey*/}
        </div>
    );
}
```  
  
```
function Joey(props){
    return(
        <div>
            {props.secret /*this evaluates to 'property to be passed...'*/}
        </div>
    )
}
```
Props are immutable and one-way. In order to send data back up to parent components, you will want to Lift State. See the Lifting State Up section of React docs. Basically, this is done by passing a function down that has access to the state.




<BR><BR>See Also:  
[Reach Docs - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
[SOLID - Single Responsibility Principle](https://www.baeldung.com/java-single-responsibility-principle)
