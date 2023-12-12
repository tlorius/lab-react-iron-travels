import TravelListItem from "./TravelListItem";
import classes from "../styles/travelList.module.css";

const TravelList = ({ plans, deleteItemHandler }) => {
  return (
    <div className={classes.listContainer}>
      {plans.map((plan) => {
        return (
          <TravelListItem
            key={plan.id}
            plan={plan}
            deleteItemHandler={deleteItemHandler}
          ></TravelListItem>
        );
      })}
    </div>
  );
};

export default TravelList;
