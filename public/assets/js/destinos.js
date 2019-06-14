function insertDestinos()
{
     jQuery.ajax({
             url : 'http://localhost:8000/altas/destinos/add',
         headers : {'X-CSRF-TOKEN' : $('#destinoToken').val()},
            type : 'POST', 
            data : {
              destinos : $('#id-destinos').val(),
              nombre : $('#nombre-destino').val(),
              area : $('#area-destino').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabDestinos").html(data.tabla);
                //$('.selectDestinos').html(data.select);
                cleanFormDestinos();
                alert(data.mensaje);                         
            }
             else if(data.response == 'error')
            {
                if(data.errors.nombre != null){
                     alert(data.errors.nombre);
                     return;
                }
                 if(data.errors.area != null){
                    alert(data.errors.area);
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


function setDestino(id)
{
    cleanFormDestinos();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/destinos/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-destinos').val(data.id_destino);
            $('#nombre-destino').val(data.nom_destino);
            $('#area-destino').val(data.id_area);
        }
    });
}



function deleteDestino(id)
{
    var confirmacion = confirm("¿Desea eliminar destino?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/destinos/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabDestinos").html(data.tabla);
                //$('.selectDestinos').html(data.select);
                cleanFormDestinos();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormDestinos()
{
    $('#id-destinos').val('');
    $('#nombre-destino').val('');
    $('#area-destino').val('');
}




function cleanFormDestinos2()
{
   $('#nombre-destino').val('');
   $('#area-destino').val('');
}