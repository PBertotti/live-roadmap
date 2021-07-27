//---------------------------
//File: Menu.js
//Author: Paulo Bertotti
//Date: 27/07/2021
//Brief: Live roadmap menu component
//---------------------------

//---------------------------
import { Drawer, makeStyles, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { roadmapLogo } from "../../assets";
//---------------------------

const useStyles = makeStyles(theme => ({
  menu: {
    width: "240px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  menuPaper: {
    width: "240px",
  },
  logo: {
    width: "200px",
    marginLeft: "15px",
    marginTop: "15px",
  },
  content: {
    marginLeft: "240px",
  },
  selectedItem: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    width: "200px",
    height: "40px",
    marginLeft: "15px",
    justifyContent: "start",
    marginTop: "15px",
    color: theme.palette.secondary.main,
  },
  unselectedItem: {
    display: "flex",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "4px",
    width: "200px",
    height: "40px",
    marginLeft: "15px",
    justifyContent: "start",
    marginTop: "15px",
    color: "#676767",
  },
}));

//---------------------------
const Menu = props => {
  // Define hooks;
  const classes = useStyles();
  const history = useHistory();

  // Handle menu selection;
  const handleMenuSelection = path => {
    history.push(path);
  };

  // Handle component rendering;
  return (
    <div>
      <Drawer
        anchor="left"
        variant="persistent"
        open={true}
        className={classes.menu}
        classes={{
          paper: classes.menuPaper,
        }}
      >
        <img
          src={roadmapLogo}
          className={classes.logo}
          alt="Roadmap logotype"
        />

        {props.routes &&
          props.routes.map((route, index) => (
            <Button
              key={index}
              className={
                route.path === window.location.pathname
                  ? classes.selectedItem
                  : classes.unselectedItem
              }
              onClick={() => handleMenuSelection(route.path)}
            >
              <route.icon />
              <Typography
                style={{
                  marginLeft: "7px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {route.title}
              </Typography>
            </Button>
          ))}
      </Drawer>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
//---------------------------

//---------------------------
export default Menu;
//---------------------------
