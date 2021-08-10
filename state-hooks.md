# Component State
Each component has its own state which it manages. You can also manipulate the component's state. Best practice is to do this indirectly, in one of two ways depending on the type of component (function or class). It is generally considered bad practice to try and mutate state directly. Say, for instance, you add or remove elements from an array stored in the component's state. The array itself will not be seen as changed so the component will not re-render. This update will not be reflected in the view.

### Class Components
Write your own state fields with a constructor, or by declaring a state field. 
```
/* Constructor */
    constructor(props) {
        super(props);
        this.state = { message: props.message }
    }
```
```
/* Declaration */
  state = {
    items: [
      'a', 'b', 'c'
    ],
  };
```
Alter state by using setState:
```
addItem = () => {
    this.setState({
      items: [...this.state.items, { id: ++this.count, value: "new item" }],
    }); /* new item here is arbitrary*/
  };
```
Avoid manipulating the state fields directly, like this: `this.state.items.push({ id: ++this.count, value: "new item" });`

### Function Components
With function components you can write your own state and manipulate it using hooks. To do so, create a const tuple and assign it with the return value from the useState() method. The first object is the field, the second is the update method. By convention these hooks are usually called \[variable, setVariable]. useState takes in a default value and uses this to assign a type.
```
  const [name, setName] = useState("Kyle");
  const [message, setMessage] = useState("Hello!");
```
To alter state via hooks, use the set methods:
```
  setMessage("This is the new message.");
```
Avoid manipulating the state fields directly: `items.push({ id: ++count, value: "new item" });`
