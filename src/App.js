import data from './models/data';
import HomePage from './components/HomePage';
import Card from './components/Card';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  // const [foodItem, setFoodItem] = useState(data.foodItems);
  // const [drinkItem, setDrinkItem] = useState(data.drinkItems);
  // const [dessertItem, setDessertItem] = useState(data.dessertItems);
  const [currentCard, setCurrentCard] = useState('');

  const header = 'React Restaurant';

  const sectionTitles = ['A la Carte', 'Drinks', 'Desserts'];

  const AppStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: "1vw",
    height: '80%'
  }

  const MainStyle = {
    display: 'flex',
    gap: "1vw",
    width: '90%'
  };

  return (
    <div style={AppStyle}>
      <Header header={header}/>

      <main style={MainStyle}>
        <HomePage 
          data={data} 
          sectionTitles={sectionTitles} 
          setCurrentCard={setCurrentCard}
        />

        <Card currentCard={currentCard}/>
      </main>

    </div>
  );
}

export default App;
