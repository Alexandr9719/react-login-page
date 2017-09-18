import React, {Component} from 'react';
import './LoginFrom.css';
import logo from '../../assets/LoginPage_03.png';
import {Form, Button, FormGroup, FormControl, Col} from 'react-bootstrap/lib/';

class LoginForm extends Component{
  render =()=>{
    return(
      <div className='LoginForm col align-self-center'>
        <div className='LoginForm-header'>
          <img src={logo} className='LoginForm-logo' alt="logo" />
        </div>
        <div className='LoginForm-input col-md-4 col-md-offset-4'>
          <Form horizontal>
            <FormGroup controlId="formValidationNull" validationState={null}>
              <Col sm={2}>
              <FormControl type="text" placeholder='Login'/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
              <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Log in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
