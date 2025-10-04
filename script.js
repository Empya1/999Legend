
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

document.addEventListener("scroll", ()=>{
    var navbar = document.querySelector(".fixed-bar");
    if (navbar.getBoundingClientRect().top <= 0) {
        navbar.style.position = "sticky"
        navbar.style.top = 0
    }
    else{
        navbar.style.position = navbarposition
        navbar.style.top = navbartop
    }
})

