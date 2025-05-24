const tabFunctions = function() {
    const tabs = function () {
    const tab1 = document.querySelector('#tab-button-1')
    const tab2 = document.querySelector('#tab-button-2')
        if (tab1 && tab2) {
            console.log('tabs loaded from tabFunctions successfully. Now add event listeners...')
            tab1.addEventListener('click', clickTab)
            tab2.addEventListener('click', clickTab)
}
const tabContent = function () {
    //declare the area where tab content is in the DOM HTML so that we can just switch text content around when a tab is clicked
}
    }
    const clickTab = function () {
    console.log(this)
    if (this.textContent === 'About') {
        console.log('User clicked ',this.textContent,' section...'),
        appendTabContent.firstTab()
        //add a class that changes the background colour of the tab clicked
    }
    else if (this.textContent === 'Experience') {
      console.log('User clicked ',this.textContent,' section...'),
      appendTabContent.secondTab()
    }
    }

    const appendTabContent = {
        firstTab: function (){
            console.log('append first tab content')
            //declare the new text content of elements in the tab section
        },
        secondTab: function () {
            console.log('append second tab content')
        }
    }

    return {
        tabs: tabs(),
        tabContent: tabContent(),
        clickTab: clickTab,
    }

}

export {tabFunctions}