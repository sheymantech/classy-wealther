import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecreament = this.handleDecreament.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
  }

  handleDecreament() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncreament() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("jan 21 2027");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecreament}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncreament}>+</button>
      </div>
    );
  }
}
export default Counter;
