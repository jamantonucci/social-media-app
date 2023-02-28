import React, { createRef } from "react";
import countPrimeNumbers from "../prime";

class CounterClass extends React.Component {
  // Constructors are not required in class components, but
  // if you use one, you must call super();
  constructor() {
    super();

    this.state = {
      counter: 0,
      lastAction: "none",
      maxNumber: null,
      primeNumbers: null,
      isCalculating: false,
    };

    this.inputIncrease = createRef();
    this.inputDecrease = createRef();

    console.log("----- Class component constructed -----");
  }

  componentDidMount() {
    // setTimeout(() => {
    //   const maxNumber = 200;
    //   const primeNumbers = countPrimeNumbers(maxNumber);
    //   this.setState({
    //     isCalculating: false,
    //     maxNumber: maxNumber,
    //     primeNumbers: primeNumbers,
    //   });
    // }, 10);

    let count = 0;
    this.timer = setInterval(() => {
      count++;
      console.log('Count: ', count);
     }, 1000);

    console.log("Class component mounted");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Class component destroyed!');
  }

  // Class components must have a render method.
  // It should never update the state.
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

    console.log("Class component rendered");
   

    // Inside the render, you must return something: JSX:
    return (
      <div>
        {this.state.isCalculating && (
          <div>
            <strong>Reticulating Splines...</strong>
          </div>
        )}

        {this.state.primeNumbers !== null && (
          <div>
            There are {this.state.primeNumbers} prime numbers between 2 and{" "}
            {this.state.maxNumber}.
          </div>
        )}
        <div>
          Counter for {this.props.userName}: {this.state.counter}
        </div>

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

  // Do not update state inside componentDidUpdate *UNLESS* it is inside
  // a conditional that won't trigger an infinite loop
  componentDidUpdate(prevProps, prevState) {
    console.log("Class component updated");
    if (this.state.lastAction !== prevState.lastAction) {
      console.log('TODO: Save Data');
      this.setState({ displaySavedMessage: true });
    }
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
