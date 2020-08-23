"use strict";

/*~~~~~~~~~~~~~~~~~~~~navigation menu */

let corvetteLogo=document.getElementById("corvetteLogo");
corvetteLogo.addEventListener("click",responsiveNav);


function responsiveNav() {
    let navMenu = document.getElementById("navMenuId");
    if (navMenu.className === "navMenu") {
      navMenu.className += " responsive";
    } else {
      navMenu.className = "navMenu";
    }
  }


