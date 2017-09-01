import React, { Component } from 'react';
import './App.css';
import HomeScreen from './Components/homescreen.component/homescreen';
import Splash from './Components/splash.component/splash';
import MovieInfo from './Components/movieinfo.component/movieinfo';

class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoading: true,
      data: [],
      page: 1
    }

    this.initialize = this.initialize.bind(this);
  }

  isLoaded(options){
    if(options.data.length!==0){
      this.setState({isLoading: true, data: options.data})
    }
  }

  initialize(props){
    if(this.state.data.length !== 0 && this.state.page === 1)
      return <HomeScreen data={this.state.data}/>
    else if(this.state.page === 2)
      return <MovieInfo />
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
