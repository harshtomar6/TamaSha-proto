import React from 'react';
import './player.css'
import Loader from './../loader.component/loader';
import videojs from 'video.js';
const request = require('request')
const config = require('./../../config')


class Player extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      data: '',
      loaded: true,
      videoJsOptions : {
        autoplay: true,
        controls: true,
        sources: [{
          src: '/path/to/video.mp4'
        }]
      }
    }

    this.initialize = this.initialize.bind(this)
  }

  componentWillMount(){
    var movieURL = this.props.data
    console.log(movieURL)
    this.setState({
      videoJsOptions: {
        autoplay: true,
        controls: true,
        sources: [{
          src: movieURL,
          type: 'video/mp4'
        }]
      }
    })
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

  componentDidMount(){
    this.player = videojs(this.videoNode, this.props, function onPlayerReady(){
      console.log('onPlayerReady', this)
    })
  }

  componentWillUnmount(){
    //if(this.player)
      //this.player.dispose()
  }

  initialize(){
    if(this.state.loaded){
     //<iframe sandbox="allow-scripts allow-same-origin allow-forms" src={this.props.data} allowFullScreen id="player"></iframe>
     return (
      <div data-vjs-player>
        <video ref={node => this.videoNode = node } className="video-js" data-setup='{"controls": true, "autoplay": true, "preload": "auto"}'>
          <source src={this.props.data} type="video/mp4" />
        </video>
      </div>
     )
    }else
      return <Loader width="60px" height="60px" left="48%" top="50%" />
  }
  
  render(){
    return(
      <this.initialize {...this.state.videoJsOptions}/>
    );
  }
}

export default Player;