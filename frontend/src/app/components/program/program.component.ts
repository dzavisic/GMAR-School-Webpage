import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function svi(data:any):any;

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
    let url = "http://localhost:3014/api/studijskiprogramPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    if(localStorage.getItem('panelrole')==="user"){
      let a = document.getElementById('addprog');
      if(a!=null){
        a.hidden=true;
      }
      let c = document.getElementById('delprog');
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
  unos:string="";

  /* PRETRAZI RAZREDOV PROGRAM */
  pretraziRazred(){
    let url = "http://localhost:3014/api/studijskiprogram";
    let godina = this.unos[0];
    let razred = this.unos[1];
    this.http.post(url,{ godina:godina, razred_naziv:razred }).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
    this.unos = "";
  };

  godina_godina_id:string="";
  razred_razred_id:string="";
  smjer_smjer_id:string="";
  predmet_predmet_id:string="";

  /* DODAJ PROGRAM */
  dodajProgram(){
    let url = "http://localhost:3014/api/studijskiprogramDodaj";
    let program = {
      godina_godina_id:this.godina_godina_id,
      razred_razred_id:this.razred_razred_id,
      smjer_smjer_id:this.smjer_smjer_id,
      predmet_predmet_id:this.predmet_predmet_id
    }
    this.http.post(url,program).toPromise().then((data:any) => {
      this.pretrazisvePrograme();
    });
    this.godina_godina_id=""; this.razred_razred_id=""; this.smjer_smjer_id=""; this.predmet_predmet_id="";
  };

  /* OBRISI PROGRAM */
  obrisiProgram(){
    let url = "http://localhost:3014/api/studijskiprogramObrisi";
    let program = {
      godina_godina_id:this.godina_godina_id,
      razred_razred_id:this.razred_razred_id,
      smjer_smjer_id:this.smjer_smjer_id,
      predmet_predmet_id:this.predmet_predmet_id
    }
    this.http.post(url,program).toPromise().then((data:any) => {
      this.pretrazisvePrograme();
    });
    this.godina_godina_id=""; this.razred_razred_id=""; this.smjer_smjer_id=""; this.predmet_predmet_id="";
  };

  /* PRETRAZI SVE PROGRAME */
  pretrazisvePrograme(){
    let url = "http://localhost:3014/api/studijskiprogramPopis";
    this.http.post(url,{}).toPromise().then((data:any) => {
      svi(JSON.stringify(data));
    });
  };

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  };

}
