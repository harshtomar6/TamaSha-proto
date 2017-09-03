import React from 'react';
import './sidebar.css';
const request = require('request');

class SideBar extends React.Component{

  constructor(){
    super();
    this.state = {
      "class": ['active', '', '', '', ''],
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
    }, () => {
      console.log(this.state)
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
          this.getData('http://localhost:3638/api/', (res) => {
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
          this.getData('http://localhost:3638/api/all-movies', (res) => {
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
          this.getData('http://localhost:3638/api/tv', (res) => {
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
          this.getData('http://localhost:3638/api/top-imdb', (res) => {
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
    }
  }

  GetElements(props){
    const classname = props.st

    if(classname === 'hidden')
      return(
        <ul>
          <li className={this.state.class[0]} data-toggle="tooltip" title="Home" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-home"></i></a>
          </li>
          <li className={this.state.class[1]} data-toggle="tooltip" title="All Movies" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-film"></i></a>
          </li>
          <li className={this.state.class[2]} data-toggle="tooltip" title="TV-Series" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-television"></i></a>
          </li>
          <li className={this.state.class[3]} data-toggle="tooltip" title="Top IMDB" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-imdb"></i></a>
          </li>
          <li className={this.state.class[4]} data-toggle="tooltip" title="Genre" onClick={this.handleClick.bind(this)}>
            <a href="#"><i className="fa fa-tags"></i></a>
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
            <i className="fa fa-caret-down"></i>
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
