const nav = document.querySelector("#nav")
const open = document.querySelector("#abrir")
const close = document.querySelector("#cerrar")
open.addEventListener('click',()=>{
  nav.classList.add('visibility')
})

close.addEventListener('click',()=>{
  nav.classList.remove('visibility')
})
