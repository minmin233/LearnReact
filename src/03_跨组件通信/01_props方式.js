import React, { Component} from 'react';

export default  class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      nickname:'mm',
      age:18
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.state}></Profile>
      </div>
    );
  }
}

class HeaderProfile extends Component {
  render() {
    const {nickname,age} = this.props;
    return (
      <div>
        <div>{nickname}</div>
        <div>{age}</div>
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <HeaderProfile {...this.props}></HeaderProfile>
      </div>
    );
  }
}



