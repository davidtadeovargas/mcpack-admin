function insertCategoria()
{
     jQuery.ajax({
           url : 'http://localhost:8000/altas/categorias/add',
         headers : {'X-CSRF-TOKEN' : $('#categoriaToken').val()},
         type : 'POST', 
         data : {
            categoria : $('#id-categoria').val(),
            nombre : $('#nombre-categoria').val()
        },
        success : function(data)
        {
            if(data.response == 'success')
            {
                $(".tabCategoria").html(data.tabla);
                $('.selectCategorias').html(data.select);
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


function setCategoria(id)
{
    cleanFormActividades();
    jQuery.ajax({
          url : 'http://localhost:8000/altas/categorias/show',
         type : 'get',
         data : {id : id},
         success: function(data){
            $('#id-categoria').val(data.id_categoria);
            $('#nombre-categoria').val(data.nom_categoria);
        }
    });
}



function deleteCategoria(id)
{
    var confirmacion = confirm("¿Desea eliminar la categoria?");
    if(confirmacion){
        jQuery.ajax({
              url : 'http://localhost:8000/altas/categorias/delete',
             type : 'get',
             data : {id : id},
             success: function(data){
                $(".tabCategoria").html(data.tabla);
                $('.selectCategorias').html(data.select);
                cleanFormCategorias();
                alert(data.mensaje);
            },
            error: function (data) {
                alert(data.mensaje);
            }
        });
    }
}



function cleanFormCategorias()
{
    $('#id-categoria').val('');
    $('#nombre-categoria').val('');
}




function cleanFormCategorias2()
{
    $('#nombre-categoria').val('');
}