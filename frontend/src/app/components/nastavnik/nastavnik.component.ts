import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function svi(data:any): any;
declare function jedan(data:any): any;


@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  constructor(private http:HttpClient) { }

  /* INICIJALIZACIJA TABLICE PRILIKOM OTVARANJA KARTICE NASTAVNIK */
  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/nastavnikPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('addnast');
      if(a!=null){
        a.hidden=true;
      }
      let b = document.getElementById('updnast');
      if(b!=null){
        b.hidden=true;
      }
      let c = document.getElementById('delnast');
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
  };

  /* ngModeli */
  unos:string="";
  mat_br:string="";
  ime:string="";
  prezime:string="";
  dob:string="";
  titula:string="";
  tel:string="";
  kabinet_broj:string="";
  kabinet_kat:string="";
  email:string="";
  password:string="";
  panelrole:string="";

  /* PRETRAGA NASTAVNIKA */
  pretraziNastavnika(){
    /* funkcija za provjeru razmaka u stringu */ 
    function hasWhiteSpace(neki:any) {
      return neki.indexOf(' ') >= 0;
    }
    /* SLUCAJ DA JE IME I PREZIME */ 
    if(hasWhiteSpace(this.unos)==true){
      let url = "http://localhost:3014/api/nastavnik";
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
        let url = "http://localhost:3014/api/nastavnik";
        let mat_br=this.unos;
        this.http.post(url,{ mat_br:mat_br }).toPromise().then((data:any) => {
          jedan(JSON.stringify(data));
        });
      }
      /* SLUCAJ DA JE ILI IME ILI PREZIME */
      else{
        let url = "http://localhost:3014/api/nastavnik";
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

  /* PRETRAŽI SVE NASTAVNIKE */
  pretrazisveNastavnike(){
    let url = "http://localhost:3014/api/nastavnikPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
  };

  /* DODAJ NASTAVNIKA */
  dodajNastavnika(){
    let url = "http://localhost:3014/api/nastavnikDodaj";
    let nastavnik = {
      mat_br:this.mat_br,
      ime:this.ime,
      prezime:this.prezime,
      dob:this.dob,
      titula:this.titula,
      tel:this.tel,
      kabinet_broj:this.kabinet_broj,
      kabinet_kat:this.kabinet_kat,
      email:this.email,
      password:this.password,
      panelrole:this.panelrole
    };
    if(this.password==="" || this.panelrole==="" || this.mat_br==="" || this.ime==="" || this.prezime==="" || this.dob==="" || this.titula==="" || this.tel==="" || this.kabinet_broj==="" || this.kabinet_kat==="" || this.email===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }
    else{
      this.http.post(url,nastavnik).toPromise().then((data:any) => {
        console.log("Database->Nastavnik dodan.");
        this.pretrazisveNastavnike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.password=""; this.panelrole=""; this.mat_br=""; this.ime=""; this.prezime=""; this.dob=""; this.titula=""; this.tel=""; this.kabinet_broj=""; this.kabinet_kat=""; this.email="";
  };

  /* AŽURIRAJ NASTAVNIKA */
  azurirajNastavnika(){
    let url = "http://localhost:3014/api/nastavnikUredi";
    let nastavnik = {
      mat_br:this.mat_br,
      ime:this.ime,
      prezime:this.prezime,
      dob:this.dob,
      titula:this.titula,
      tel:this.tel,
      kabinet_broj:this.kabinet_broj,
      kabinet_kat:this.kabinet_kat,
      email:this.email,
      password:this.password,
      panelrole:this.panelrole
    };
    if(this.password==="" || this.panelrole==="" || this.mat_br==="" || this.ime==="" || this.prezime==="" || this.dob==="" || this.titula==="" || this.tel==="" || this.kabinet_broj==="" || this.kabinet_kat==="" || this.email===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }
    else{
      this.http.post(url,nastavnik).toPromise().then((data:any) => {
        console.log("Database->Nastavnik ažuriran.");
        this.pretrazisveNastavnike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.password=""; this.panelrole=""; this.mat_br=""; this.ime=""; this.prezime=""; this.dob=""; this.titula=""; this.tel=""; this.kabinet_broj=""; this.kabinet_kat=""; this.email="";
  };

  /* OBRIŠI NASTAVNIKA */
  obrisiNastavnika(){
    let url = "http://localhost:3014/api/nastavnikObrisi";
    let nastavnik = {
      mat_br:this.mat_br,
      ime:this.ime,
      prezime:this.prezime
    };
    if(this.mat_br==="" || this.ime==="" || this.prezime===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }else{
      this.http.post(url,nastavnik).toPromise().then((data:any) => {
        console.log("Database->Nastavnik obrisan.");
        this.pretrazisveNastavnike();
      });
    }
    /* VRACANJE VRIJEDNOSTI NA INCIJALNO */
    this.mat_br=""; this.ime=""; this.prezime="";
  }

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };
};
