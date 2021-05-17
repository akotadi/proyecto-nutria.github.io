import React from 'react';
import { useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from "clsx";
import { MENU_SECTIONS } from './../../../utils/constants/landing';
import useStyles from './LandingHeaderStyle';

const VisitorMobileMenu = ({ onToggleDrawer, isOpen }: { onToggleDrawer: Function, isOpen: boolean }) => {
  const handleToggleDrawer = () => {
    onToggleDrawer();
  };

  const history = useHistory();
  function handleLoginClick() {
    history.push("/login");
  }

  const classes = useStyles();
  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={handleToggleDrawer}
      onOpen={handleToggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <div
        className={classes.mobileNav}
        role="presentation"
        onClick={handleToggleDrawer}
        onKeyDown={handleToggleDrawer}
      >
        <div className={clsx(classes.menu, isOpen && classes.menuOpen)}>
          <List component="nav">
            {MENU_SECTIONS.map((item, index) => (
              <ListItem
                button
                component="a"
                href={`#${item.path}`}
                key={index.toString()}
                style={{ animationDuration: index * 0.15 + 's' }}
              >
                <ListItemText primary={item.name} className={classes.menuList}/>
              </ListItem>
            ))}
            <Divider className={classes.dividerSidebar} />
            <ListItem
              button
              component="a"
              onClick={handleLoginClick}
              style={{ animationDuration: MENU_SECTIONS.length * 0.15 + 's' }}
            >
              <ListItemText primary={"Login"} className={classes.menuList}/>
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

export default VisitorMobileMenu
