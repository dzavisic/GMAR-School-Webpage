import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function jedan(data:any):any;
declare function svi(data:any):any;

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/predmetPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('addpred');
      if(a!=null){
        a.hidden=true;
      }
      let b = document.getElementById('updpred');
      if(b!=null){
        b.hidden=true;
      }
      let c = document.getElementById('delpred');
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

  /* PRETRAZI SVE PREDMETE */
  pretrazisvePredmete(){
    let url = "http://localhost:3014/api/predmetPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
  };

  predmet_id:string="";
  naziv:string="";

  /* PRETRAZI PREDMET */
  pretraziPredmet(){
    let url = "http://localhost:3014/api/predmet";
    this.http.post(url, { predmet_id:this.predmet_id }).toPromise().then((data:any)=>{
      jedan(JSON.stringify(data));
    });
    this.predmet_id="";
  };

  /* DODAJ PREDMET */
  dodajPredmet(){
    let url = "http://localhost:3014/api/predmetDodaj";
    this.http.post(url, { predmet_id:this.predmet_id, naziv:this.naziv }).toPromise().then((data:any)=>{
      this.pretrazisvePredmete();
    });
    this.predmet_id=""; this.naziv="";
  };

  /* AZURIRAJ PREDMET */
  azurirajPredmet(){
    let url = "http://localhost:3014/api/predmetUredi";
    this.http.post(url, { predmet_id:this.predmet_id, naziv:this.naziv }).toPromise().then((data:any)=>{
      this.pretrazisvePredmete();
    });
    this.predmet_id=""; this.naziv="";
  };

  /* OBRISI PREDMET */
  obrisiPredmet(){
    let url = "http://localhost:3014/api/predmetObrisi";
    this.http.post(url, { predmet_id:this.predmet_id}).toPromise().then((data:any)=>{
      this.pretrazisvePredmete();
    });
    this.predmet_id=""; this.naziv="";
  };

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };
}
