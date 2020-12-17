import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare function makeNewCarnet(data1:any, data2:any, data3:any, data4:any): any;
@Component({
  selector: 'app-raspored',
  templateUrl: './raspored.component.html',
  styleUrls: ['./raspored.component.css']
})
export class RasporedComponent implements OnInit {
  duljina:number=0;
  x:number=0;
  srcImg1:string="";
  naslov1:string="";
  sadrzaj1:string="";
  datum1:string="";
  autor1:string="";
  urlcar1:string="";
  dataNeeded:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
}
