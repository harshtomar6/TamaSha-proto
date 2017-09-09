import React from 'react'
import './user.css'
import Signup from './signup'
import Login from './login'

class User extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      toggle: false,
      page: 1
    }

    this.navigator = this.navigator.bind(this)
  }

  componentWillReceiveProps(nextProps){

    this.setState({
      toggle: nextProps.toggleUser
    })
  }

  navigate(page){
    this.setState({
      page: page
    })
  }

  navigator(){
    if(this.state.page === 1)
      return <Login close={this.closeModal.bind(this)} navigate={this.navigate.bind(this)}/>
    else if(this.state.page === 2)
      return <Signup close={this.closeModal.bind(this)} navigate={this.navigate.bind(this)}/>
  }

  closeModal(){
    this.setState({
      toggle: false
    })
  }

  render(){

    if(this.state.toggle)
      return (
        <this.navigator />
      );
    else
      return (
        <div></div>
      );
  }

}

export default User;