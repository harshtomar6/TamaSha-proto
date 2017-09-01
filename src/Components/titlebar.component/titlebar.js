import React from 'react';
import './titlebar.css';

class TitleBar extends React.Component{

  render(){
    return(
      <header id="titlebar">
        <p>{this.props.name}</p>
      </header>
    );
  }

}

export default TitleBar;