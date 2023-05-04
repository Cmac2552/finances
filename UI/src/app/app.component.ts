import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  selectedFile : any;
  stuff: any[] = [];

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

  
}
