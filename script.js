const avanca= document.querySelectorAll(`.btn-proximo`)

avanca . forEach(Button=>{
Button.addEventListener('click',function(){ 
const atual =document.querySelector('ativo')
const proximoPasso ='passo-'+ this.getAttribute('data-proxima')

atual.classList.remove('ativo')
document.getElementById(proximoPASSO).classList.add('ativo')
   })
})


    

