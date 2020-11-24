import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    count : 0
  }
  btnClick = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  render(){
  return <div className={"columns"}>
    <div className={"column"}></div>
    <div className={"column"}><img onClick={this.btnClick} id={"imgDoggo"} src="https://outwardhound.com/furtropolis/wp-content/uploads/2020/03/Doggo-Lingo-Post.jpg" /> <p id={"counter"}>pic clicked : {this.state.count} times</p></div>
    <div className={"column"}></div>
    </div>
    
  }
}

export default App;
