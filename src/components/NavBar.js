import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link_  = links.map((lin, index)=>{
    return <a href= {'#'+lin} key ={index}>{lin} </a>
  })

  return <nav>{/* display an <a> tag for each link here */}{link_}</nav>;
}

export default NavBar;
