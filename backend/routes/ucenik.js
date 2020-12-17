var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var ucenici = {

ucenik: (req,res,next) => {
    try{
        if(req.body.mat_br_uck || (req.body.ime && req.body.prezime) || req.body.prezime || req.body.ime){
            if(req.body.mat_br_uck){
                let query = "SELECT mat_br_uck AS 'Matični broj učenika', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', tel AS 'Telefon', email AS 'Email' FROM ucenik WHERE mat_br_uck = ?";
                let table = [req.body.mat_br_uck];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
            else if(req.body.ime && req.body.prezime){
                let query = "SELECT mat_br_uck AS 'Matični broj učenika', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', tel AS 'Telefon', email AS 'Email' FROM ucenik WHERE ime = ? and prezime = ?";
                let table = [req.body.ime, req.body.prezime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
            else if(req.body.ime){
                let query = "SELECT mat_br_uck AS 'Matični broj učenika', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', tel AS 'Telefon', email AS 'Email' FROM ucenik WHERE ime = ?";
                let table = [req.body.ime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }else if(req.body.prezime){
                let query = "SELECT mat_br_uck AS 'Matični broj učenika', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', tel AS 'Telefon', email AS 'Email' FROM ucenik WHERE prezime = ?";
                let table = [req.body.prezime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
            /*
            let query = "SELECT * FROM nastavnik WHERE mat_br = ?";
            let table = [req.body.mat_br];
            query = mysql.format(query, table);
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });*/
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

ucenikPopis: function(req,res,next) {
    try{
        let query = "SELECT mat_br_uck AS 'Matični broj učenika', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', tel AS 'Telefon', email AS 'Email' FROM ucenik;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},


ucenikDodaj: (req,res,next) => {
    try{
        if(req.body.mat_br_uck && req.body.ime && req.body.prezime && req.body.dob && req.body.tel && req.body.email){
            let ucenik = {
                mat_br_uck: req.body.mat_br_uck,
                ime: req.body.ime,
                prezime: req.body.prezime,
                dob: req.body.dob,
                tel: req.body.tel,
                email: req.body.email
            };
            let query = "insert into ucenik SET ?";
            let table = [ucenik];
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

ucenikUredi: (req,res,next) => {
    try{
        if(req.body.mat_br_uck && req.body.ime && req.body.prezime && req.body.dob && req.body.tel && req.body.email){
            let ucenik = {
                //mat_br_uck: req.body.mat_br_uck,
                ime: req.body.ime,
                prezime: req.body.prezime,
                dob: req.body.dob,
                tel: req.body.tel,
                email: req.body.email
            };
            let query = "update ucenik set ? where mat_br_uck = ?";
            let table = [ucenik, req.body.mat_br_uck];
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

ucenikObrisi: (req,res,next) => {
    try{
        if(req.body.mat_br_uck){
            let query = "delete from ucenik where mat_br_uck=?" ;
            let table =  [req.body.mat_br_uck];
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

module.exports = ucenici;