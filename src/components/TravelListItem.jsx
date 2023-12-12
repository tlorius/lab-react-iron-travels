import classes from "../styles/travelListItem.module.css";

const TravelListItem = ({ plan, deleteItemHandler }) => {
  return (
    <div className={classes.travelListItem}>
      <div className={classes.containerImage}>
        <img src={plan.image} alt="" />
      </div>
      <div className={classes.containerText}>
        <h3>
          {plan.destination} ({plan.days} Days)
        </h3>
        <p className={classes.italics}>{plan.description}</p>
        <p>
          <span className={classes.bold}>Price:</span> {plan.totalCost}€
        </p>
        <div>
          {plan.totalCost <= 350 && (
            <div className={`${classes.label} ${classes.greenLabel}`}>
              Great Deal
            </div>
          )}
          {plan.totalCost >= 1500 && (
            <div className={`${classes.label} ${classes.blueLabel}`}>
              Premium
            </div>
          )}
          {plan.allInclusive && (
            <div className={`${classes.label} ${classes.blueLabel}`}>
              All-Inclusive
            </div>
          )}
        </div>
        <div>
          <button type="button" onClick={() => deleteItemHandler(plan.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelListItem;
