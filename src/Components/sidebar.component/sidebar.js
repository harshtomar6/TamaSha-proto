import React from 'react';
import './sidebar.css';
import Spacer from './../spacer.component/spacer';
const request = require('request');
const config = require('./../../config')

class SideBar extends React.Component{

  constructor(){
    super();
    this.state = {
      "class": ['active', '', '', '', '', ''],
      "data":{"home": {}, "movies": {}, "tv": {}, "imdb": {}}
    };
    this.GetElements = this.GetElements.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.getData = this.getData.bind(this);
    this.getCurrentElementsIndex = this.getCurrentElementsIndex.bind(this);
  }

  componentWillMount(){
    this.setState({
      class: this.state.class,
      data: {home: this.props.homeData, movies: this.state.data.movies, tv: {}, imdb: {}}
    })
  }

  updateClass(e){
    var currentIndex = this.getCurrentElementsIndex(e);
    var classes = this.state.class

    for(var i=0;i<classes.length;i++)
      classes[i] = ''

    classes[currentIndex] = 'active';
    this.setState({class: classes})
  }

  getCurrentElementsIndex(e){
    var nodes = Array.prototype.slice.call(e.currentTarget.parentNode.children)
    nodes.splice(5, 1)
    var currentIndex = nodes.indexOf(e.currentTarget)
    return currentIndex
  }

  getData(url, callback){
    request.get(url, (err, res, body) => {
      if(!err && res.statusCode === 200){
        console.log(body);
        callback(body)
      }
    })
  }

  handleClick(e){
    this.updateClass(e);

    var currentIndex = this.getCurrentElementsIndex(e);

    switch(currentIndex){
      case 0:
        if(Object.keys(this.state.data.home).length){
          console.log("home")

        }
        else
          this.getData(config.SERVER_URI, (res) => {
            this.setState({
              class: this.state.class,
              data: {
                home: res,
                movies: this.state.data.movies,
                tv: this.state.data.tv,
                imdb: this.state.data.imdb
              }
            })
          })
        break;
      case 1:
        if(Object.keys(this.state.data.movies).length){
          console.log("movies")
        }
        else
          this.getData(config.SERVER_URI+'/all-movies', (res) => {
            this.setState({
              class: this.state.class,
              data: {
                home: this.state.data.home,
                movies: res,
                tv: this.state.data.tv,
                imdb: this.state.data.imdb
              }
            })
          })
        break;
      case 2:
        if(Object.keys(this.state.data.tv).length){
          console.log("Tv")
        }
        else
          this.getData(config.SERVER_URI+'/tv', (res) => {
            this.setState({
              class: this.state.class,
              data: {
                home: this.state.data.home,
                movies: this.state.data.movies,
                tv: res,
                imdb: this.state.data.imdb
              }
            })
          })
        break;
      case 3:
        if(Object.keys(this.state.data.imdb).length){
          console.log("imdb")
        }
        else
          this.getData(config.SERVER_URI+'/top-imdb', (res) => {
            this.setState({
              class: this.state.class,
              data: {
                home: this.state.data.home,
                movies: this.state.data.movies,
                tv: this.state.data.tv,
                imdb: res
              }
            })
          })
        break;
      case 4:
        console.log("Genre")  
        break;
      case 5:
        this.props.toggleUserModal()
        break;

    }
  }

  GetElements(props){
    const classname = props.st

    if(classname === 'hidden')
      return(
        <ul>
          <li className={this.state.class[0]} title="Home" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-home"></i></a>
          </li>
          <li className={this.state.class[1]} title="All Movies" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-film"></i></a>
          </li>
          <li className={this.state.class[2]} title="TV-Series" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-television"></i></a>
          </li>
          <li className={this.state.class[3]} title="Top IMDB" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-imdb"></i></a>
          </li>
          <li className={this.state.class[4]} title="Genre" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-tags"></i></a>
          </li>
          <Spacer height="250"/>
          <li className={this.state.class[5]} title="User" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-user"></i></a>
          </li>
        </ul>
      );
    else
      return (
        <ul>
          <li className={this.state.class[0]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-home"></i>  Home
          </li>
          <li className={this.state.class[1]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-film"></i>  All Movies
          </li>
          <li className={this.state.class[2]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-television"></i>  TV-Series
          </li>
          <li className={this.state.class[3]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-imdb"></i>  Top IMDB
          </li>
          <li className={this.state.class[4]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-tags"></i>  Genre
          </li>
          <Spacer height="250"/>
          <li className={this.state.class[5]} onClick={this.handleClick.bind(this)}>
            <i className="fa fa-user"></i>  User
          </li> 
        </ul>
      );
  }

  render(){
    return(
      <div className={this.props.class} id="sidebar">
        <this.GetElements st={this.props.class}/>
      </div>
    );
  }

}

export default SideBar;
