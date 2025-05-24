const tabFunctions = function() {
let tab1;
let tab2;   
let tab3; 
let tabContent;
let tabTitle;
let tabBody;

    const tabs = function () {
    tab1 = document.querySelector('#tab-button-1')
    tab2 = document.querySelector('#tab-button-2')
    tab3 = document.querySelector('#tab-button-3')
    tabContent =document.querySelector('.tab-content')
    tabTitle = document.querySelector('.tab-title')
    tabBody = document.querySelector('.tab-text')
        if (tab1 && tab2 && tab3) {
            console.log('tabs loaded from tabFunctions successfully. Now add event listeners...')
            const allTabs = [tab1, tab2, tab3]
            allTabs.forEach((tab) => {tab.addEventListener('click', clickTab)})
}
}
    const clickTab = function () {
    console.log(this)
    const activeTab = this
    if (activeTab.textContent === 'About') {
        console.log('User clicked ',activeTab.textContent,' section...');
        const inactiveTabs = [tab2, tab3]
        appendTabContent.append(activeTab)
        tabStyles.switch(activeTab, inactiveTabs)
    }
    else if (activeTab.textContent === 'Experience') {
      console.log('User clicked ',activeTab.textContent,' section...');
      const inactiveTabs = [tab1, tab3]
      appendTabContent.append(activeTab)
      tabStyles.switch(activeTab, inactiveTabs)
    }
    else if (activeTab.textContent === 'Skills') {
      console.log('User clicked ',activeTab.textContent,' section...');
      const inactiveTabs = [tab2, tab1]
      appendTabContent.append(activeTab)
      tabStyles.switch(activeTab, inactiveTabs)
    }
    }

    const appendTabContent = {
        append: function (tab){
            console.log('append tab content')
            tabContent.removeAttribute('id')
            tabTitle.textContent = tab.textContent
            if (tab.textContent === 'About') {
                tabBody.textContent = `Hey! I'm Tom. I have over 4 years of experience in Marketing and just recently started learning to code. I'll keep this part brief and you can find out more about me, below.`
            }
                else if (tab.textContent === 'Experience') {
                tabBody.textContent = `I have experience managing marketing campaigns in both B2B and B2C Industries.`
            }
                else if (tab.textContent === 'Skills') {
                tabBody.textContent = `I am still learning to code, but have picked up a lot of front end development skills (as you can see!). My marketing skill profile is much more vast and I encourage you to explore more about me below.`
            }
        },
    }

    const tabStyles = {
        switch: function(thisTab, otherTabs) {
            if (thisTab.classList.contains('tab-button')) {
            console.log('this tab must have an active class')
            thisTab.classList.remove('tab-button') 
            thisTab.classList.add('activeTab') 
            otherTabs.forEach((otherTab) => {
            otherTab.classList.add('tab-button')
            otherTab.classList.remove('activeTab') 
            })
            
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