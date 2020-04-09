import React from 'react';
import Link from './Link';
import logo from '../../src/logo.svg';

const Card = props => {
  const data = props.cardList;
  return (
    <div className="card-container col-lg-4 col-sm-6">
      <div className="card">
        <div className="card-title">
          <img className="card-icon" src={logo} alt="icon"/>
          <span>{data.title}</span>
        </div>
        <div className="card-body">            
          <p className="card-text">{data.content}</p>
        </div>
        <div className="card-footer bg-transparent">
          {data.links.map(footerLink => 
            <Link lang={props.lang} key={footerLink.title} link={footerLink} />)
          }
        </div>
      </div>
    </div>   
  )
};

export default Card;