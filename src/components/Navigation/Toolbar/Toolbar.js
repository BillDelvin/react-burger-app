import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <Navigationitems />
      </nav>
    </header>
  );
};

export default toolbar;
