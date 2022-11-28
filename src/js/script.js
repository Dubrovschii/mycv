"use strict"
// $( function() {
//     $( "#accordion" ).accordion();
//   } );

  const textActive = document.querySelectorAll('.tabs__text_active');
  const titleName = document.querySelectorAll('.tabs__title');
  const tabs = document.querySelectorAll('.tabs__list');
  // const titleColor = document.querySelectorAll('.tabs__title_active');
  const tabsParent = document.querySelector('.tabs__parent')
  
  function hideTabContent () {
    textActive.forEach(item => {
      item.style.display = 'none';
    });
  
    tabs.forEach(item => {
      item.classList.remove('tabs__list_active');
    });
  
    titleName.forEach(item => {
      item.classList.remove('tabs__title_active');
    });
  };
  
  function showTabContent (i = 0) {
   
    textActive[i].style.display = 'block';
  
  
    tabs[i].classList.add('tabs__list_active');
    
  
   
    titleName[i].classList.add('tabs__title_active');
  
    // titleActive[i].classList.add('tabs__text_active');
  
  };
  hideTabContent();
  
  
  tabsParent.addEventListener('click',(event) => {
    const target = event.target;
    console.log('click');
    if(target && target.classList.contains('tabs__list')){
      tabs.forEach((item, i)=> {
        if(target == item){
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  