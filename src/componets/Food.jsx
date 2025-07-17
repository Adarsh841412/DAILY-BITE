import { useState } from "react"

export default function Food({food}){

const[grams,setGrams]=useState(100);


    return (



        <div className="food">
          <div className="food-img">
            <img src={food.imageUrl}/>
          </div>
          <h2>{food.name}({food.calories}kcal for {grams}Gm)</h2>

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

          <input className="input" type="number" placeholder="Quantity in gram" />
          <button className="btn">Track This food</button>
        </div>


    )
}