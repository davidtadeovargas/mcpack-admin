$('#empresa-solicitud').change(function(){
	var empresa = $(this).val();
	jQuery.ajax({
          url : 'http://localhost:8000/solicitudes/areas/show',
         type : 'get',
         data : {empresa : empresa},
         success: function(data){
            $('#area-solicitud').html(data.select);
        }
    });
});