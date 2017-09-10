import React from 'react';
import './user.css';
import Loader from './../loader.component/loader';
const config = require('./../../config')
const request = require('request')
const {dialog} = window.require('electron').remote

class Signup extends React.Component {

  constructor(){
    super();

    this.state={
      form: {
        name: '',
        email: '',
        password: ''
      },
      loader:{
        display: 'none'
      },
      res: '',
      err: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  closeModal(){
    this.props.close()
  }

  handleClick(){
    this.props.navigate(1)
  }

  handleChange(e){
    switch(e.target.type){
      case 'text':
        this.setState({
          form:{
            name: e.target.value,
            email: this.state.form.email,
            password: this.state.form.password   
          }
        })
        break;
      case 'email':
        this.setState({
          form:{
            name: this.state.form.name,
            email: e.target.value,
            password: this.state.form.password
          }
        })
        break;
      case 'password':
        this.setState({
          form:{
            name: this.state.form.name,
            email: this.state.form.email,
            password: e.target.value
          }
        })
    }
  }

  handleSubmit(e){
    var name = this.state.form.name
    var email = this.state.form.email
    var password = this.state.form.password

    this.setState({
      loader:{
        display: 'block'
      }
    })

    request.post({
      url: config.USER_URI+'/signup',
      json: {token:'local', body: {name: name, email: email, password: password}}
    }, (err, res, body) => {
      if(!err && res.statusCode === 200){
        console.log(body)
        this.setState({
          loader:{
            display: 'none'
          },
          res:body
        })
      }else{
        console.log(err.message)
        this.setState({
          loader:{
            display: 'none'
          }
        })
        dialog.showErrorBox("Signup Error", err.message);
      }
    })
    
    
    e.preventDefault()
  }

  render(){
    return (
      <div id="user-wraper">
        <div id="modal">
          <div id="modal-header">
            <h4 className="text-center">Create an Account</h4>
            <p onClick={this.closeModal.bind(this)}>&times;</p>
          </div>
          <div id="modal-body">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Your name please" required 
                value={this.state.form.name} onChange={this.handleChange} />
              <input type="email" placeholder="Your E-mail please" required
                value={this.state.form.email} onChange={this.handleChange} />
              <input type="password" placeholder="Your password" required
                value={this.state.form.password} onChange={this.handleChange} />
              <input type="submit" value="Create my Account" action="/" />
              <div id="formLoader" style={this.state.loader}></div>
            </form>
            <p className="text-center">{this.state.res}</p>
            <p className="text-center">Already have an account? <span onClick={this.handleClick.bind(this)}>Log In.</span></p>
            <p className="text-center">
              <button type="button" id="g"><i className="fa fa-google-plus"></i></button>
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default Signup;