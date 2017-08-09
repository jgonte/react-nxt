import React, {Component} from 'react';
import generateLinks from './generateLinks';

export default class Drawer extends Component {

  render() {
    var links = generateLinks(this.props.links);

    return (<div className="mdl-layout__drawer">
        <span className="mdl-layout__title">{this.props.title}</span>
        <nav className="mdl-navigation">
        {links}
        </nav>
      </div>);
  }
}
