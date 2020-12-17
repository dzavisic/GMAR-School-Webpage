var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var studijski_programi = {

studijski_program: (req, res, next) => {
    try{
        if(req.body.godina && req.body.razred_naziv){
            let query = "SELECT g.naziv as 'Godina', r.naziv as 'Razred', s.naziv as 'Smjer', p.naziv as 'Predmet' \
                         FROM studijski_program AS sp \
                         INNER JOIN godina AS g ON g.godina_id=? \
                         INNER JOIN razred AS r ON r.naziv=? and r.razred_id = sp.razred_razred_id \
                         INNER JOIN smjer AS s ON s.smjer_id = sp.smjer_smjer_id \
                         INNER JOIN predmet AS p ON p.predmet_id=sp.predmet_predmet_id \
                         WHERE g.godina_id=?;";
            let table = [req.body.godina,req.body.razred_naziv,req.body.godina];
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

studijski_programPopis: (req, res, next) => {
    try{
        let query = "SELECT g.naziv as 'Godina', r.naziv as 'Razred', s.naziv as 'Smjer', p.naziv as 'Predmet' \
                     FROM studijski_program AS sp \
                     INNER JOIN godina AS g ON g.godina_id = sp.godina_godina_id \
                     INNER JOIN razred AS r ON r.razred_id = sp.razred_razred_id \
                     INNER JOIN smjer AS s ON s.smjer_id = sp.smjer_smjer_id \
                     INNER JOIN predmet AS p ON p.predmet_id=sp.predmet_predmet_id \
                     ORDER BY g.godina_id, sp.razred_razred_id ASC;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

studijski_programDodaj: (req, res, next) => {
    try{
        if(req.body.godina_godina_id && req.body.razred_razred_id && req.body.smjer_smjer_id && req.body.predmet_predmet_id){
            let studijski_program = {
                godina_godina_id: req.body.godina_godina_id,
                razred_razred_id: req.body.razred_razred_id,
                smjer_smjer_id: req.body.smjer_smjer_id,
                predmet_predmet_id: req.body.predmet_predmet_id
            };
            let query = "insert into studijski_program SET ?";
            let table = [studijski_program];
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

studijski_programObrisi: (req, res, next) => {
    try{
        if(req.body.godina_godina_id && req.body.razred_razred_id && req.body.smjer_smjer_id && req.body.predmet_predmet_id){
            let query = "delete from studijski_program where godina_godina_id=? and razred_razred_id=? and smjer_smjer_id=? and predmet_predmet_id=?" ;
            let table =  [req.body.godina_godina_id,req.body.razred_razred_id,req.body.smjer_smjer_id,req.body.predmet_predmet_id];
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

module.exports = studijski_programi;