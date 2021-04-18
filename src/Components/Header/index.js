import React from "react";
import "./header.scss";
import logo from "../../Assets/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden, List, ListItem, Box,ListItemText,makeStyles,ListItemIcon,SwipeableDrawer ,Menu,MenuItem } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const Header = () => {
  const [open,setOpen]=React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang,setLang]=React.useState("English");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (l) => {
    setAnchorEl(null);
    setLang(l);
    localStorage.setItem("lang",l==="English"?"en":"de");
    window.location.reload(false);
  };
  return (
    <div className="first">
      <div className="root">
        <div className="lang">
          <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>{lang} 🢓</div>
          
        </div>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={()=>handleClose("English")}>English</MenuItem>
            <MenuItem onClick={()=>handleClose("German")}>German</MenuItem>
          </Menu>
        <Hidden mdDown>
          <div className="main">
            <div className="header">
              <div>
                <img src={logo} alt="logo" className="image" />
              </div>

              <div className="menu">
                <div><Link style={{textDecoration:"none",color:"white"}}>COMPANY</Link></div>
                <div><Link style={{textDecoration:"none",color:"white"}}>SERVICES</Link></div>
                <div><Link style={{textDecoration:"none",color:"white"}}>OUR WORK</Link></div>
                <div><Link style={{textDecoration:"none",color:"white"}}>CAREER</Link></div>
                <div><Link style={{textDecoration:"none",color:"white"}}>CONTACT</Link></div>
              </div>
            </div>
          </div>
        </Hidden>
        <Hidden lgUp>
          <div>
            <img src={logo} alt="logo" className="image" style={{ height: 50 }} />
            <MenuIcon style={{ color: '#000' }} onClick={() => setOpen(true)} />
          </div>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <List>
              {['Company', 'Services', 'Our Work', 'Career', 'Contact'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Hidden>
      </div>
    </div>
  );
  
};

export default Header;
