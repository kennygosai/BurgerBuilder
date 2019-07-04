import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngrediant.module.css";
class BurgerIngrediant extends Component {
  render() {
    let ingrediant = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingrediant = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingrediant = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingrediant = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingrediant = <div className={classes.Cheese} />;
        break;
      case "salad":
        ingrediant = <div className={classes.Salad} />;
        break;
      case "bacon":
        ingrediant = <div className={classes.Bacon} />;
        break;
      default:
        ingrediant = null;
    }
    return ingrediant;
  }
}

BurgerIngrediant.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngrediant;
