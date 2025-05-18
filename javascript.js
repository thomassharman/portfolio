//create a light mode and dark mode function
//create a responsive navigation bar
//do it all using 

const responsiveMenu = function() {
    const waffle = document.querySelector('.menuwaffle')
    const nav = document.querySelector('.nav')
    const mobileScreenSize = 500
    const loadWaffle =  function() {
        if (window.innerWidth <= mobileScreenSize) {
        console.log('waffle ON function running...', window.innerWidth)
         waffle.classList.remove('menuwaffle')
        nav.classList.remove('nav')
        waffle.classList.add('waffleOn')
        nav.classList.add('navOff')
        }
        else {
        console.log('waffle OFF function running...', window.innerWidth)
        waffle.classList.remove('waffleOn')
        nav.classList.remove('navOff')
        waffle.classList.add('menuwaffle')
        nav.classList.add('nav')
        }

    }
    window.addEventListener('resize', () => {loadWaffle(), console.log('resizing...')})

    return {
        loadWaffle
    }
}
window.onload = responsiveMenu


const styleMode = function () {
console.log('styleMode loaded')

const lightSwitch = 
const darkSwitch = 

}





