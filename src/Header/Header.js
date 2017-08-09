import React, {Component} from 'react';
import generateLinks from './generateLinks';
import generateTabs from './generateTabs';

export default class Header extends Component {

  render() {

    if (this.props.useTabs) {
      return (<header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.title}</span>
          <div className="mdl-layout-spacer"></div>
          <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
            {generateTabs(this.props.links)}
          </div>
        </div>
      </header>);
    }

    return (<header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">{this.props.title}</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          {generateLinks(this.props.links)}
        </nav>
      </div>
    </header>);
  }
}
