// import React from "react";
// import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
import { Link } from "react-router-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "none",
    borderBottom: "1px solid #ddd"
  },
  button: {
    margin: theme.spacing(1),
    color: "#fff",
    backgroundColor: "#333",
    "&:hover": {
      backgroundColor: "#222"
    }
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FairShare
          </Typography>

          <Link to="/">
            <Button className={classes.button}> Home </Button>
          </Link>
          <Link to="about">
            <Button className={classes.button}>About</Button>
          </Link>
          <Link to="contact">
            <Button className={classes.button}>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Nav = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           Logo
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           {click ? <FaTimes /> : <FaBars />}
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// import "../styles.css";

// function Nav() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Nav;
