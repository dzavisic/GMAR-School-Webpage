var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var log_prijava = require('./log_prijava.js');
var funkcije    = require('./funkcije.js');

var prijavaweb = {


prijavaweb : function(req, res, next){
    //console.log('/prijavaweb');
        function f_prijavaweb(a, callback){
            var query = "SELECT * FROM nastavnik WHERE email=? AND password=?";
            var table = [req.body.email, req.body.password];
            query = mysql.format(query, table); 
            funkcije.mysql_queryV2(query, function(podaci){
                //console.log(podaci)
                if(podaci.success == true){
                    var user = apiToken.addUser(req.body.korime);
                    podaci.data[0].token = user.token;
                    //console.log(user.token)
                    callback(true, podaci)
                }else{
                    callback(false, podaci)
                }
            });       
        }
    
        f_prijavaweb(req.body, function(rezultat, podaci){
            if(rezultat == true){
                log_prijava.prijava('WEB',null, req.body.korime, 1, req, function(rezultat, podaci){/*console.log('Upisivanje prijave:'+rezultat, podaci);*/});
                funkcije.posaljiRes(res, { success: true, message: 'Uspješno', status: rezultat, data: podaci.data });
            }else{
                log_prijava.prijava('WEB',null, req.body.korime, 0, req, function(rezultat, podaci){/*console.log('Upisivanje prijave:'+rezultat, podaci);*/});
                funkcije.posaljiRes(res, { success: false, message: 'Korisnik ne postoji ili je deaktiviran!', status: podaci.status, podaci:podaci.data });
            }
        })
    }

};


module.exports = prijavaweb;
