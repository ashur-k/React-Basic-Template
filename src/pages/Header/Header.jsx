import React from 'react';
import './header.css';

import people from '../../assests/people.png';
import ai from '../../assests/ai.png';

const Header = () => {

  const component_values = [
    "React component 1 here respect it",
    "React component 2 here respect it",
    "React component 3 here respect it",
    "React component 4 here respect it",
    "React component 5 here respect it",
    "React component 6 here respect it",
    "React component 7 here respect it"
  ]

  return (
    <div className="gpt3__header section__padding" id="home">
      
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Bussisness management for SMB
        </h1>
        <p>
          Decenteralise and automate your bussisness today
        </p>
        <div>
          <p>
            First 1000 companies gets 1 year service for FREE
          </p>
        </div>
        
        <div className="gpt3__header-content__input">
          
          <input type="tel" placeholder="Enter your phone number"/>
          <button type="button">1000 space left!</button>
        </div>

        <div className="gpt3__header-content__people">
          <p>Release date December 2022</p>
        </div>
      </div>
      

      <div className="gpt3__header-image">
        <div className='comp-start'>
          <h3>
            Do you run a bussisness between 1 to 50 people?
          </h3>
          <p>
            Our solution is for you?
          </p>
        </div>
        
      {
        component_values.map(value => (
          <p className='comp'>{value}</p>
          ))
      }
      </div>        
    </div>
  )
}

export default Header