import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function svi(data:any): any;
declare function jedan(data:any): any;

@Component({
  selector: 'app-ucenik',
  templateUrl: './ucenik.component.html',
  styleUrls: ['./ucenik.component.css']
})
export class UcenikComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/ucenikPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('adduck');
      if(a!=null){
        a.hidden=true;
      }
      let b = document.getElementById('upduck');
      if(b!=null){
        b.hidden=true;
      }
      let c = document.getElementById('deluck');
      if(c!=null){
        c.hidden=true;
      }
    };
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('obavijesti');
      if(a!=null){
        a.hidden=true;
      }
      let b = document.getElementById('carnet');
      if(b!=null){
        b.hidden=true;
      }
    };
  }

  /* ngModeli */
  unos:string="";
  mat_br_uck:string="";
  ime:string="";
  prezime:string="";
  dob:string="";
  tel:string="";
  email:string="";
  /* PRETRAGA NASTAVNIKA */
  pretraziUcenika(){
    /* funkcija za provjeru razmaka u stringu */ 
    function hasWhiteSpace(neki:any) {
      return neki.indexOf(' ') >= 0;
    }
    /* SLUCAJ DA JE IME I PREZIME */ 
    if(hasWhiteSpace(this.unos)==true){
      let url = "http://localhost:3014/api/ucenik";
      var splited = this.unos.split(" ",2);
      var ime = splited[0];
      var prezime = splited[1];
      this.http.post(url,{ ime:ime, prezime:prezime }).toPromise().then((data:any) => {
        jedan(JSON.stringify(data));
      });
    }
    else{
      /* SLUCAJ DA JE MATICNI BROJ (mat_br) */
      if(isNaN(+this.unos)==false){
        let url = "http://localhost:3014/api/ucenik";
        let mat_br_uck=this.unos;
        this.http.post(url,{ mat_br_uck:mat_br_uck }).toPromise().then((data:any) => {
          jedan(JSON.stringify(data));
        });
      }
      /* SLUCAJ DA JE ILI IME ILI PREZIME */
      else{
        let url = "http://localhost:3014/api/ucenik";
        let ime = this.unos;
        this.http.post(url,{ ime:ime }).toPromise().then((data:any) => {
          jedan(JSON.stringify(data));
        });
        let prezime = this.unos;
        this.http.post(url,{ prezime:prezime }).toPromise().then((data:any) => {
          jedan(JSON.stringify(data));
        });
      }
    }
    // vracanje na inicijalno
    this.unos="";
  };

  /* PRETRAŽI SVE UCENIKE */
  pretrazisveUcenike(){
    let url = "http://localhost:3014/api/ucenikPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
  };

  /* DODAJ UCENIKA */
  dodajUcenika(){
    let url = "http://localhost:3014/api/ucenikDodaj";
    let ucenik = {
      mat_br_uck:this.mat_br_uck,
      ime:this.ime,
      prezime:this.prezime,
      dob:this.dob,
      tel:this.tel,
      email:this.email
    };
    if(this.mat_br_uck==="" || this.ime==="" || this.prezime==="" || this.dob==="" || this.tel==="" || this.email===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }
    else{
      this.http.post(url,ucenik).toPromise().then((data:any) => {
        console.log("Database->Ucenik dodan.");
        this.pretrazisveUcenike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.mat_br_uck=""; this.ime=""; this.prezime=""; this.dob=""; this.tel=""; this.email="";
  };

  /* AŽURIRAJ UNCENIKA */
  azurirajUcenika(){
    let url = "http://localhost:3014/api/ucenikUredi";
    let nastavnik = {
      mat_br_uck:this.mat_br_uck,
      ime:this.ime,
      prezime:this.prezime,
      dob:this.dob,
      tel:this.tel,
      email:this.email
    };
    if(this.mat_br_uck==="" || this.ime==="" || this.prezime==="" || this.dob==="" || this.tel==="" || this.email===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }
    else{
      this.http.post(url,nastavnik).toPromise().then((data:any) => {
        console.log("Database->Nastavnik ažuriran.");
        this.pretrazisveUcenike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.mat_br_uck=""; this.ime=""; this.prezime=""; this.dob=""; this.tel=""; this.email="";
  };

  /* OBRIŠI UCENIKA */
  obrisiUcenika(){
    let url = "http://localhost:3014/api/ucenikObrisi";
    let nastavnik = {
      mat_br_uck:this.mat_br_uck,
      ime:this.ime,
      prezime:this.prezime
    };
    if(this.mat_br_uck==="" || this.ime==="" || this.prezime===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }else{
      this.http.post(url,nastavnik).toPromise().then((data:any) => {
        console.log("Database->Ucenik obrisan.");
        this.pretrazisveUcenike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.mat_br_uck=""; this.ime=""; this.prezime="";
  }

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };

}
