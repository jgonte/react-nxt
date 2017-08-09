import React from 'react';
import {NavLink} from 'react-router-dom';

export default function generateLinks(links) {
  return links.map((link, index) =>
    <NavLink key={index} className="mdl-navigation__link" activeClassName='is-active' to={link.path}>
      {link.label}
    </NavLink>);
}
