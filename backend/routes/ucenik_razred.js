var mysql       = require('mysql');
var apiToken    = require('api-token');
var pool        = require('../connection');
var funkcije    = require('./funkcije.js');

var uck_raz = {
    uckraz: (req, res, next) => {
        try{
            if(req.body.godina && req.body.razred_naziv){
                let query = "SELECT g.naziv as 'Godina', r.naziv as 'Razred', u.ime as 'Ime', u.prezime as 'Prezime' \
                             FROM ucenik_razred AS ur \
                             INNER JOIN godina AS g ON g.godina_id=? \
                             INNER JOIN razred AS r ON r.naziv=? and r.razred_id = ur.razred_razred_id \
                             INNER JOIN ucenik AS u ON u.mat_br_uck=ur.ucenik_mat_br_uck \
                             WHERE ur.godina_godina_id=? and r.naziv=?;";
                let table = [req.body.godina,req.body.razred_naziv,req.body.godina,req.body.razred_naziv];
                query = mysql.format(query, table);
                funkcije.mysql_queryV2(query, function(podaci){
                    funkcije.posaljiRes(res, podaci);
                });
            }else if(req.body.ucenik_mat_br_uck){
                let query = "SELECT g.naziv as 'Godina', r.naziv as 'Razred', u.ime as 'Ime', u.prezime as 'Prezime' \
                             FROM ucenik_razred AS ur \
                             INNER JOIN godina AS g ON g.godina_id = ur.godina_godina_id \
                             INNER JOIN razred AS r ON r.razred_id = ur.razred_razred_id \
                             INNER JOIN ucenik AS u ON u.mat_br_uck=? \
                             WHERE ur.ucenik_mat_br_uck=?";
                let table = [req.body.ucenik_mat_br_uck,req.body.ucenik_mat_br_uck];
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
    uckrazPopis: (req, res, next) => {
        try{
            let query = "SELECT g.naziv as 'Godina', r.naziv as 'Razred', u.ime as 'Ime', u.prezime as 'Prezime' \
                         FROM ucenik_razred AS ur \
                         INNER JOIN godina AS g ON g.godina_id=ur.godina_godina_id \
                         INNER JOIN razred AS r ON r.razred_id = ur.razred_razred_id \
                         INNER JOIN ucenik AS u ON u.mat_br_uck=ur.ucenik_mat_br_uck \
                         ORDER BY ur.godina_godina_id;";
            funkcije.mysql_queryV2(query, function(podaci){
                funkcije.posaljiRes(res, podaci);
            });
        }catch(err){
            console.log(err);
            funkcije.posaljiRes(res,{ success: false, message: 'Greška, provjerite podatke koje šaljete.', status: 503, data:err});
        }
    },

    uckrazDodaj: (req, res, next) => {
        try{
            if(req.body.godina_godina_id && req.body.razred_razred_id && req.body.ucenik_mat_br_uck){
                let ucenik_razred = {
                    godina_godina_id: req.body.godina_godina_id,
                    razred_razred_id: req.body.razred_razred_id,
                    ucenik_mat_br_uck: req.body.ucenik_mat_br_uck
                };
                let query = "insert into ucenik_razred SET ?";
                let table = [ucenik_razred];
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
    uckrazUredi: (req, res, next) => {
        try{
            if(req.body.godina_godina_id, req.body.razred_razred_id,req.body.ucenik_mat_br_uck){
                let query = "update ucenik_razred set ? where ucenik_mat_br_uck = ?";
                let sett = {
                    godina_godina_id: req.body.godina_godina_id,
                    razred_razred_id: req.body.razred_razred_id
                }
                let table = [sett, req.body.ucenik_mat_br_uck];
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
    uckrazObrisi: (req, res, next) => {
        try{
            if(req.body.godina_godina_id && req.body.razred_razred_id && req.body.ucenik_mat_br_uck){
                let query = "delete from ucenik_razred where godina_godina_id=? and razred_razred_id=? and ucenik_mat_br_uck=?";
                let table = [req.body.godina_godina_id,req.body.razred_razred_id,req.body.ucenik_mat_br_uck];
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
}

module.exports = uck_raz;