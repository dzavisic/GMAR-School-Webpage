import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obavijest',
  templateUrl: './obavijest.component.html',
  styleUrls: ['./obavijest.component.css']
})
export class ObavijestComponent implements OnInit {

  srcImg:string="";
  naslov:string="";
  sadrzaj:string="";
  datum:string="";
  autor:string="";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
  }
  
  /* POSALJI OBAVIJEST U BAZU */
  objavi(){
    let url = "http://localhost:3014/api/objavaDodaj";
    this.http.post(url,{ srcImg:this.srcImg, naslov:this.naslov, sadrzaj:this.sadrzaj, datum:this.datum, autor:this.autor  }).toPromise().then((data:any) => {
        console.log("Database-> Objava added.");
    });
    this.srcImg=""; this.naslov=""; this.sadrzaj=""; this.datum=""; this.autor="";
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
