function insertActividad()
{
     jQuery.ajax({
           url : 'http://localhost:8000/altas/actividades/add',
         headers : {'X-CSRF-TOKEN' : $('#actividadToken').val()},
         type : 'POST', 
         data : {
            actividad : $('#id-actividad').val(),
            nombre : $('#nombre-actividad').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabActividad").html(data.tabla);
                $('.selectActividades').html(data.select);
                cleanFormActividades();
                alert(data.mensaje);
            }
            else if(data.response == 'error')
            {
                alert(data.errors.nombre);
            }
            else if(data.response == 'error2')
            {
                alert(data.mensaje);
            }
            
        },
        error : function(data)
        {
            
        }
    });
}


function setActividad(id)
{
    cleanFormActividades();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/actividades/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-actividad').val(data.id_actividad);
            $('#nombre-actividad').val(data.nom_actividad);
        }
    });
}



function deleteActividad(id)
{
    var confirmacion = confirm("¿Desea eliminar la actividad?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/actividades/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabActividad").html(data.tabla);
                $('.selectActividades').html(data.select);
                cleanFormActividades();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormActividades()
{
    $('#id-actividad').val('');
    $('#nombre-actividad').val('');
}




function cleanFormActividades2()
{
    $('#nombre-actividad').val('');
}