let typed = new Typed('#newString', {
    stringsElement: '.new-strings'
  });

let harmburger = document.querySelector('.harmburger');
let navClick = document.querySelector('.nav-click');
let projectType = document.querySelectorAll('.card-group .card');
let vanilla = document.querySelector('#vanilla');
let react = document.querySelector('#react');
let reactGroup = document.querySelector('#react-group')
let vanillaGroup = document.querySelector('#vanilla-group')
let onHarmbugerClick = document.querySelector('.onHarmbugerClick');


harmburger.addEventListener('click',()=>{
    onHarmbugerClick.classList.toggle('hide')
    navClick.classList.toggle('display')
})

vanilla.addEventListener('click',function(){
  this.classList.add('active')
  react.classList.remove('active')
  reactGroup.classList.add('d-none')
  vanillaGroup.classList.remove('d-none')
})

react.addEventListener('click',function(){
  this.classList.add('active')
  vanilla.classList.remove('active')
  vanillaGroup.classList.add('d-none')
  reactGroup.classList.remove('d-none')
})
