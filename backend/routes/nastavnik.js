var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var nastavnici = {

nastavnik: (req,res,next) => {
    try{
        if(req.body.mat_br || (req.body.ime && req.body.prezime) || req.body.prezime || req.body.ime){
            if(req.body.mat_br){
                let query = "SELECT mat_br AS 'Matični broj', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', titula AS 'Titula', \
                                    tel AS 'Telefon', kabinet_broj AS 'Broj kabineta', kabinet_kat AS 'Kat kabineta', email AS 'Email' \
                             FROM nastavnik WHERE mat_br = ?";
                let table = [req.body.mat_br];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
            else if(req.body.ime && req.body.prezime){
                let query = "SELECT mat_br AS 'Matični broj', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', titula AS 'Titula', \
                                    tel AS 'Telefon', kabinet_broj AS 'Broj kabineta', kabinet_kat AS 'Kat kabineta', email AS 'Email' \
                             FROM nastavnik WHERE ime = ? and prezime = ?";
                let table = [req.body.ime, req.body.prezime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
            else if(req.body.ime){
                let query = "SELECT mat_br AS 'Matični broj', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', titula AS 'Titula', \
                                    tel AS 'Telefon', kabinet_broj AS 'Broj kabineta', kabinet_kat AS 'Kat kabineta', email AS 'Email' \
                             FROM nastavnik WHERE ime = ?";
                let table = [req.body.ime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }else if(req.body.prezime){
                let query = "SELECT mat_br AS 'Matični broj', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', titula AS 'Titula', \
                                    tel AS 'Telefon', kabinet_broj AS 'Broj kabineta', kabinet_kat AS 'Kat kabineta', email AS 'Email' \
                             FROM nastavnik WHERE prezime = ?";
                let table = [req.body.prezime];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }
        }else{
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 502, data:[]});
        }
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

nastavnikPopis: function(req,res,next) {
    try{
        let query = "SELECT mat_br AS 'Matični broj', ime AS 'Ime', prezime AS 'Prezime', dob AS 'Datum rođenja', titula AS 'Titula', \
                     tel AS 'Telefon', kabinet_broj AS 'Broj kabineta', kabinet_kat AS 'Kat kabineta', email AS 'Email' \
                     FROM nastavnik;";            
        funkcije.mysql_queryV2(query,(podaci)=>{
            funkcije.posaljiRes(res, podaci);
        });
    }catch(err){
        console.log(err);
        funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
    }
},

nastavnikDodaj: (req,res,next) => {
    try{
        if(req.body.mat_br && req.body.ime && req.body.prezime && req.body.dob && req.body.titula && req.body.tel && req.body.kabinet_broj && req.body.kabinet_kat && req.body.email && req.body.password && req.body.panelrole){
            let nastavnik = {
                mat_br: req.body.mat_br,
                ime: req.body.ime,
                prezime: req.body.prezime,
                dob: req.body.dob,
                titula: req.body.titula,
                tel: req.body.tel,
                kabinet_broj: req.body.kabinet_broj,
                kabinet_kat: req.body.kabinet_kat,
                email: req.body.email,
                password: req.body.password,
                panelrole: req.body.panelrole
            };
            let query = "insert into nastavnik SET ?";
            let table = [nastavnik];
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

nastavnikUredi: (req,res,next) => {
    try{
        if(req.body.mat_br && req.body.ime && req.body.prezime && req.body.dob && req.body.titula && req.body.tel && req.body.kabinet_broj && req.body.kabinet_kat && req.body.email && req.body.password && req.body.panelrole){
            let nastavnik = {
                //mat_br: req.body.mat_br,
                ime: req.body.ime,
                prezime: req.body.prezime,
                dob: req.body.dob,
                titula: req.body.titula,
                tel: req.body.tel,
                kabinet_broj: req.body.kabinet_broj,
                kabinet_kat: req.body.kabinet_kat,
                email: req.body.email,
                password: req.body.password,
                panelrole: req.body.panelrole
            };
            let query = "update nastavnik set ? where mat_br = ?";
            let table = [nastavnik, req.body.mat_br];
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

nastavnikObrisi: (req,res,next) => {
    try{
        if(req.body.mat_br && req.body.ime && req.body.prezime){
            let query = "delete from nastavnik where mat_br=? and ime=? and prezime=?" ;
            let table =  [req.body.mat_br,req.body.ime,req.body.prezime];
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

nastavnikPrijavaAdmin: (req, res, next)=>{
    try{
        if(req.body.email && req.body.password){
            let query = "select * from nastavnik where email=? and password=? and panelrole='admin'" ;
            let table =  [req.body.email, req.body.password];
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
nastavnikPrijavaUser: (req, res, next)=>{
    try{
        if(req.body.email && req.body.password){
            let query = "select * from nastavnik where email=? and password=? and panelrole='user'" ;
            let table =  [req.body.email, req.body.password];
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

module.exports = nastavnici;