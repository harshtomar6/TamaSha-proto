import React, { Component } from 'react';
import './App.css';
import HomeScreen from './Components/homescreen.component/homescreen';
import Splash from './Components/splash.component/splash';

class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: [],
    }

    this.initialize = this.initialize.bind(this);
  }

  isLoaded(options){
    if(options.data.length!==0){
      this.setState({isLoading: true, data: options.data})
    }
  }

  initialize(props){
    if(this.state.data.length !== 0)
      return <HomeScreen data={this.state.data} />
    else
      return <Splash isLoaded={this.isLoaded.bind(this)}/>
    
  }

  render() {
    return (
      <this.initialize />
    );
  }
}

export default App;
