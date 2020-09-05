import './styles/App.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { RootState, UserProfileState } from './types';

import { fetchUserProfile } from './actions/userProfile';
import LoginPage from './pages/Login-page';
import routes from './api/urls';
import HomePage from './pages/Home-page';
import { Spinner } from 'reactstrap';

interface Actions {
  fetchUserProfile: () => void;
}

interface Props extends RouteComponentProps {
  actions: Actions;
  userProfile: UserProfileState;
}

class App extends Component<Props> {
  public componentDidMount() {
    this.props.actions.fetchUserProfile();
  }
  public render() {
    const { fetchingStatus, user } = this.props.userProfile;
    return (
      <React.Fragment>
        <div>
          <h1>{'Logged in user:' + (user?.name || '')}</h1>
        </div>
        {fetchingStatus === 'success' && (
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <Route component={HomePage} />
          </Switch>
        )}
        {fetchingStatus !== 'success' && <Spinner size="sm" color="primary" />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = (dispatch: any): { actions: Actions } => ({
  actions: {
    fetchUserProfile: () => dispatch(fetchUserProfile()),
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
