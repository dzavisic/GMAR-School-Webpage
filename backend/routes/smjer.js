var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var smjerovi = {

smjer: (req, res, next) => {
    try{
        if(req.body.smjer_id){
            let query = "SELECT * FROM smjer WHERE smjer_id = ?";
            let table = [req.body.smjer_id];
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
smjerPopis: (req, res, next) => {
    try{
        let query = "SELECT * FROM smjer;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},
smjerDodaj: (req, res, next) => {
    try{
        if(req.body.smjer_id && req.body.naziv){
            let smjer = {
                smjer_id: req.body.smjer_id,
                naziv: req.body.naziv
            };
            let query = "insert into smjer SET ?";
            let table = [smjer];
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
smjerUredi: (req, res, next) => {
    try{
        if(req.body.smjer_id){
            let smjer = {
                //smjer_id: req.body.smjer_id,
                naziv: req.body.naziv
            };
            let query = "update smjer set ? where smjer_id = ?";
            let table = [smjer, req.body.smjer_id];
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
smjerObrisi: (req, res, next) => {
    try{
        if(req.body.smjer_id){
            let query = "delete from smjer where smjer_id=?" ;
            let table =  [req.body.smjer_id];
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

module.exports = smjerovi;