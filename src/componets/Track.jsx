import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import Food from "./Food";

export function Track() {
  const loggedData = useContext(UserContext);

  const [foodItems, setFoodItems] = useState([]);
  const [food, setFood] = useState(null);

  function searchFood(event) {
    const foodName = event.target.value;
    if (event.target.value.length !== 0) {
      fetch(`http://localhost:8000/foods/${foodName}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + loggedData.loggedUser.token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.message === undefined) {
            setFoodItems(data);
          } else {
            setFoodItems([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else setFoodItems([]);
  }

  return (
    <>
      <section className="container track-container">
        <div className="search">
          <input
            className="search-inp"
            placeholder="search food Item"
            type="search"
            onChange={searchFood}
            name="food"
          />

          {foodItems.length !== 0 ? (
            <div className="search-results">
              {foodItems.map((item) => {
                return (
                  <p className="item" key={item._id} onClick={() => setFood(item)}>
                    {item.name}
                  </p>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>


{
  
food!==null?(
<Food  food={food}/>
)
:null
}







      </section>
    </>
  );
}
