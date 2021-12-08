import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  handleUnmount = () => {
    unmountComponentAtNode(document.getElementById('root'));
  };
  componentWillUnmount() {
    console.log('Component unmounted');
  }
  componentDidUpdate() {
    console.log('Component updated');
  }
  componentDidMount() {
    console.log('Component rendered');
  }
  render() {
    console.log('I am rendering');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.handleUnmount}>Unmount</button>
      </div>
    );
  }
}

export default App;
