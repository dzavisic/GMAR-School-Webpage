var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var carneti = {
    carnetDodaj: (req, res, next) => {
        try{
            if(req.body.datum, req.body.urlcar, req.body.naslov, req.body.sadrzaj ){
                let obj = {
                    urlcar: req.body.urlcar,
                    datum: req.body.datum,
                    naslov: req.body.naslov,
                    sadrzaj: req.body.sadrzaj,
                };
                let query = "insert into carnet SET ?";
                let table = [obj];
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
    carnet: (req, res, next) => {
        try{
            let query = "select * from carnet;";
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }catch(err){
            console.log(err);
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
        }
    },

};

module.exports = carneti;
