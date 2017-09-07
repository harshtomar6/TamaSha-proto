import React from 'react';
import './movieinfo.css';
import Loader from './../loader.component/loader';
const request = require('request')
const config = require('./../../config')

class MovieInfo extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      data: {},
      styles: {
        banner: {
          background: "",
          backgroundSize: 'cover'
        }
      }
    }

    this.initialize = this.initialize.bind(this)
    this.GenreContents = this.GenreContents.bind(this)
  }

  componentWillMount(){
    var loadURL = this.props.data
    console.log(loadURL)

    request.post({
        url: config.SERVER_URI+'/watch-movie', 
        form: {'movie-url': loadURL}
      }, (err, res, body) => {

        if(!err && res.statusCode === 200){

          this.setState({
            data: JSON.parse(body),
          }, () => {
            this.setState({
              styles: {
                background: "url("+this.state.data.body.content[0]['movie-banner']+")",
                backgroundSize: 'Cover'
              }
            })
            console.log(this.state.data) 
          })
        }
    })
  }

  GenreContents(){
    var genres = this.state.data.body.content[0].meta.genre

    const items = genres.map( genre  => 
      <span className="genre">{genre}</span>
    )

    return <div>{items}</div>
  }

  initialize(){
    if(Object.keys(this.state.data).length){
      return( 
        <div id="bannerWraper">
          <div className="banner" style={this.state.styles}>
            <p className="text-center play-icon">
              <i className="fa fa-play-circle"></i>
            </p>
          </div>
  
          <div className="info">
            <div className="thumb">
              <img src={this.state.data.body.content[0].meta.thumb} className="img-responsive" />
              <div className="movie-title">
                <h2>{this.state.data.body.content[0]['movie-title']}</h2>
                  <this.GenreContents /><br />
                  <p>{this.state.data.body.content[0]['movie-des']}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }else
      return <Loader width="60px" height="60px" left="48%" top="50%"/>
  }

  render(){
    return <this.initialize />
  }

}

export default MovieInfo;