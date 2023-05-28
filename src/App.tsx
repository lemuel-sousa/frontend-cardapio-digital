import './App.css';
import { Card } from './components/Card';
import './global.css';
import { FoodData } from './interface/FoodData';

export function App() {

  const data: FoodData[] = [];

  return (

    <div className="">
      <h1 className="">Cardápio</h1>

      <div className="grid">
        {data.map(foodData =>
          <Card
            image={foodData.image}
            title={foodData.title}
            price={foodData.price}
          />
        )}
      </div>
    </div>

  )
}