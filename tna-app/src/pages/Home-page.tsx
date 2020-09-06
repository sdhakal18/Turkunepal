import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { RootState, UserProfileState } from '../types';
import NavCard from '../components/Nav-card';
import { RouteComponentProps } from 'react-router';
import routes from '../api/urls';
import PageContainer from '../components/Page-container';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
const logo = require('../assets/logo.png');

interface Props extends RouteComponentProps {
  userProfile: UserProfileState;
}

interface State {
  menus: string[];
}

class HomePage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menus: ['Turku nepal associations ry', 'Gallery'],
    };
  }

  handleClick = () => {
    this.props.history.push(routes.login);
  };

  public render() {
    const { user } = this.props.userProfile;
    console.log(user);
    return (
      <div className="Home-page">
        <div className="nav-content">
          <NavCard icon={logo} />
          <div>{user?.name}</div>
          {this.state.menus.map((evt) => (
            <NavCard key={evt} text={evt} />
          ))}
        </div>
        <div className="page-content">
          <div className="toolbar">
            <div className="spacer-div" />
            <Button size="lg" className="register-btn">
              Register
            </Button>
            <Button
              size="lg"
              className="sign-in-btn"
              onClick={this.handleClick}
            >
              Sign in
            </Button>
            <InputGroup className="search-input">
              <Input />
              <InputGroupAddon addonType="append">
                <Button>
                  <SearchIcon />
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <MenuIcon fontSize="large" style={{ marginRight: '16px' }} />
          </div>
          <PageContainer>Content of page</PageContainer>
          <div className="footer-content">
            <div>
              Copyright©2020 Turku Nepal Associations ry, Turku, Finland
            </div>
            <div className="follow-us">
              <div>Follow Us</div>
              <div className="icons">
                <FacebookIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userProfile: state.userProfile,
});

export default connect(mapStateToProps)(HomePage);
