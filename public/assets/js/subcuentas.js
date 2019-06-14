function insertSubcuentas()
{
     jQuery.ajax({
             url : 'http://localhost:8000/altas/subcuentas/add',
         headers : {'X-CSRF-TOKEN' : $('#subcuentaToken').val()},
            type : 'POST', 
            data : {
              subcuentas : $('#id-Subcuentas').val(),
              nombre : $('#nombre-subcuenta').val(),
              area : $('#area-subcuenta').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabSubcuentas").html(data.tabla);
                //$('.selectSubcuentas').html(data.select);
                cleanFormSubcuentas();
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


function setSubcuenta(id)
{
    cleanFormSubcuentas();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/subcuentas/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-Subcuentas').val(data.id_subcuenta);
            $('#nombre-subcuenta').val(data.nom_subcuenta);
            $('#area-subcuenta').val(data.id_area);
        }
    });
}



function deleteSubcuenta(id)
{
    var confirmacion = confirm("¿Desea eliminar la subcuenta?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/subcuentas/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabSubcuentas").html(data.tabla);
                //$('.selectSubcuentas').html(data.select);
                cleanFormSubcuentas();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormSubcuentas()
{
    $('#id-Subcuentas').val('');
    $('#nombre-subcuenta').val('');
    $('#area-subcuenta').val('');
}




function cleanFormSubcuentas2()
{
   $('#nombre-subcuenta').val('');
   $('#area-subcuenta').val('');
}