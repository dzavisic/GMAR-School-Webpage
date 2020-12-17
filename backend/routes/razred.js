var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var razredi = {

razred: (req,res,next) => {
    try{
        if(req.body.razred_id){
            let query = "SELECT * FROM razred WHERE razred_id = ?";
            let table = [req.body.razred_id];
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

razredPopis: (req,res,next) => {
    try{
        let query = "SELECT * FROM razred;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

razredDodaj: (req,res,next) => {
    try{
        if(req.body.razred_id && req.body.naziv){
            let razred = {
                razred_id: req.body.razred_id,
                naziv: req.body.naziv
            };
            let query = "insert into razred SET ?";
            let table = [razred];
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

razredUredi: (req,res,next) => {
    try{
        if(req.body.razred_id){
            let razred = {
                //razred_id: req.body.razred_id,
                naziv: req.body.naziv
            };
            let query = "update razred set ? where razred_id = ?";
            let table = [razred, req.body.razred_id];
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
razredObrisi: (req,res,next) => {
    try{
        if(req.body.razred_id){
            let query = "delete from razred where razred_id=?" ;
            let table =  [req.body.razred_id];
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

module.exports = razredi;