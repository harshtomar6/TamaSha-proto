import React from 'react';
import './topbar.css';

class TopBar extends React.Component{

  constructor(){
    super()
    this.state = {
      class: 'hidden',
      contentClass: 'normal'
    }
  }

  toggleSidebar(){    
    if(this.state.class === 'hidden'){
      this.setState({class: 'visible', contentClass: 'shrinked'}, () => {
        this.props.toggle(this.state);
      })
    }
    else{
      this.setState({class: 'hidden', contentClass: 'normal'}, () => {
        this.props.toggle(this.state);
      })
    }
  }

  handleSearch(){
    
  }

  render(){
    return(
      <div id="topbar">
        <a href="#" onClick={this.toggleSidebar.bind(this)}><i className="fa fa-bars"></i></a>
        <h3 className="text-center">TamaSha</h3>
        <a href="#" className="searchIcon" onClick={this.handleSearch.bind(this)}><i className="fa fa-search"></i></a>
      </div>
    );
  }

}

export default TopBar;