var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var predmeti = {

predmet: (req, res, next) => {
    try{
        if(req.body.predmet_id){
            let query = "SELECT predmet_id as 'Predmet_id', naziv as 'Naziv' FROM predmet WHERE predmet_id = ?";
            let table = [req.body.predmet_id];
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
predmetPopis: (req, res, next) => {
    try{
        let query = "SELECT predmet_id as 'Predmet_id', naziv as 'Naziv' FROM predmet;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},
predmetDodaj: (req, res, next) => {
    try{
        if(req.body.predmet_id && req.body.naziv){
            let predmet = {
                predmet_id: req.body.predmet_id,
                naziv: req.body.naziv
            };
            let query = "insert into predmet SET ?";
            let table = [predmet];
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
predmetUredi: (req, res, next) => {
    try{
        if(req.body.predmet_id){
            let predmet = {
                //predmet_id: req.body.predmet_id,
                naziv: req.body.naziv
            };
            let query = "update predmet set ? where predmet_id = ?";
            let table = [predmet, req.body.predmet_id];
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
predmetObrisi: (req, res, next) => {
    try{
        if(req.body.predmet_id){
            let query = "delete from predmet where predmet_id=?" ;
            let table =  [req.body.predmet_id];
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

module.exports = predmeti;