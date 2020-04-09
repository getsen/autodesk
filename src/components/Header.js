import React from 'react';

const Header = props => {
  return (    
    <nav className="autodesk-header navbar navbar-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{props.header}</span>      
      </div>
    </nav>
  )
};

export default Header;