let typed = new Typed('#newString', {
    stringsElement: '.new-strings'
  });

let harmburger = document.querySelector('.harmburger');
let navClick = document.querySelector('.nav-click');
let projectType = document.querySelectorAll('.card-group .card');
let vanilla = document.querySelector('#vanilla');
let react = document.querySelector('#react');
let onHarmbugerClick = document.querySelector('.onHarmbugerClick');


harmburger.addEventListener('click',()=>{
    onHarmbugerClick.classList.toggle('hide')
    navClick.classList.toggle('display')
})

vanilla.addEventListener('click',function(){
  this.classList.add('active')
  react.classList.remove('active')
})

react.addEventListener('click',function(){
  this.classList.add('active')
  vanilla.classList.remove('active')

})
