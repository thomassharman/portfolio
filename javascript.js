//create a light mode and dark mode function
//create a responsive navigation bar
//do it all using 

const responsiveFunctions = function() {
    //make menu responsive
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

const styleMode = function () {
console.log('styleMode loaded')

const lightSwitch = document.querySelector('#lightSwitch')
const darkSwitch = document.querySelector('#darkSwitch')
const website = document.querySelector('#website')

let lightmode = true
let darkmode = false

lightSwitch.addEventListener('click', () => {switchMode()})
darkSwitch.addEventListener('click', () => {switchMode()})

const switchMode = function() {
    if (lightmode === true) {
        lightmode = false
        darkmode = true
        darkSwitch.classList.remove('switchbtnOff')
        darkSwitch.classList.add('switchbtnOn')
        lightSwitch.classList.remove('switchbtnOn')
        lightSwitch.classList.add('switchbtnOff')
        console.log('Buttons colours switched. Add website change style to follow...')
    }
    else if (lightmode != true) {
        lightmode = true
        darkmode = false
        darkSwitch.classList.add('switchbtnOff')
        darkSwitch.classList.remove('switchbtnOn')
        lightSwitch.classList.add('switchbtnOn')
        lightSwitch.classList.remove('switchbtnOff')
        console.log('Buttons colours switched. Add website change style to follow...')
    }
}
}
    return {
        loadWaffle: loadWaffle(),
        styleMode: styleMode(),
        switchMode: switchMode()
    }
}
window.onload = responsiveFunctions




