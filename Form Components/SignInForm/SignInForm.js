import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './SignInForm.scss';

export class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className='sign-in-form'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            label='Email'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            id='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
