import React from 'react';
import TopBar from './../topbar.component/topbar';
import SideBar from './../sidebar.component/sidebar';
import Content from './../content.component/content';
import User from './../user.component/user';

class HomeScreen extends React.Component{
  
  constructor(){
    super();
    this.state = {
      class: 'hidden',
      contentClass: 'normal',
      page: 1,
      loadData: '',
      toggleModal: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(classname){
    this.setState({
            class: classname.class, 
            contentClass: classname.contentClass,
            toggleModal: false
          })
  }

  modal(){
    this.setState({
      toggleModal: true
    })

  }

  pageSet(data){
    this.setState({
      page: data,
      toggleModal: false
    })
  }

  handleBack(data){
    this.setState({
      page: data,
      toggleModal: false
    })
  }

  render(){
    return (
      <div style={{height: '100%'}}>
        <TopBar toggle={this.handleToggle} page={this.state.page} goBack={this.handleBack.bind(this)}/>
        <SideBar class={this.state.class} homeData={this.props.data} toggleUserModal={this.modal.bind(this)}/>
        <Content data={this.props.data} 
          class={this.state.contentClass} setPage={this.pageSet.bind(this)} back={this.state.page}/>
        <User toggleUser={this.state.toggleModal} />
      </div>
    );
  }
}

export default HomeScreen;