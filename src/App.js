import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "lisbon" };
  }

  fetchWealther() {}
  render() {
    return (
      <div className="app">
        <h1>Classy Wealther </h1>
        <div>
          <input
            type="text"
            placeholder="search from location..."
            onChange={(e) => this.setState({ location: e.target.value })}
            value={this.state.location}
          />
        </div>
        <button>Get wealther</button>
      </div>
    );
  }
}

export default App;
