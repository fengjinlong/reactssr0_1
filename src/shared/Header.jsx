import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/other'>other</Link></li>
      </ul>
    </div>
  )
}
export default Header