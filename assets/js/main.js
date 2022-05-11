const menuButton = document.querySelector("#menu-button")
const navMenu = document.querySelector("#nav")
var closeMenu

menuButton.addEventListener('click', () => {
    if(!navMenu.classList.contains('flex-nav')){
        navMenu.classList.add('flex-nav')
        closeMenu = document.querySelector("#closeMenu")
        
        closeMenu.addEventListener('click', () => {
            if(navMenu.classList.contains('flex-nav'))
                navMenu.classList.remove('flex-nav')
        })
    }
})
