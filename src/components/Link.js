import React from 'react';
/* eslint-disable */

const Link = props => {
  return (
    <a className="card-footer-link" href={`/developer/${props.lang}/api/dummy1/${props.link.link}`}>
      {props.link.title}
      <i className="card-footer-icon fa fa-chevron-right"></i>
    </a>
  )
};

export default Link;