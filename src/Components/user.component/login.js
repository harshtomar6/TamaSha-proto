import React from 'react';
import './user.css';
const config = require('./../../config')

class Login extends React.Component {
  
  constructor(){
    super();

    this.state={
      form: {
        email: '',
        password: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  closeModal(){
    this.props.close()
  }

  handleClick(){
    this.props.navigate(2)
  }

  handleChange(e){
    switch(e.target.type){
      case 'email':
        this.setState({
          form: {
            email: e.target.value,
            password: this.state.form.password
          }
        })
        break;
      case 'password':
      this.setState({
        form: {
          email: this.state.form.email,
          password: e.target.value
        }
      })
    }
  }

  handleSubmit(e){

    console.log(this.state.form)

    e.preventDefault()
  }
  
  render(){
    return(
      <div id="user-wraper">
        <div id="modal">
        <div id="modal-header">
            <h4 className="text-center">Log In</h4>
            <p onClick={this.closeModal.bind(this)}>&times;</p>
          </div>
          <div id="modal-body">
            <form onSubmit={this.handleSubmit}>
              <input type="email" placeholder="Your E-mail please" 
                value={this.state.form.email} onChange={this.handleChange} required/>
              <input type="password" placeholder="Your Secret password" 
                value={this.state.form.password} onChange={this.handleChange} required/>
              <span>Forgot password?</span>
              <input type="submit" value="Log In" />
            </form>
            <p className="text-center">Don't have an account? <span onClick={this.handleClick.bind(this)}>Create One Now.</span></p>
            <p className="text-center">
              <button type="button" id="g"><i className="fa fa-google-plus"></i></button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;