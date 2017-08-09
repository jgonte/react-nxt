import React, {Component} from 'react';
import Header from '../Header/Header';
import Drawer from '../Header/Drawer';

export default class AppLayout extends Component {

  generateTabsContent() {

    return React.Children.map(this.props.children, child => {
      return (<section class="mdl-layout__tab-panel">
          <div class="page-content">{child}</div>
        </section>);
    });
  }

  render() {

    if (this.props.useTabs) {

      return (<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <Header title={this.props.title} links={this.props.links} useTabs={this.props.useTabs} />
          <Drawer links={this.props.links} />
          <main className="mdl-layout__content">
            <div>{this.generateTabsContent()}</div>
          </main>
        </div>);
    }

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title={this.props.title} links={this.props.links} />
        <Drawer links={this.props.links} />
        <main className="mdl-layout__content">
          <div>{this.props.children}</div>
        </main>
      </div>);
  }
}
