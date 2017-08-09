import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppLayout from '../AppLayout/AppLayout';

class App extends Component {

  renderRoutes() {
    return this.props.links.map((link, index) =>
      <Route key={index} exact={link.isExact} path={link.path} component={link.component} />
    );
  }

  render() {

    return (<Router>
        <AppLayout title={this.props.title} links={this.props.links} useTabs={this.props.useTabs}>
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </AppLayout>
      </Router>);
  }
}

export default App;
