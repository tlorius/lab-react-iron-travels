import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/TravelList.jsx";
import { useState } from "react";

function App() {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);

  const deleteItemHandler = (currentId) => {
    setTravelPlan(
      travelPlan.filter((currentPlan) => currentPlan.id !== currentId)
    );
  };
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList plans={travelPlan} deleteItemHandler={deleteItemHandler} />
    </>
  );
}

export default App;
