import React from 'react';
import './splash.css';
import Loader from './../loader.component/loader';
const request = require('request');

class Splash extends React.Component{

  constructor(){
    super()
    this.state = {
      "loaded": false,
      "data": []
    }    
  }

  componentDidMount(){
    request.get('http://localhost:3638/api/', (err, res, body) => {
      if(!err && res.statusCode === 200){
        this.setState({"data": JSON.parse(body), "loaded": true}, () => {
          this.props.isLoaded(this.state)
        })
      }
    })    
  }

  render(){
    return(
      <div id="splash">
        <h1 className="text-center">TamaSha</h1>
        <Loader width="60px" height="60px" left="48%" top="50%"/>
      </div>
    );
  }
}

export default Splash;