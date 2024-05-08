import React from 'react'

const Header = ({header}) => {

  const HeaderStyle = {
    margin: '1em',
    fontWeight: '600',
    letterSpacing: '0.5vw',
    fontSize: '150%'
  };

  return (
    <div style={HeaderStyle}>{header}</div>
  )
};

export default Header;