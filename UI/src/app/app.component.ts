import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
export interface test4{
  _links: test2
}
export interface test2{
  hello:string;
  world: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'UI';
  selectedFile : any;
  stuff: any[] = [];
  temp3:any

  constructor(private http: HttpClient){}

  onFileSelected(event: any) {
    this.selectedFile = event?.target.files[0];
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:3000/timeframeInfo/upload', formData).subscribe(response => {
      console.log("uploaded", response);
    })


  }
  getTransactionsNow(){
    this.http.get<any>('http://localhost:3000/transactions/2%2F2023').subscribe(data =>console.log(data));
  }

  getStoresNow(){
    this.http.get<any>('http://localhost:3000/stores').subscribe(data=>console.log(data));
  }

  updateStoresNow(){

    this.http.post('http://localhost:3000/stores/updateDesignation',{systemName:'WAWA',designation:'Food'}).subscribe(data=>console.log(data));
  }

  createAccount(){
    console.log(this.temp3);
    // this.http.post('http://localhost:3000/accounts/create-account',{name:this.temp3}).subscribe(data=>console.log(data));
    this.http.post('http://localhost:3000/accounts/update-balance',{name:this.temp3, balance:1000}).subscribe(data=>console.log(data));
    this.http.get<any>('http://localhost:3000/accounts').subscribe(data=>console.log(data));

  }

  
}
