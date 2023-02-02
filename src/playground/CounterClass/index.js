import React, { createRef } from "react";

class CounterClass extends React.Component {
  // Constructors are not required in class components, but
  // if you use one, you must call super();
  constructor() {
    super();
    this.state = {
      counter: 0,
      lastAction: "none",
    };

    this.inputIncrease = createRef();
    this.inputDecrease = createRef();
    
  }

  // Class components must have a render method.
  render() {
    const handleIncrementClick = () => {
      // const updatedCounter = this.state.counter + 1;
      // this.setState({ counter: updatedCounter });

      // Could also use:
      // const { counter } = this.state;
      // to destructure the object, so we wouldn't need to do this.state.counter each time
      this.setState({
        counter: this.state.counter + 1,
        lastAction: "Increased",
      });
      this.inputIncrease.current.focus();
    };

    const handleDecrementClick = () => {
      this.setState({
        counter: this.state.counter - 1,
        lastAction: "Decreased",
      });
      this.inputDecrease.current.focus();
    };

    // Inside the render, you must return something: JSX:
    return (
      <div>
        Counter: {this.state.counter}
        <div>Last Action: {this.state.lastAction}</div>
        <input
          type="text"
          placeholder="Focus on increase"
          ref={this.inputIncrease}
        />
        <br />
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
        <div>
        <input
          type="text"
          placeholder="Focus on decrease"
          ref={this.inputDecrease}
        />
        </div>
      </div>
    );
  }
}

export default CounterClass;
// The convention is to use DEFAULT (not named) exports for components, since
// each component should have its own file.

/*
    Currently the export statement is at the end of the file, however it could be
    incorporated into the class definition above with:
        export default class CounterClass extends React.Component
    The name "CounterClass" in the above statement is technically not needed
    since it is a default export, but it is recommended to not use anonymous classes.
*/
