import React from 'react'

const MenuList = ({menu, sectionTitle, setCurrentCard}) => {
  const MenuItemStyle = {
    border: '1px solid gray',
    padding: '0.5vh',
    margin: '0.5vh',
    backgroundColor: 'white'
  };

  const MenuItemNameStyle = {
    textAlign: 'center',
    fontWeight: '600'
  };

  const MenuItemDescriptionStyle = {
    margin: '0.2vh'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    letterSpacing: '0.6vw',
    marginTop: '1vh'
  };

  return (
    <div>

      <div style={sectionTitleStyle}>{sectionTitle}</div>

      {menu.map((item) => (
       <div  key={item.id} style={MenuItemStyle} onClick={() => setCurrentCard(item)}>
         <div style={MenuItemNameStyle}>{item.name}</div>
        <div style={MenuItemDescriptionStyle}>{item.description}</div>
        
       </div>
      ))}
      
    </div>
  )
};

export default MenuList;