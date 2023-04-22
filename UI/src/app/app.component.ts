import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  selectedFile : any;

  constructor(private http: HttpClient){}

  onFileSelected(event: any) {
    this.selectedFile = event?.target.files[0];
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:3000/api/upload', formData).subscribe(response => {
      console.log("uploaded", response);
    })
  }

  
}
