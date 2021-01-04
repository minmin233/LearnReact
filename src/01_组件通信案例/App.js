import React, { Component } from 'react';

import TabControl from './TabControl';

class App extends Component {
  constructor(props){
    super(props);

    this.titles = ['新款','精选','流行'];

    this.state = {
      currentTitle : "新款"
    }
  }
  render() {
    const {currentTitle}=this.state;
    return (
      <div>
        {/*父组件传递titles给子组件显示*/}
        <TabControl titles={this.titles}
                    tabClick={index => {this.tabClick(index)}}/>
        {/*子组件有对应的index,子组件把index传递给父组件，父组件根据index决定h2显示什么*/}
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  // 根据点击的index决定显示哪个title
  tabClick(index){
    // console.log(index);
    this.setState({
      currentTitle:this.titles[index]
    })
  }
}

export default App;