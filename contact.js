

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

var side_navbar_close=document.getElementById("side-navbar-close")
side_navbar_close.addEventListener("click",function(){
    document.querySelector(".side-navbar").style.marginLeft = "-70%"
})








