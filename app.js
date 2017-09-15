var express = require('express');
var Twig = require('twig');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');

var app = express();
var twig = Twig.twig; 

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(favicon(__dirname + '/public/favicon/panda.ico')) ;// Active la favicon indiquée
app.set("twig options", {
    strict_variables: false
}); //Utilisation de twig

app.get('/', function(req, res) {
	 res.render('index.twig', {
    message : "index" 	
  });
})
app.get('/index', function(req, res) {
	 res.render('index.twig', {
    message : "index" 	
  });
})
.get('/maries', function(req, res) {
	res.render('maries.twig', {
    message : "maries" 	
  });
})
.get('/temoins', function(req, res) {
	res.render('temoins.twig', {
    message : "temoins" 	
  });
})
.get('/lieu', function(req, res) {
	res.render('lieu.twig', {
    message : "lieu" 	
  });
})
.get('/contact', function(req, res) {
	res.render('contact.twig', {
    message : "contact" 
  });
})
.get('/voyage', function(req, res) {
	res.render('voyage.twig', {
    message : "voyage" 
  });
})
.get('/galerie', function(req, res) {
	res.render('galerie.twig', {
    message : "galerie" 
  });
})
.post('/mail', function(req, res) {
	var name = req.body.name;
    var email = req.body.email;
	var message = req.body.message;
	
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'geraldineetgeoffroy@gmail.com',
			pass: 'MDPmariage2015'
		},
		tls: {
			rejectUnauthorized: false
		}
	}, {
		from: 'ggjs@site.com',
		headers: {
			'My-Awesome-Header': '123'
		}
	});
	var maillist = [
  'ludo.langrand@gmail.com',
  'geraldine.langrand@gmail.com',
  'geoffroy.delaigle@gmail.com',
];
	var mailOptions = {
        from: ''+email,
        to: maillist,
        subject: 'MARIAGE  : '+name,
        text: ''+message,
        html: '<p>' + message + '</p>'+ '<p>' +'pour repondre :' + email + '</p>'
	};
	
	
	transporter.sendMail(mailOptions, function(error, info){
		 if(error){
			return console.log('erreur = '+error);
		 }
		 console.log('Message envoyé : ' + info.response);
	});

	transporter.close();
	console.log('mail envoyé');
	res.render('contact.twig', {
		message : "contact" 
	});

})
.use(function(req, res, next){
	res.render('404.twig', {
    message : "404" 	
  });
});

console.log('serveur en ligne');
app.listen(3001);