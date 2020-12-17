import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function makeToken():any;
var token:string="";

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  user:any;
  email:string="";
  password:string="";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      window.location.href="http://localhost:4200/panel";
    }
  }

  prijava(){
    let url = "http://localhost:3014/api/nastavnikPrijavaAdmin";
    let email = this.email;
    let password = this.password;
    let succ = false;
    this.http.post(url,{ email:email, password:password }).toPromise().then((data:any) => {
      if(data['success']==true){
        let tokenized = makeToken();
        succ=true;
        localStorage.setItem('token', tokenized);
        localStorage.setItem('panelrole', 'admin');
        window.location.href="http://localhost:4200/panel";
      }
    });
    if(succ===false){
      url = "http://localhost:3014/api/nastavnikPrijavaUser";
      this.http.post(url,{ email:email, password:password }).toPromise().then((data:any) => {
        if(data['success']==true){
          let tokenized = makeToken();
          succ=false;
          localStorage.setItem('token', tokenized);
          localStorage.setItem('panelrole', 'user');
          window.location.href="http://localhost:4200/panel";
        }else{
          alert("UPOZORENJE: Neispravni unos podataka!");
          window.location.reload();
        }
      });
    }
  }

  odjava(){
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
  }
}