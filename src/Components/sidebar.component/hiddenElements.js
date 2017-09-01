import React from 'react';
import './sidebar.css';

class HiddenElements extends React.Component{

  constructor(){
    super()
    this.state = {
      class: []
    }
    this.Element = this.Element.bind(this)
  }

  componentWillMount(){
    this.setState({class: this.props.classState})
  }

  handleClick(e){
    var nodes = Array.prototype.slice.call(e.currentTarget.parentNode.children)
    var currentIndex = nodes.indexOf(e.currentTarget)
    var classes = this.state.class

    for(var i=0;i<classes.length;i++)
      classes[i] = ''

    classes[currentIndex] = 'active';
    this.setState({class: classes})
    this.props.setClassState(this.state.class);
  }

  Element(props){
    return ( 
      <li className={props.class} data-toggle="tooltip" title={props.title} onClick={this.handleClick.bind(this)}>
        <a href="#"><i className={props.icon}></i></a>
      </li>
    );
  }

  render(){
    return (
      <ul>
        <this.Element title="Home" icon="fa fa-home fa-fw" class={this.state.class[0]}/>
        <this.Element title="All Movies" icon="fa fa-film fa-fw" class={this.state.class[1]} />
        <this.Element title="TV-Series" icon="fa fa-television fa-fw" class={this.state.class[2]} />
        <this.Element title="Top IMDB" icon="fa fa-imdb fa-fw" class={this.state.class[3]} />
        <this.Element title="Genre" icon="fa fa-tags fa-fw" class={this.state.class[4]} />
      </ul>
    );
  }
}

export default HiddenElements;