import React, { Component } from 'react';
import PropType from 'prop-types';

export default class TabControl extends Component {
  constructor(props){
    super(props);

    this.state={
      currentIndex:0
    }
  }

  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state;

    return (
      <div className="tab-control">
        {
          titles.map((item,index) => {
            return (
              <div key={item}
                   className={"tab-item " + (index === currentIndex ? "active" : "")} 
                   onClick={e => {this.itemClick(index)}}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    );
  }

  // 点击哪个，哪个就变成红色
  itemClick(index){
    this.setState({
      currentIndex:index
    })

    // 子组件传递index给父组件
    const {tabClick} = this.props;
    tabClick(index);
  }
}

// 类型验证
TabControl.propType={
  titles:PropType.array.isRequired
}
