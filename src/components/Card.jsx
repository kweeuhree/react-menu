import React from 'react'

const Card = ({currentCard}) => {

    const CardStyle = {
      border: '1px solid gray',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(245, 185, 169, 0.5)'
    }

    const CardNameStyle = {
      margin: '1em',
      fontWeight: '600'
    };

    const CardDescriptionStyle = {
      margin: '1em',
      padding: '2em',
      border: '1px solid gray',
      height: '20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }

  return (
    <div style={CardStyle}>
        <div style={CardNameStyle}>{currentCard.name}</div>
        <div style={CardDescriptionStyle}>{currentCard.description}</div>
    </div>
  )
}

export default Card;