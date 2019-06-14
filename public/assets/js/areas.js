function insertArea()
{
     /*var identificador = $('#identificador-area').val();

     if(identificador.length<3) {
        alert('El identificador debe contener solo números y un total de 3 dígitos');
        return;
    }*/

    var route = 'http://localhost:8000/altas/areas/add';
     jQuery.ajax({
           url : route,
         headers : {'X-CSRF-TOKEN' : $('#areaToken').val()},
         type : 'POST', 
         data : {
            area : $('#id-area').val(),
            nombre : $('#nombre-area').val(),
            direccion : $('#direccion-area').val(),
            telefono : $('#telefono-area').val(),
            empresa : $('#empresa-area').val(),
            manejo : $('input:radio[name=radio-stacked]:checked').val()
        },
        success : function(data)
        {
            if(data.response == 'ok'){
                $(".tabArea").html(data.tabla);
                $('.selectAreas').html(data.select);
                cleanFormArea();
                alert(data.mensaje);                          
            }else if(data.response == 'error')
            {
                if(data.errors.nombre != null){
                    alert(data.errors.nombre);
                    return;
                }
                if(data.errors.direccion != null){
                    alert(data.errors.direccion);
                    return;
                }
                if(data.errors.telefono != null){
                    alert(data.errors.telefono);
                    return;
                }
                if(data.errors.empresa != null){
                    alert(data.errors.empresa);
                    return;
                }
                if(data.errors.manejo != null){
                    alert(data.errors.manejo);
                    return;
                }
            }else if(data.response == 'error2'){
                alert(data.mensaje);
            }
        }
    });
}



function setArea(id)
{
    cleanFormArea();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/areas/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-area').val(data[0].id);
            $('#nombre-area').val(data[0].nombre);
            $('#direccion-area').val(data[0].direccion);
            $('#telefono-area').val(data[0].telefono);
            $('#empresa-area').val(data[0].idEmp);
            var radio = $('input:radio[name=radio-stacked]');
            if(data[0].manejo == false)
            {
                radio.filter('[value=false]').prop('checked', true);
            }else{
                radio.filter('[value=true]').prop('checked', true);
            }
        }
    });
}


function deleteArea(id)
{
    var confirmacion = confirm("¿Desea eliminar el área?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/areas/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabArea").html(data.tabla);
                $('.selectAreas').html(data.select);
                cleanFormArea();
                alert(data.mensaje);
            },
            error: function (data) {
                 alert(data.responseJSON.mensaje);
            }
        });
    }
}



function cleanFormArea()
{
    $('#id-area').val('');
    $('.formArea').val('');
    $('#empresa-area').val('');
    $('.formArea-radio').prop('checked',false);
}



function cleanFormArea2()
{
    $('.formArea').val('');
    $('#empresa-area').val('');
    $('.formArea-radio').prop('checked',false);
}