import React from 'react';
import './player.css'
import Loader from './../loader.component/loader';
const request = require('request')
const config = require('./../../config')

class Player extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      data: '',
      loaded: true
    }

    this.initialize = this.initialize.bind(this)
  }

  componentWillMount(){
    var movieURL = this.props.data

    /*request.post({
      url: config.SERVER_URI+'/play-movie',
      form: {'movie-url': movieURL}
    }, (err, res, body) => {
      if(!err && res.statusCode === 200){
        this.setState({
          data: 'https:'+JSON.parse(body).data
        }, () => {
          this.setState({
            loaded: true
          })
        })
      }
    })*/
  }

  initialize(){
    if(this.state.loaded){
     //<iframe sandbox="allow-scripts allow-same-origin allow-forms" src={this.props.data} allowFullScreen id="player"></iframe>
     return <video src={this.props.data} controls></video>
    }else
      return <Loader width="60px" height="60px" left="48%" top="50%" />
  }
  
  render(){
    return(
      <this.initialize />
    );
  }
}

export default Player;