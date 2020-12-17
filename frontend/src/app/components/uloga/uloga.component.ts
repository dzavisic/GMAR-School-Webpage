import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function jedan(data:any):any;
declare function svi(data:any):any;

@Component({
  selector: 'app-uloga',
  templateUrl: './uloga.component.html',
  styleUrls: ['./uloga.component.css']
})
export class UlogaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/ulogaPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('addulg');
      if(a!=null){
        a.hidden=true;
      }
      let c = document.getElementById('delulg');
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
  naziv:string="";
  nastavnik_mat_br:string="";
  predmet_predmet_id:string="";
  unos:string="";

  /* PRETRAZI ULOGU */
  pretraziUlogu(){
    let url = "http://localhost:3014/api/uloga";
    this.http.post(url,{ unos:this.unos }).toPromise().then((data:any) => {
      console.log(data);
      jedan(JSON.stringify(data));
    });
    this.unos="";
  };

  /* PRETRAZI SVE ULOGE */
  pretrazisveUloge(){
    let url = "http://localhost:3014/api/ulogaPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      console.log(data);
      svi(JSON.stringify(data));
    });
  };

  /* DODAJ ULOGU */
  dodajUlogu(){
    let url = "http://localhost:3014/api/ulogaDodaj";
    if(this.naziv==="" || this.predmet_predmet_id==="" || this.nastavnik_mat_br===""){
      alert("UPOZORENJE: Ispunite sva potrebna polja!")
    }
    else{
      this.http.post(url,{ naziv:this.naziv, predmet_predmet_id:this.predmet_predmet_id, nastavnik_mat_br:this.nastavnik_mat_br }).toPromise().then((data:any) => {
        console.log("Database->Uloga dodana.");
        this.pretrazisveUloge();
      });
    }
    this.naziv=""; this.nastavnik_mat_br=""; this.predmet_predmet_id="";
  };

  /* OBRISI ULOGU */
  obrisiUlogu(){
    let url = "http://localhost:3014/api/ulogaObrisi";
    this.http.post(url,{ naziv:this.naziv, predmet_predmet_id:this.predmet_predmet_id, nastavnik_mat_br:this.nastavnik_mat_br }).toPromise().then((data:any) => {
      console.log("Database->Uloga obrisana.")
      this.pretrazisveUloge();
    });
    this.naziv=""; this.nastavnik_mat_br=""; this.predmet_predmet_id="";
  };

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };
  
}
