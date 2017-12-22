
 $element = document.getElementById('busqueda')
 $button = document.getElementById('form-btn')
 $form = document.getElementById('form1')

 function validador(){ 
   if( $element.value.length > 2 ){

     $button.classList.remove('hidden-btn')
     $form.setAttribute("action", "http://localhost:8089")

   }else{

     $button.classList.add('hidden-btn')
     $form.removeAttribute("action")
   }
 }

function enviar_formulario(){
    document.formulario1.submit()
}

var actualizarResultado = function (form) {
  $.ajax({
    url: 'books-schema.json',
    type: 'post',
    dataType: 'json',
    data: $element.value,
    success: function (response) {
      if (response) {
       console.log('funciona')
      }

    }
  });
}


function searchForm(){

   
    
}

