import React from 'react';
import './sidebar.css';
const request = require('request')

class ExpandedElements extends React.Component{

  constructor(){
    super()
    
    this.state = {
      class: []
    }

    this.Element = this.Element.bind(this)
    this.updateClass = this.updateClass.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentWillMount(){
    this.setState({class: this.props.classState});
  }

  getData(url){
    request.get(url, (err, res, body) => {
      if(!err && res.statusCode === 200){
        console.log(body);
      }
    })
  }

  handleClick(e){
    this.updateClass(e);

    switch(e.currentTarget.textContent){
      case '  All Movies':
        this.getData('http://localhost:3638/api/all-movies')
        break;
      case '  TV-Series':
        this.getData('http://localhost:3638/api/tv')
        break;
      case '  Top IMDB':
        this.getData('http://localhost:3638/api/top-imdb')
        break;
    }
  }

  updateClass(e){
    var nodes = Array.prototype.slice.call(e.currentTarget.parentNode.children)
    var currentIndex = nodes.indexOf(e.currentTarget)
    var classes = this.state.class

    for(var i=0;i<classes.length;i++)
      classes[i] = ''

    classes[currentIndex] = 'active';
    this.setState({class: classes})
  }

  Element(props){
    return (
      <li className={props.class} onClick={this.handleClick.bind(this)}>
        <i className={props.icon}></i>  {props.name}
        <i className={props.icon2}></i>
      </li>
    );
  }

  render(){
    return (
      <ul>
        <this.Element name="Home" icon="fa fa-home fa-fw" class={this.state.class[0]}/>
        <this.Element name="All Movies" icon="fa fa-film fa-fw" class={this.state.class[1]} />
        <this.Element name="TV-Series" icon="fa fa-television fa-fw" class={this.state.class[2]} />
        <this.Element name="Top IMDB" icon="fa fa-imdb fa-fw" class={this.state.class[3]} />
        <this.Element name="Genre" icon="fa fa-tags fa-fw" icon2="fa fa-caret-down" class={this.state.class[4]} />
      </ul>
    );
  }
}

export default ExpandedElements;