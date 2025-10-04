
let navbarposition = null
let navbartop = null

document.addEventListener("DOMContentLoaded", ()=>{
    var sidenav = document.querySelectorAll(".sidenav")
    
    var sideNavInstance = M.Sidenav.init(sidenav, {})
    
    let navbar = document.querySelector(".fixed-bar")
    navbarposition = navbar.style.position;
    navbartop = navbar.style.top
    
   
})

function closeNav(){
    var sidenav = M.Sidenav.getInstance(document.querySelector(".sidenav"))
    sidenav.close()
}

