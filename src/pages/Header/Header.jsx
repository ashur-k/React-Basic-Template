import React from 'react';
import './header.css';

const Header = () => {

  const component_values = [
    "React component 1 here",
    "React component 2 here",
    "React component 3 here",
    "React component 4 here",
    "React component 5 here",
    "React component 6 here",
    "React component 7 here"
  ]

  return (
    <div className='Rtmplt__header'>
        <div className='Rtmplt__header-row'>
          This is the Flex row and I want it at the top of my flex.
          This is the Flex row and I want it at the top of my flex.
          This is the Flex row and I want it at the top of my flex
        </div>
        <div className='Rtmplt__header-cols'>
          <div className='Rtmplt__header-col-1'>Four</div>
          <div className='Rtmplt__header-col-2'>
            {
              component_values.map(value => (
                <p>{value}</p>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Header