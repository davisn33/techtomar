import React from "react";
import "./header.scss";
import logo from "../../Assets/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden,withStyles, List, ListItem, Box,ListItemText,makeStyles,ListItemIcon,SwipeableDrawer ,Menu,MenuItem, Popper, Grow, Paper, Grid } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link,NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import search from "../../Assets/search.png"
import triangle from "../../Assets/triangle.png"
import {getServices} from "../../Services/api"

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#ABD25D",
    '&:hover': {
      backgroundColor: "#ABD25D",
    },
  },
}))(Button);


const useStyles = makeStyles({
  paper: {
    background: "#ABD25D"
  }

});

const Header = () => {
  const classes = useStyles();
  const [open,setOpen]=React.useState(false);
  const [pop,setPop]=React.useState(false);
  const [inside,setInside]=React.useState(false);
  const [open1,setOpen1]=React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [lang,setLang]=React.useState("English");
  const [pos,setPos]=React.useState(0);
  const anchorRef = React.useRef(null);
  const [list,setList]=React.useState([]);


  React.useEffect(()=>{

    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        setPos(1)
      } else {
        setPos(0)
      }
    })

    getServices()
    .then(res=>setList(res.data.data.top))
    .catch(e=>console.log(e))


    let lang = localStorage.getItem("lang")
    if (lang) {
      setLang(lang == 'en' ? "English" : "German")
    }
    else {
      setOpen1(true)
      setLang("English")
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
    <div className="first" style={{background:pos?"#fff":""}}>
      <div className="root">
        <div className="lang">
          <div aria-controls="simple-menu" aria-haspopup="true" style={{color:pos?"black":"white"}} onClick={handleClick}>{lang} <img style={{width:10,height:10}} src={triangle}/></div>
          
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
              <Link to="/">
                <img src={logo} alt="logo" className="image" />
                </Link>
              </div>

              <div className="menu">
                <div><NavLink to="/about" style={{textDecoration:"none",cursor:"pointer",color:pos?"black":"white"}}>COMPANY</NavLink></div>
                <div
                    ref={anchorRef}
                    style={{borderBottomColor:"green",borderBottomWidth:20}}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={()=>setPop(true)}
                    onMouseLeave={()=>setTimeout(()=>!inside&&setPop(false),500)}><NavLink to="/services" style={{textDecoration:"none",cursor:"pointer",color:pos?"black":"white"}}>SERVICES</NavLink></div>
                <div><Link to="/product" style={{textDecoration:"none",cursor:"pointer",color:pos?"black":"white"}}>PRODUCTS</Link></div>
                <div><Link to="/career" style={{textDecoration:"none",cursor:"pointer",color:pos?"black":"white"}}>CAREER</Link></div>
                <div><Link to="/contact" style={{textDecoration:"none",cursor:"pointer",color:pos?"black":"white"}}>CONTACT</Link></div>
                <div><img style={{height:30}} src={search} alt="search"/></div>
              </div>
            </div>
            
          </div>
          
        </Hidden>
        <Hidden lgUp>
          <div>
            <Link to="/">
            <img src={logo} alt="logo" className="image" style={{ height: 50 }} />
            </Link>
            <MenuIcon style={{ color: '#000' }} onClick={() => setOpen(true)} />
          </div>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            classes={{ paper: classes.paper }}
          >
            <List >
              {[{name:'Company',link:"/about"},
               {name:'Services',link:"/services"},
               {name:'Our Work',link:"/product"},
               {name:'Career',link:"/career"},
               {name:'Contact',link:"/contact"},].map((text, index) => (
                <Link to={text.link} style={{textDecoration:"none",color:"white"}} onClick={()=>setOpen(false)}>
                  <ListItem button key={text.name}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{color:"white"}}/> : <MailIcon style={{color:"white"}}/> }</ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItem>
                </Link>
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
      {pop&&<div style={{position:"fixed",top:100,left:0,minHeight:300,width:"100%",background:"white",zIndex:999,display:"flex",flexDirection:"column",alignItems:"center"}} onMouseEnter={()=>setInside(true)} onMouseLeave={()=>{setInside(true);setPop(false)}}>
          <div style={{width:"50%",padding:40,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
            <div>
            {list.slice(0, 5).map(item=>
            <div style={{fontSize:20,margin:5,textAlign:"left",cursor:"pointer"}}>
              <Link to={`/service/${item.id}`} style={{textDecoration:"none",color:"black"}} onClick={()=>{setInside(true);setPop(false)}}>
               ??? {item.title}
               </Link>
            </div>
          )}
            </div>
            <div>
            {list.length?list.slice(5,list.length-1).map(item=>
            <div style={{fontSize:20,margin:5,textAlign:"left",cursor:"pointer"}}>
              <Link to={`/service/${item.id}`} style={{textDecoration:"none",color:"black"}} onClick={()=>{setInside(true);setPop(false)}}>
               ??? {item.title}
               </Link>
            </div>
          ):null}
            </div>
          
          </div>
      </div>}
    </div>
  );
  
};

export default Header;
