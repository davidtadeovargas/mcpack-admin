jQuery(document).on('click','.pagination a',function(e){

	//e.preventDefault(); //prevenimos algun evento
	var page = jQuery(this).attr('href').split('page=')[1];//leemos el contenido del atributo href
	var route = window.location;//obtener url actual
	jQuery.ajax({
		url : route,
		data : {page : page},
		type : 'GET',
		dataType : 'json',
		success: function(data){
			jQuery(".productos").html(data);
		}
	});
	
});



jQuery(document).on('click','#list',function(e){
	e.preventDefault();
	jQuery('#grid').removeClass('active');
	var route = window.location;
	cadena = ""+route;
	if(cadena.indexOf('grid') != -1){
		var redirect = cadena.replace("grid", "list");
		location.href = redirect;
	}
	jQuery('#list').addClass('active');
});



jQuery(document).on('click','#grid',function(e){
	e.preventDefault();
	jQuery('#list').removeClass('active');
	var route = window.location;
	cadena = ""+route;
	if(cadena.indexOf('list') != -1){// si existe grid
		var redirect = cadena.replace("list", "grid");
		location.href = redirect;
	}
	jQuery('#grid').addClass('active');
	
});



function limite()
{
	var limite = document.getElementById("limit").value;
	var route = window.location;
	cadena = ""+route;
	//alert(cadena+" "+limite);
	
	if(cadena.indexOf('lineas/4') != -1 && limite == 8)
	{
		var redirect = cadena.replace("lineas/4", "lineas/8");
		location.href = redirect;
	}
	
	if(cadena.indexOf('lineas/8') != -1 && limite == 4)
	{
		var redirect = cadena.replace("lineas/8", "lineas/4");
		location.href = redirect;
	}
}


jQuery(document).on('click','.pedidos-direccion',function(e){

	e.preventDefault();
	var route = window.location;
	var folio = jQuery(this).attr('id');
	jQuery.ajax({
		url  : route,
		data : {folio : folio, tipo : 'direccion'},
		type : 'GET',
		dataType : 'json',
		success: function(data){
			jQuery("#detalles").html(data);
		}
	});
});

jQuery(document).on('click','.pedidos-lista',function(e){

	e.preventDefault();
	var route = window.location;
	var folio = jQuery(this).attr('id');
	jQuery.ajax({
		url  : route,
		data : {folio : folio, tipo : 'list'},
		type : 'GET',
		dataType : 'json',
		success: function(data){
			jQuery("#detalles").html(data);
		}
	});
});