function insertCuentas()
{
     jQuery.ajax({
             url : 'http://localhost:8000/altas/cuentas/add',
         headers : {'X-CSRF-TOKEN' : $('#cuentaToken').val()},
            type : 'POST', 
            data : {
              cuentas : $('#id-Cuentas').val(),
              nombre : $('#nombre-cuenta').val(),
              area : $('#area-cuentas').val(),
              cuentaFiscal : $('#cuentaFiscal-cuentas').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabCuentas").html(data.tabla);
                //$('.selectCuentas').html(data.select);
                cleanFormCuentas();
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
                if(data.errors.cuentaFiscal != null){
                    alert(data.errors.cuentaFiscal);
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


function setCuenta(id)
{
    cleanFormCuentas();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/cuentas/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-Cuentas').val(data.id_cuenta);
            $('#nombre-cuenta').val(data.nom_cuenta);
            $('#area-cuentas').val(data.id_area);
            $('#cuentaFiscal-cuentas').val(data.id_cuentafiscal);
        }
    });
}



function deleteCuenta(id)
{
    var confirmacion = confirm("¿Desea eliminar la cuenta?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/cuentas/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabCuentas").html(data.tabla);
                //$('.selectCuentas').html(data.select);
                cleanFormCuentas();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormCuentas()
{
    $('#id-Cuentas').val('');
    $('#nombre-cuenta').val('');
    $('#area-cuentas').val('');
    $('#cuentaFiscal-cuentas').val('');
}




function cleanFormCuentas2()
{
   $('#nombre-cuenta').val('');
   $('#area-cuentas').val('');
    $('#cuentaFiscal-cuentas').val('');
}