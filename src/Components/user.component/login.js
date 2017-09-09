import React from 'react';
import './user.css';

class Login extends React.Component {
  
  constructor(){
    super();

  }

  closeModal(){
    this.props.close()
  }

  handleClick(){
    this.props.navigate(2)
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
            <input type="email" placeholder="Your E-mail please" required/>
            <input type="password" placeholder="Your Secret password" required/>
            <span>Forgot password?</span>
            <input type="submit" value="Log In" action="/" />
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