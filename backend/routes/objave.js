var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var objava = {
    objavaDodaj: (req, res, next) => {
        try{
            if(req.body.srcImg, req.body.naslov, req.body.sadrzaj, req.body.datum, req.body.autor ){
                let obj = {
                    srcImg: req.body.srcImg,
                    naslov: req.body.naslov,
                    sadrzaj: req.body.sadrzaj,
                    datum: req.body.datum,
                    autor: req.body.autor
                };
                let query = "insert into objave SET ?";
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
    objava: (req, res, next) => {
        try{
            let query = "select * from objave;";
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }catch(err){
            console.log(err);
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
        }
    },

};

module.exports = objava;
