let changecolor = document.getElementById('toogle');
let change = document.getElementById('change');
let userscontainer = [
  document.getElementById('userone-container'),
  document.getElementById('usertwo-container'),
  document.getElementById('userthree-container'),
  document.getElementById('userfour-container'),
  document.getElementById('pageone'),
  document.getElementById('pagetwo'),
  document.getElementById('pagethree'),
  document.getElementById('pagefour'),
  document.getElementById('pagefive'),
  document.getElementById('pagesix'),
  document.getElementById('pageseven'),
  document.getElementById('pageeight'),
];
changecolor.addEventListener('change',(e)=>{
if(e.target.checked){
document.body.classList.remove('dark-mode');
change.innerHTML = 'LIGHT';
userscontainer.forEach(function(box){
box.style.backgroundColor = '#f0f2fa';
})
}
else{
document.body.classList.add('dark-mode');
change.innerHTML = 'DARK';
userscontainer.forEach(function(box){
box.style.backgroundColor = '#252a41';
})
}
})