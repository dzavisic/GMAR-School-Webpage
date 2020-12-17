import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  datum:string="";
  urlcar:string="";
  naslov:string="";
  sadrzaj:string="";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
  }

  /* POSALJI CARNETOVU OBJAVU U BAZU */
  objaviCarnet(){
    let url = "http://localhost:3014/api/carnetDodaj";
    this.http.post(url,{ datum:this.datum, urlcar:this.urlcar, naslov:this.naslov, sadrzaj:this.sadrzaj }).toPromise().then((data:any) => {
        console.log("Database-> Carnet added.");
    });
    this.datum=""; this.urlcar=""; this.naslov=""; this.sadrzaj="";
  };
  
  odjava():void{
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
    window.location.href="http://localhost:4200/panel";
  };

}
