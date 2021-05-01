import React, { Component } from 'react';
import styles from './styles';
import CounterTitle from './components/CounterTitle';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      [
        <CounterTitle title={`Counter title! ${1+1}`} page={{ a: 1, b: 2 }} />,
        <Counter />
      ]
    )
  }
}

export default App;
