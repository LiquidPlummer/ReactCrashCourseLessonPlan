# JSX
JSX stands for JavaScript XML and it allows you to write what looks like HTML inside of your JS code in React. Think of it as a convenient way of conceptualizing what your view will look like without having to leave your JS file. React uses JSX to describe components. For example, the following element can be created using JSX in a regular JS file:
```JS
const myElement =(
  <div>
    <h1>Hello</h1>
    <p>Have a great day!</p>
  </div>
);
```

Here is equivalent JS for a situation where you wanted to create an element without JSX:
```JS
const myElement = React.createElement("div", null, React.createElement("h1", null, "Hello"),React.createElement("p", null, "Have a great day!"));
```


The return block should contain your JSX component code.  
  
After complilation JSX expressions become JS function calls  and evaluate to JS objects.  
  
JSX in React is case sensitive, in that if an element is capitalized it is considered a component and rendered as one. Lowercase elements are rendered as HTML elements.
  
In order to write any JS in your JSX you just need to enclose the JS in { curly braces }. Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.



<BR><BR>See Also:  
[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
