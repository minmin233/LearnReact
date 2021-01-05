import React, { Component } from 'react';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <a href="/#">aaa</a>
          <span>bbb</span>
          <a href="/#">ccc</a>
        </NavBar>

        <NavBar2 leftSlot={<a href="/#">aaa</a>}
                 centerSlot={<span>bbb</span>}
                 rightSlot={<a href="/#">ccc</a>}/>
      </div>
    );
  }
}

export default App;