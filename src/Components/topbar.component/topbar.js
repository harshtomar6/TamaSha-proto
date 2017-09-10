import React from 'react';
import './topbar.css';

class TopBar extends React.Component{

  constructor(){
    super()
    this.state = {
      class: 'hidden',
      contentClass: 'normal',
      back:{
        display: 'none'
      },
      bar:{
        left: 0
      },
      backPage: 0
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.page > 1)   
      this.setState({
        back: {
          display: 'block'
        },
        bar:{
          left: '50px'
        },
        backPage: nextProps.page-1
      })
      else
        this.setState({
          back: {
            display: 'none'
          },
          bar:{
            left: 0
          },
          backPage: 1
        })
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

  back(){
    this.props.goBack(this.state.backPage)
  }

  handleSearch(){
    
  }

  render(){
    return(
      <div id="topbar">
        <a href="#" style={this.state.back} onClick={this.back.bind(this)}>
          <i className="fa fa-arrow-circle-left"></i></a>
        <a href="#" style={this.state.bar} onClick={this.toggleSidebar.bind(this)}><i className="fa fa-bars"></i></a>
        <h3 className="text-center">TamaSha</h3>
        <a href="#" className="searchIcon" onClick={this.handleSearch.bind(this)}><i className="fa fa-search"></i></a>
      </div>
    );
  }

}

export default TopBar;