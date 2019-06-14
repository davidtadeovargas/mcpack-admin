function insertMarca()
{
     jQuery.ajax({
           url : 'http://localhost:8000/altas/marcas/add',
         headers : {'X-CSRF-TOKEN' : $('#marcaToken').val()},
         type : 'POST', 
         data : {
            marca : $('#id-marca').val(),
            nombre : $('#nombre-marca').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabMarca").html(data.tabla);
                $('.selectMarcas').html(data.select);
                cleanFormMarcas();
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


function setMarca(id)
{
    cleanFormMarcas();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/marcas/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-marca').val(data.id_marca;
            $('#nombre-marca').val(data.nom_marca);
        }
    });
}



function deleteMarca(id)
{
    var confirmacion = confirm("¿Desea eliminar la marca?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/marcas/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabMarca").html(data.tabla);
                $('.selectMarcas').html(data.select);
                cleanFormMarcas();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormMarcas()
{
    $('#id-marca').val('');
    $('#nombre-marca').val('');
}




function cleanFormMarcas2()
{
    $('#nombre-marca').val('');
}