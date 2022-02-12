let typed = new Typed('#newString', {
    stringsElement: '.new-strings'
  });

let harmburger = document.querySelector('.harmburger');
let navClick = document.querySelector('.nav-click');
let onHarmbugerClick = document.querySelector('.onHarmbugerClick');
harmburger.addEventListener('click',()=>{
    onHarmbugerClick.classList.toggle('hide')
    navClick.classList.toggle('display')
})