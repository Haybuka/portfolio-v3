//Selection of query elements
let harmburger = document.querySelector('.harmburger');
let navClick = document.querySelector('.nav-click');
let projectType = document.querySelectorAll('.card-group .card');
let vanilla = document.querySelector('#vanilla');
let react = document.querySelector('#react');
let reactGroup = document.querySelector('#react-group')
let vanillaGroup = document.querySelector('#vanilla-group')
let onHarmbugerClick = document.querySelector('.onHarmbugerClick');
const loader = document.querySelector('.loader')


//TypeJs usage after linked
let typed = new Typed('#newString', {
    stringsElement: '.new-strings'
  });

//Harmburger toggle select
harmburger.addEventListener('click',()=>{
    onHarmbugerClick.classList.toggle('hide')
    navClick.classList.toggle('display')
})

//click event to toggle modes between react & vanilla
vanilla.addEventListener('click',function(){

   //class changes and toggle
  this.classList.add('active')
  react.classList.remove('active')
  reactGroup.classList.add('d-none')
  loader.classList.remove('d-none')

  // Preloader usage and 1s time
  setTimeout(() => {
     vanillaGroup.classList.remove('d-none')
     loader.classList.add('d-none')
  }, 1000);
})

react.addEventListener('click',function(){

   //class changes and toggle
  this.classList.add('active')
  vanilla.classList.remove('active')
  vanillaGroup.classList.add('d-none')
  loader.classList.remove('d-none')

  // Preloader usage and 1s time
  setTimeout(() => {
     reactGroup.classList.remove('d-none')
     loader.classList.add('d-none')
  }, 1000);
})

//end of toggle click event