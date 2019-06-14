//---------------------------- insertar o restar cantidad ------------------------------------

jQuery(document).ready(function(){

		    jQuery('.qtyplus').click(function(){
		        fieldName = jQuery(this).attr('field');		        
		        var currentVal = parseInt(jQuery('input[fieldname='+fieldName+']').val());
		        if (!isNaN(currentVal) && currentVal < 100) {
		            jQuery('input[fieldname='+fieldName+']').val(currentVal + 1);
		        } else {
		           jQuery('input[fieldname='+fieldName+']').val(100);
		        }
		    });

		    jQuery(".qtyminus").click(function() {
		        fieldName = jQuery(this).attr('field');
		        var currentVal = parseInt(jQuery('input[fieldname='+fieldName+']').val());
		        if (!isNaN(currentVal) && currentVal > 1) {
		            jQuery('input[fieldname='+fieldName+']').val(currentVal - 1);
		        } else {
		            jQuery('input[fieldname='+fieldName+']').val(1);
		        }
		    });

		    jQuery(".update_item").click(function(e) {
		    	var id = jQuery(this).data('id');
		    	var href = jQuery(this).data('href');
		    	var quantity = jQuery('#product_'+id).val();
		    	var redirect = href+"/"+quantity;
		    	//alert(redirect);
		    	window.location.href = redirect;
		    });

		    jQuery("#product-addtocart-button").click(function(e) {
		    	var articulo = jQuery("#articulo_").val();
		        var quantity = jQuery(".cant").val();
		        var protocolo = window.location.protocol;
			    var host = window.location.host;
			    location.href = protocolo+"//"+host+"/cart/add/"+articulo+"/"+quantity;
		    });
});