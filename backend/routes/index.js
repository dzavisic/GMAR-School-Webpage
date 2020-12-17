var express 		  = require('express');
var router 			  = express.Router();

var ucenik 			  = require('./ucenik.js');
var nastavnik 		  = require('./nastavnik.js');
var razred 			  = require('./razred.js');
var predmet 		  = require('./predmet.js');
var smjer 			  = require('./smjer.js');
var studijski_program = require('./studijski_program.js');
var uloga 			  = require('./uloga.js');
var objava            = require('./objave.js');
var carnet            = require('./carnet.js');
var uckraz            = require('./ucenik_razred.js');

/* UCENIK */
router.post('/api/ucenik', 	  		  	   ucenik.ucenik);
router.post('/api/ucenikPopis', 	  	   ucenik.ucenikPopis);
router.post('/api/ucenikDodaj', 	  	   ucenik.ucenikDodaj);
router.post('/api/ucenikUredi', 	  	   ucenik.ucenikUredi);
router.post('/api/ucenikObrisi', 	  	   ucenik.ucenikObrisi);

/* NASTAVNIK */
router.post('/api/nastavnik', 	  	  	   nastavnik.nastavnik);
router.post('/api/nastavnikPopis', 	  	   nastavnik.nastavnikPopis);
router.post('/api/nastavnikDodaj', 	  	   nastavnik.nastavnikDodaj);
router.post('/api/nastavnikUredi', 	  	   nastavnik.nastavnikUredi);
router.post('/api/nastavnikObrisi',   	   nastavnik.nastavnikObrisi);
router.post('/api/nastavnikPrijavaAdmin',       nastavnik.nastavnikPrijavaAdmin);
router.post('/api/nastavnikPrijavaUser',       nastavnik.nastavnikPrijavaUser);

/* RAZRED */
router.post('/api/razred', 			  	   razred.razred);
router.post('/api/razredPopis', 	  	   razred.razredPopis);
router.post('/api/razredDodaj', 	  	   razred.razredDodaj);
router.post('/api/razredUredi', 	  	   razred.razredUredi);
router.post('/api/razredObrisi', 	  	   razred.razredObrisi);

/* PREDMET */
router.post('/api/predmet', 		  	   predmet.predmet);
router.post('/api/predmetPopis', 	  	   predmet.predmetPopis);
router.post('/api/predmetDodaj', 	  	   predmet.predmetDodaj);
router.post('/api/predmetUredi', 	  	   predmet.predmetUredi);
router.post('/api/predmetObrisi', 	  	   predmet.predmetObrisi);

/* SMJER */
router.post('/api/smjer', 		  	  	   smjer.smjer);
router.post('/api/smjerPopis', 	  	  	   smjer.smjerPopis);
router.post('/api/smjerDodaj', 	  	  	   smjer.smjerDodaj);
router.post('/api/smjerUredi', 	  	  	   smjer.smjerUredi);
router.post('/api/smjerObrisi', 	  	   smjer.smjerObrisi);

/* STUDIJSKI PROGRAM */
router.post('/api/studijskiprogram',  	   studijski_program.studijski_program);
router.post('/api/studijskiprogramPopis',  studijski_program.studijski_programPopis);
router.post('/api/studijskiprogramDodaj',  studijski_program.studijski_programDodaj);
router.post('/api/studijskiprogramObrisi', studijski_program.studijski_programObrisi);

/* ULOGA */
router.post('/api/uloga', 				   uloga.uloga);
router.post('/api/ulogaPopis', 			   uloga.ulogaPopis);
router.post('/api/ulogaDodaj', 			   uloga.ulogaDodaj);
router.post('/api/ulogaUredi', 			   uloga.ulogaUredi);
router.post('/api/ulogaObrisi', 		   uloga.ulogaObrisi);

/* UČENIK RAZRED */
router.post('/api/uckraz',                 uckraz.uckraz);
router.post('/api/uckrazPopis',            uckraz.uckrazPopis);
router.post('/api/uckrazDodaj',            uckraz.uckrazDodaj);
router.post('/api/uckrazUredi',            uckraz.uckrazUredi);
router.post('/api/uckrazObrisi',           uckraz.uckrazObrisi);

/* OBJAVE OBAVIJESTI */
router.post('/api/objavaDodaj', objava.objavaDodaj);
router.post('/api/objava', objava.objava);

/* CARNET OBJAVE */
router.post('/api/carnetDodaj', carnet.carnetDodaj);
router.post('/api/carnet', carnet.carnet);

module.exports = router;
