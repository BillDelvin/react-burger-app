import React from "react"
import classes from "./Toolbar.css"
import Logo from "../../Logo/Logo"
import Navigationitems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <Navigationitems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  )
}

export default toolbar
