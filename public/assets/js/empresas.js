
var imagen = null;
//Eventos para los que son tipo de archivo
$(document).on("change","#imagen-emp", function(evt)
{
    var tgt = evt.target || window.event.srcElement,
    files = tgt.files;
    // FileReader support
    if (FileReader && files && files.length) 
    {
         var fr = new FileReader();
         /*fr.onload = function () {
            document.getElementById('fotoViewer').src = fr.result;
        }*/
         fr.readAsDataURL(files[0]);
        imagen = files[0];
        console.log(imagen);
    }
    // Not supported
     else 
    {
          // fallback -- perhaps submit the input to an iframe and temporarily store
          // them on the server until the user's session ends.
    }
});




function insertEmpresa()
{
    // Crea el formdata (para envio de imágenes y el texto)
    var formdata = false;
     if(window.FormData) 
     {
        formdata = new FormData();
    }
    if(formdata === false) 
    {
         alert("Your browser does not support form data");
        return false;
    }

    formdata.append("emp", $('#id-emp').val());
    formdata.append("nombre", $('#nombre-emp').val());
    formdata.append("rfc", $('#rfc-emp').val());
    formdata.append("direccion", $('#direccion-emp').val());
    formdata.append("telefono", $('#telefono-emp').val());
    if(imagen != null)
    {formdata.append("imagen", imagen);}else{formdata.append("imagen", '');}

    var route = 'http://localhost:8000/altas/empresas/add';
    jQuery.ajax({
          url : route,
         headers : {'X-CSRF-TOKEN' : $('#empToken').val()},
         type : 'POST',
         processData: false,  //IMPORTANT when sending formdata
         contentType: false,  //IMPORTANT when sending formdata  
        data : formdata,
        success : function(data)
        {
            if(data.response == 'ok')
            {
                $(".tab").html(data.tabla);
                $('.selectEmpresas').html(data.select);
                cleanFormEmpresa();
                alert(data.mensaje);
                 //location.reload();                         
            }
             else if(data.response == 'error')
            {
                if(data.errors.nombre != null){
                     alert(data.errors.nombre);
                     //$("#nombre-emp").tooltip('show');
                     return;
                }
                 if(data.errors.rfc != null){
                    alert(data.errors.rfc);
                    //$("#rfc-emp").tooltip('show');
                    return;
                }
                if(data.errors.direccion != null){
                    alert(data.errors.direccion);
                     //$("#direccion-emp").tooltip('show');
                     return;
                }
                 if(data.errors.telefono != null){
                    alert(data.errors.telefono);
                     //$("#telefono-emp").tooltip('show');
                     return;
                }
                if(data.errors.imagen != null){
                    alert(data.errors.imagen);
                    //$("#imagen-emp").tooltip('show');
                    return;
                }
            }
            else if(data.response == 'error2')
            {
                alert(data.mensaje);
            }
         }
    });
}




function setEmpresa(id)
{
    cleanFormEmpresa();
    var route = 'http://localhost:8000/altas/empresas/show/'+id;
    jQuery.ajax({
          url : route,
         type : 'get',
         dataType : 'json',
         success: function(data){
             $('#id-emp').val(data.id_empresafiscal);
             $('#nombre-emp').val(data.nom_empresafiscal);
             $('#rfc-emp').val(data.rfc);
             $('#direccion-emp').val(data.direccion);
             $('#telefono-emp').val(data.telefono);
        }
    });
}





function deleteEmpresa(id)
{
    var confirmacion = confirm("¿Desea eliminar empresa fiscal?");
    if(confirmacion){
        var route = 'http://localhost:8000/altas/empresas/delete/'+id;
        jQuery.ajax({
              url : route,
             type : 'get',
             dataType : 'json',
             success: function(data){
                $(".tab").html(data.tabla);
                $('.selectEmpresas').html(data.select);
                cleanFormEmpresa();
                alert(data.mensaje);
            },
            error: function (data) {
                 alert(data.responseJSON.mensaje);
            }
        });
    }
}




function cleanFormEmpresa()
{
    $('#id-emp').val('');
    $('.formEpresa').val('');
    imagen = null;
}




function cleanFormEmpresa2()
{
    $('.formEpresa').val('');
    imagen = null;
}