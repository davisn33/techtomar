import React from "react";
import "./header.scss";
import logo from "../../Assets/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden,withStyles, List, ListItem, Box,ListItemText,makeStyles,ListItemIcon,SwipeableDrawer ,Menu,MenuItem } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#ABD25D",
    '&:hover': {
      backgroundColor: "#ABD25D",
    },
  },
}))(Button);




const Header = () => {
  const [open,setOpen]=React.useState(false);
  const [open1,setOpen1]=React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang,setLang]=React.useState("English");

  React.useEffect(()=>{
    let lang=localStorage.getItem("lang")
    if(lang){
      setLang(lang=='en'?"English":"German")
    }
    else{
      setOpen1(true)
      setLang("en")
    }
  },[])
  

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
      <Dialog
        open={open1}
        onClose={()=>{}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>setOpen1(false)} color="disabled">
            Cancel
        </Button>
        <Button onClick={()=>setOpen1(false)} color="primary">
          Read More 
        </Button>
        <ColorButton onClick={()=>setOpen1(false)} variant="contained" color="primary" autoFocus>
          Agree
        </ColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
  
};

export default Header;
