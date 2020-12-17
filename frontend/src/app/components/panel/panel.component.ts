import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("Token has expired!");
      window.location.href="http://localhost:4200/prijava";
    },1800000);
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

  odjava():void{
    if(!!localStorage.getItem('token')==true){
      localStorage.removeItem('token');
      localStorage.removeItem('panelrole');
      console.log("User Signed out successfully!");
    }
    window.location.href="http://localhost:4200/panel";
  };

}
