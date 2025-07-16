import{UserContext} from "../contexts/UserContext"
import { useContext } from "react";

export function Track() {

const loggedData=useContext(UserContext);


function searchFood(event) {
  const foodName = event.target.value;

  fetch(`http://localhost:8000/foods/${foodName}`, {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + loggedData.loggedUser.token
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
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
          ></input>





        </div>
      </section>
    </>
  );
}
