import { useEffect, useState } from "react";

export default function Food(props) {
  const [grams, setGrams] = useState(1000);
  const [food, setFood] = useState({});

  console.log(food);

  useEffect(()=>{
    console.log(props.food);
    setFood(props.food);
  },[props.food])

  function calculateMacros(event) {

  
   
    if (event.target.value.length != 0) {

  let copyFood={...food}

    let quantity = Number(event.target.value);

      copyFood.protein = (food.protein * quantity) / 100,
         copyFood.carbohydrates = (food.carbs * quantity) / 100,
        
          copyFood.fat = (food.fat * quantity) / 100,
         copyFood.fiber = (food.fiber * quantity) / 100,
          copyFood.calories = (food.calories * quantity) / 100;


setFood(copyFood)


    
    }
  }

  return (
    <div className="food">
      <div className="food-img">
        <img className="food-image" src={food.imageUrl} />
      </div>
      <h2>
        {food.name}({food.calories}kcal for {grams}Gm)
      </h2>

      <div className="nurtrient">
        <p className="n-title">Protein</p>
        <p className="n-value">{food.protein}g</p>
      </div>

      <div className="nurtrient">
        <p className="n-title">Carbs</p>
        <p className="n-value">{food.carbohydrates}g</p>
      </div>

      <div className="nurtrient">
        <p className="n-title">Fat</p>
        <p className="n-value">{food.fat}g</p>
      </div>

      <div className="nurtrient">
        <p className="n-title">Fibre</p>
        <p className="n-value">{food.fiber}g</p>
      </div>

      <input
        className="inp"
        type="number"
        placeholder="Quantity in gram"
        onChange={calculateMacros}
      />
      <button className="btn">Track This food</button>
    </div>
  );
}
