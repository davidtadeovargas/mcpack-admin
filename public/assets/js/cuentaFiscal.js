function insertCuentaFiscal()
{
     jQuery.ajax({
           url : 'http://localhost:8000/altas/cuenta-fiscal/add',
         headers : {'X-CSRF-TOKEN' : $('#cuentaFiscalToken').val()},
         type : 'POST', 
         data : {
            cuentaFiscal : $('#id-CuentaFiscal').val(),
            nombre : $('#nombre-cuentaFiscal').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabCuentaFiscal").html(data.tabla);
                $('.selectCuentasFiscales').html(data.select);
                cleanFormCuentaFiscal();
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


function setCuentaFiscal(id)
{
    cleanFormCuentaFiscal();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/cuenta-fiscal/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-CuentaFiscal').val(data.id_cuentafiscal);
            $('#nombre-cuentaFiscal').val(data.nom_cuentafiscal);
        }
    });
}



function deleteCuentaFiscal(id)
{
    var confirmacion = confirm("¿Desea eliminar la cuenta fiscal?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/cuenta-fiscal/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabCuentaFiscal").html(data.tabla);
                $('.selectCuentasFiscales').html(data.select);
                cleanFormCuentaFiscal();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.responseJSON.mensaje);
            }
        });
    }
}



function cleanFormCuentaFiscal()
{
    $('#id-CuentaFiscal').val('');
    $('#nombre-cuentaFiscal').val('');
}




function cleanFormCuentaFiscal2()
{
    $('#nombre-cuentaFiscal').val('');
}