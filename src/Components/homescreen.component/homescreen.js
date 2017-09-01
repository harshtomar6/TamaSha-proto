import React from 'react';
import TopBar from './../topbar.component/topbar';
import SideBar from './../sidebar.component/sidebar';
import Content from './../content.component/content';

class HomeScreen extends React.Component{
  
  constructor(){
    super();
    this.state = {
      class: 'hidden',
      contentClass: 'normal'
    }
  }

  handleToggle(classname){
    this.setState({class: classname.class, contentClass: classname.contentClass})
  }

  render(){
    return (
      <div>
        <TopBar toggle={this.handleToggle.bind(this)}/>
        <SideBar class={this.state.class} homeData={this.props.data}/>
        <Content data={this.props.data} class={this.state.contentClass}/>  
      </div>
    );
  }
}

export default HomeScreen;