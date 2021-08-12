# Lifting State
Props are one-way and immutable. They get passed from parent component to child component and can't then be changed by the child. So, how do we pass information back up to parents?  
  
Say we had a parent component that displays the tempreture in both Celcius and Ferenheit. This parent has two child components, each with an input field for the user to enter the tempreture. The app then takes whichever is entered, converts it to the other, and displays both. We want the temp values to go from the children up to the parent. To do so we "Lift State". Each component has it's own state, and we want to allow the children somehow to manipulate the parent state. In order to lift state, we pass a function from the parent to the children that allows them to change the parent state. We will actually pass the exact same function that the parent uses.  
  
We will do these examples as functional components, because functional components have state hooks which make this look simplier for our digestion. For class components you would simply use the function written to change the state. State hooks come with both the field and the setter.  
  
We create the state which we want the child to be able to change:
```
  const[message, setMessage] = useState("This is the defulat message.");
  
  const propsObject = {
        message: message,
        updateMessage: setMessage
    }
```
  
We then pass that props object down as props to the child:
```
  <FunctionExample {...propsObject} />
```
  
And in the child component we use the method passed down to change the parent state:
```
    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateMessage(message);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Change the message:
                    <input type="text" value={message} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
    
```


