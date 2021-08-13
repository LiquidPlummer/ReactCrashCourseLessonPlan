import React from 'react';

export class ClassExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            message: props.message
        }
    }

    // state = {
    //     name: this.props.stuff.name,
    //     message: this.props.stuff.message
    // }
    render() {
        const doClick = () => {
            this.setState({
                name: "Jacob",
                message: "This is a new message!!!!!"
            });
        }
        return (
            <>
                <div className="ClassExample">
                    <h1>This is a Class Component</h1>
                    <p>Hello, {this.state.name}. {this.state.message}.</p>
                </div>
                <button style={{width: '100px'}} onClick={doClick}>Click me!</button>
            </>
        );
    }
}