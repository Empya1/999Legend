
let navbarposition = null
let navbartop = null

document.addEventListener("DOMContentLoaded", ()=>{
    var sidenav = document.querySelectorAll(".sidenav")
    
    var sideNavInstance = M.Sidenav.init(sidenav, {})
    
   
})

function closeNav(){
    var sidenav = M.Sidenav.getInstance(document.querySelector(".sidenav"))
    sidenav.close()
}



