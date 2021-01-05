import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal><h2>弹窗</h2></Modal>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}

export default App;