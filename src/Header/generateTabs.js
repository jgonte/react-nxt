import React from 'react';
import {NavLink} from 'react-router-dom';

export default function generateTabs(links) {
  return links.map((link, index) =>
    <NavLink key={index} className='mdl-layout__tab' activeClassName='is-active' to={link.path}>
      {link.label}
    </NavLink>);
}
