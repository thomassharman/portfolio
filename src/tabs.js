const tabFunctions = function() {
let tab1;
let tab2;    

    const tabs = function () {
    tab1 = document.querySelector('#tab-button-1')
    tab2 = document.querySelector('#tab-button-2')
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
    const activeTab = this
    if (activeTab.textContent === 'About') {
        console.log('User clicked ',activeTab.textContent,' section...');
        const inactiveTab = tab2
        appendTabContent.firstTab()
        tabStyles.switch(activeTab, inactiveTab)
        //add a class that changes the background colour of the tab clicked
    }
    else if (activeTab.textContent === 'Experience') {
      console.log('User clicked ',activeTab.textContent,' section...');
      const inactiveTab = tab1
      appendTabContent.secondTab()
      tabStyles.switch(activeTab, inactiveTab)
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

    const tabStyles = {
        switch: function(thisTab, otherTab) {
            if (thisTab.classList.contains('tab-button')) {
            console.log('this tab must have an active class')
            thisTab.classList.remove('tab-button') 
            thisTab.classList.add('activeTab') 
            otherTab.classList.add('tab-button')
            otherTab.classList.remove('activeTab') 
            }
            }
        }
        return {
            tabs: tabs(),
            tabContent: tabContent(),
            clickTab: clickTab,
    }
    }



export {tabFunctions}