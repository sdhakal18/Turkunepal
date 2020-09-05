import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RootState, UserProfileState } from '../types';
import NavCard from '../components/Nav-card';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import routes from '../api/urls';
import PageContainer from '../components/Page-container';
import { Col, Row } from 'reactstrap';
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
      menus: [
        'Turku nepal associations ry',
        'Gallery',
        'Good to know',
        'Events',
      ],
    };
  }
  public render() {
    return (
      <Row>
        <Col>
          <Link to={routes.login}>{'Login'}</Link>
          <NavCard icon={logo} />
          {this.state.menus.map((evt) => (
            <NavCard key={evt} text={evt} />
          ))}
        </Col>
        <Col>
          <PageContainer>Content of page</PageContainer>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userProfile: state.userProfile,
});

export default connect(mapStateToProps)(HomePage);
