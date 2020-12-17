import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare function makeNewPost(data1:any, data2:any, data3:any, data4:any, data5:any): any;
declare function makeNewCarnet(data1:any, data2:any, data3:any, data4:any): any;
@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  duljina:number=0;
  x:number=0;
  srcImg1:string="";
  naslov1:string="";
  sadrzaj1:string="";
  datum1:string="";
  autor1:string="";
  dataNeeded:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let url = "http://localhost:3014/api/objava";
    this.http.post(url,{}).toPromise().then((data:any) => {
      if(data['data'].length==0){
        console.log("Nema novih obavijesti!");
      }else{
        this.duljina=data['data'].length;
        this.dataNeeded=data['data'];
        this.objaviSve(this.duljina, this.dataNeeded);
      }
      this.duljina=0; this.dataNeeded;
    });

    let url2 = "http://localhost:3014/api/carnet";
    this.http.post(url2,{}).toPromise().then((data:any) => {
      if(data['data'].length==0){
        console.log("Nema novih carnet objava!");
      }else{
        this.duljina = data['data'].length;
        this.dataNeeded=data['data'];
        this.objaviCarnet(this.duljina, this.dataNeeded);
      }
      this.duljina=0; this.dataNeeded;
    });
  };
  urlcar1:string="";
  objaviCarnet(duljina:any, dataNeeded:any){
    let y = 0;
    for(y; y<duljina; y=y+1){
      this.datum1=dataNeeded[y]['datum'];
      this.urlcar1=dataNeeded[y]['urlcar'];
      this.naslov1=dataNeeded[y]['naslov'];
      this.sadrzaj1=dataNeeded[y]['sadrzaj'];
      makeNewCarnet(this.datum1, this.urlcar1, this.naslov1, this.sadrzaj1);
    };
    this.datum1=""; this.naslov1=""; this.urlcar1=""; this.sadrzaj1="";
  };

  objaviSve(duljina:any, dataNeeded:any){
    let y=0;
    //let dataNeeded:any;
    for(y;y<duljina;y=y+1){
      this.srcImg1 = dataNeeded[y]['srcImg'];
      this.naslov1 = dataNeeded[y]['naslov'];
      this.sadrzaj1 = dataNeeded[y]['sadrzaj'];
      this.datum1 = dataNeeded[y]['datum'];
      this.autor1 = dataNeeded[y]['autor'];
      makeNewPost(this.srcImg1, this.naslov1, this.sadrzaj1, this.datum1, this.autor1);
    };
    y=0; this.srcImg1=""; this.naslov1=""; this.sadrzaj1=""; this.datum1=""; this.autor1="";
  };
  
}
