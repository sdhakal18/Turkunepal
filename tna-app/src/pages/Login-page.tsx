import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  LoginCredentials,
  RootState,
  UserProfile,
  UserProfileState,
} from '../types';
import { RouteComponentProps } from 'react-router';
import { loginUser } from '../actions/userProfile';
import { Button, Container, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../api/urls';

interface Actions {
  loginUser: (data: LoginCredentials) => UserProfile;
}

interface Props extends RouteComponentProps {
  actions: Actions;
  userProfile: UserProfileState;
}

class LoginPage extends Component<Props, LoginCredentials> {
  constructor(props: Props) {
    super(props);

    this.state = {
      password: '',
      username: '',
    };
  }
  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  private handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.actions.loginUser(this.state);
    this.props.history.push(routes.home);
  };

  public render() {
    return (
      <Container>
        <Link to={routes.home}>{'Home'}</Link>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            autoCapitalize="none"
            placeholder="Username"
            onChange={this.handleInputChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />
          <Button block>Sign in</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userProfile: state.userProfile,
});
const mapDispatchToProps = (dispatch: any): { actions: Actions } => ({
  actions: {
    loginUser: (data: LoginCredentials) => dispatch(loginUser(data)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
