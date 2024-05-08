import React from 'react';
import MenuList from './MenuList';

const HomePage = ({data, sectionTitles, setCurrentCard}) => {

    const HomePageStyle = {
      border: '1px solid gray',
        padding: '1em',
        width: '50%',
        overflow: 'auto',
        backgroundColor: 'rgb(245, 185, 169, 0.5)'
    }

  return (
    <div style={HomePageStyle}>
        <div className='foodMenu'>
            <MenuList menu={data.foodItems} sectionTitle={sectionTitles[0]} setCurrentCard={setCurrentCard}/>
        </div>

        <div className='drinkMenu'>
        <MenuList menu={data.drinkItems} sectionTitle={sectionTitles[1]} setCurrentCard={setCurrentCard}/>
        </div>

        <div className='dessertMenu'>
        <MenuList menu={data.dessertItems} sectionTitle={sectionTitles[2]} setCurrentCard={setCurrentCard}/>
        </div>

    </div>
  )
}

export default HomePage;