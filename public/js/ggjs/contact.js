 $('#btnmail').on('click', function(){
		var name = $('#inputname').val();
		var email = $('#inputemail').val();
		var message = $('#inputmessage').val();
		var regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(name === ''){
			nop('Vous avez oublié votre nom');
		}else if(!regexMail.test(email)){
			nop("Adresse email non valide (au pire mettez blabla@bla.bla");
		}else if(message === ''){
			nop("Vous avez oublié d'écrire le message");
		}else{
			$.post( "mail", { name: name, email: email, message: message }, function( data ) {
					swal({
					title: "Bravo!",
					text: "Email envoyé !",
					type: "success"
				}, function(){ 
					document.location.href="index"
				});
			});
		}
		
 });
 
 function nop(data){
	swal({   
		title: "Oups",
		text: data,
		type: "error",
		confirmButtonText: "On recommence !"
	});
 }
 
