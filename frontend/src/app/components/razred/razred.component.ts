import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function jedan(data:any):any;
declare function svi(data:any):any;

@Component({
  selector: 'app-razred',
  templateUrl: './razred.component.html',
  styleUrls: ['./razred.component.css']
})
export class RazredComponent implements OnInit {
  unos:string="";
  godina:string="";
  godina_godina_id:string="";
  razred_razred_id:string="";
  razred_naziv:string="";
  ucenik_mat_br_uck:string="";
  constructor(private http:HttpClient) { }

  ngOnInit(){
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/uckrazPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('addraz');
      if(a!=null){
        a.hidden=true;
      }
      let b = document.getElementById('updraz');
      if(b!=null){
        b.hidden=true;
      }
      let c = document.getElementById('delraz');
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

  /* PRETRAZI RAZRED */
  pretraziRazred(){
    if(this.unos.length>1){
      if(isNaN(+this.unos)==false){
        this.ucenik_mat_br_uck = this.unos;
        let url = "http://localhost:3014/api/uckraz";
        this.http.post(url,{ ucenik_mat_br_uck: this.ucenik_mat_br_uck }).toPromise().then((data:any) => {
          jedan(JSON.stringify(data));
        });
      }else{
        this.godina=this.unos[0];
        this.razred_naziv=this.unos[1];
        let url = "http://localhost:3014/api/uckraz";
        this.http.post(url,{ godina: this.godina, razred_naziv: this.razred_naziv }).toPromise().then((data:any) => {
          svi(JSON.stringify(data));
        });
      }
    }else{
      this.ucenik_mat_br_uck = this.unos;
      let url = "http://localhost:3014/api/uckraz";
      this.http.post(url,{ ucenik_mat_br_uck: this.ucenik_mat_br_uck }).toPromise().then((data:any) => {
        jedan(JSON.stringify(data));
      });
    }
    // vracanje na inicijalno
    this.unos=""; this.godina=""; this.razred_naziv=""; this.ucenik_mat_br_uck="";
  };

  /* PRETRAZI SVE RAZREDE */
  pretraziSveRazrede(){
    let url = "http://localhost:3014/api/uckrazPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
  };

  /* DODAJ UCENIKA U RAZRED */
  dodajURazred(){
    let url = "http://localhost:3014/api/uckrazDodaj";
    this.http.post(url,{ godina_godina_id: this.godina_godina_id, razred_razred_id:this.razred_razred_id, ucenik_mat_br_uck: this.ucenik_mat_br_uck }).toPromise().then((data:any) => {
      this.pretraziSveRazrede();
    });
    this.godina_godina_id=""; this.razred_razred_id=""; this.ucenik_mat_br_uck="";
  };

  /* AZURIRAJ UCENIKOV RAZRED */
  azurirajRazred(){
    let url = "http://localhost:3014/api/uckrazUredi";
    this.http.post(url,{ godina_godina_id:this.godina_godina_id, razred_razred_id:this.razred_razred_id, ucenik_mat_br_uck: this.ucenik_mat_br_uck }).toPromise().then((data:any) => {
      this.pretraziSveRazrede();
    });
    this.godina_godina_id=""; this.razred_razred_id=""; this.ucenik_mat_br_uck="";
  };

  /* OBRISI UCENIKA IZ RAZREDA */
  obrisiUcenika(){
    let url = "http://localhost:3014/api/uckrazObrisi";
    this.http.post(url,{ godina_godina_id:this.godina_godina_id, razred_razred_id:this.razred_razred_id, ucenik_mat_br_uck: this.ucenik_mat_br_uck }).toPromise().then((data:any) => {
      this.pretraziSveRazrede();
    });
    this.godina_godina_id=""; this.razred_razred_id=""; this.ucenik_mat_br_uck="";
  };

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };


}
