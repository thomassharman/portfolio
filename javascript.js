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
        website.classList.remove('light-mode')
        website.classList.add('dark-mode')
    }
    else if (lightmode != true) {
        lightmode = true
        darkmode = false
        darkSwitch.classList.add('switchbtnOff')
        darkSwitch.classList.remove('switchbtnOn')
        lightSwitch.classList.add('switchbtnOn')
        lightSwitch.classList.remove('switchbtnOff')
        console.log('Buttons colours switched. Add website change style to follow...')
        website.classList.remove('dark-mode')
        website.classList.add('light-mode')
    }
}
}
const waffleFunction = function() {
//waffle functions
const waffleMenu = document.querySelector('.menuwaffle')
const navItems = document.querySelectorAll('.nav-item') //returns array of menu items
const mobileItemsContainer = document.createElement('div')
const mobileMenu = document.querySelector('.mobileMenu') //where we will appendChild the container containing each menu item
let mobileMenuStatus = false //the mobile menu is not showing by default

waffleMenu.addEventListener('click', () => {expandMenu(navItems), mobileMenuStatus = !mobileMenuStatus //ensures we switch to the opposite status every time clicked//
    })

const expandMenu = function(items) {
console.log('waffle menu clicked')
items.forEach(item => 
    { if (mobileMenuStatus === false) {
            const mobileNavItemText = item.textContent
            console.log(mobileNavItemText) //returns each item in the console successfully
            const mobileNavItem = document.createElement('button')
            mobileNavItem.textContent = mobileNavItemText
            mobileItemsContainer.append(mobileNavItem)
            return mobileMenu.appendChild(mobileItemsContainer)
}
else if(mobileMenuStatus === true) {
    if (mobileMenu.contains(mobileItemsContainer)){
        mobileItemsContainer.innerHTML = ''
        mobileMenu.removeChild(mobileItemsContainer)
    }
   
}
   }, console.log(mobileMenuStatus))
}
}
    return {
        responsiveFunctions: responsiveFunctions,
        loadWaffle: loadWaffle,
        styleMode: styleMode(),
        waffleFunction: waffleFunction(),
    }
}
window.onload = responsiveFunctions




