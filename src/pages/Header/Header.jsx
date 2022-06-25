import React from 'react';
import './header.css';

const Header = () => {
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
            <p>React component here</p>
            <p>React component here</p>
            <p>React component here</p>
            <p>React component here</p>
            <p>React component here</p>
            <p>React component here</p>
            <p>React component here</p>
          </div>
        </div>
        
      
    </div>
  )
}

export default Header