var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var uloge = {

uloga: (req, res, next) => {
    try{
        if(req.body.unos){
            let query = "SELECT u.naziv as 'Uloga', p.naziv as 'Predmet', n.ime as 'Ime', n.prezime as 'Prezime' FROM uloga AS u \
             INNER JOIN predmet AS p ON p.predmet_id = u.predmet_predmet_id and p.naziv = ? \
             INNER JOIN nastavnik AS n ON n.mat_br = u.nastavnik_mat_br \
              WHERE p.naziv = ?";
            let table = [req.body.unos,req.body.unos];
            query = mysql.format(query, table);
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

ulogaPopis: (req, res, next) => {
    try{
        let query = "SELECT u.naziv as 'Uloga', p.naziv as 'Predmet', n.ime as 'Ime', n.prezime as 'Prezime' FROM uloga AS u \
        INNER JOIN predmet AS p ON p.predmet_id = u.predmet_predmet_id \
        INNER JOIN nastavnik AS n ON n.mat_br = u.nastavnik_mat_br \
        ORDER BY predmet_predmet_id;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

ulogaDodaj: (req, res, next) => {
    try{
        if(req.body.naziv && req.body.predmet_predmet_id && req.body.nastavnik_mat_br){
            let uloga = {
                naziv: req.body.naziv,
                predmet_predmet_id: req.body.predmet_predmet_id,
                nastavnik_mat_br: req.body.nastavnik_mat_br
            };
            let query = "insert into uloga SET ?";
            let table = [uloga];
            query = mysql.format(query, table);
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

ulogaUredi: (req, res, next) => {
    try{
        if(req.body.naziv && req.body.predmet_predmet_id && req.body.nastavnik_mat_br){
            let uloga = {
                naziv: req.body.naziv,
                //predmet_predmet_id: req.body.predmet_predmet_id,
                //nastavnik_mat_br: req.body.nastavnik_mat_br
            };
            let query = "update uloga set ? where predmet_predmet_id = ? and nastavnik_mat_br=?";
            let table = [uloga,req.body.predmet_predmet_id,req.body.nastavnik_mat_br];
            query = mysql.format(query, table);
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

ulogaObrisi: (req, res, next) => {
    try{
        if(req.body.naziv && req.body.predmet_predmet_id && req.body.nastavnik_mat_br){
            let query = "delete from uloga where naziv=? and predmet_predmet_id = ? and nastavnik_mat_br=?" ;
            let table =  [req.body.naziv,req.body.predmet_predmet_id,req.body.nastavnik_mat_br];
            query = mysql.format(query, table); 
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
}

};

module.exports = uloge;