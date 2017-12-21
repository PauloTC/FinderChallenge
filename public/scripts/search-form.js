
 $element = document.getElementById('busqueda')
 $button = document.getElementById('form-btn')
 $form = document.getElementById('form1')

 function myFunction(){ 
   if( $element.value.length > 2 ){

     console.log('mayor que 2')
     $button.classList.remove('hidden-btn')
     $form.setAttribute("action", "/action_page.php")

   }else{

     $button.classList.add('hidden-btn')
     $form.removeAttribute("action")
   }
 }

function enviar_formulario(){
    document.formulario1.submit()
}

function searchForm(){

   
    
}

