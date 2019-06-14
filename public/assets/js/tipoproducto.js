function insertTipoproducto()
{
     jQuery.ajax({
           url : 'http://localhost:8000/altas/tipoproductos/add',
         headers : {'X-CSRF-TOKEN' : $('#tipoproductoToken').val()},
         type : 'POST', 
         data : {
            tipoproducto : $('#id-tipoproducto').val(),
            nombre : $('#nombre-tipoproducto').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabTipoproducto").html(data.tabla);
                $('.selectTipoproductos').html(data.select);
                cleanFormTipoproductos();
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


function setTipoproductos(id)
{
    cleanFormTipoproductos();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/tipoproductos/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-tipoproducto').val(data.id_tipoproducto);
            $('#nombre-tipoproducto').val(data.nom_tipoproducto);
        }
    });
}



function deleteTipoproducto(id)
{
    var confirmacion = confirm("¿Desea eliminar el tipo de producto?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/tipoproductos/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabTipoproducto").html(data.tabla);
                $('.selectTipoproductos').html(data.select);
                cleanFormActividades();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormTipoproductos()
{
    $('#id-tipoproducto').val('');
    $('#nombre-tipoproducto').val('');
}




function cleanFormTipoproductos2()
{
    $('#nombre-tipoproducto').val('');
}