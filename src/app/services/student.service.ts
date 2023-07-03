import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = "https://mocki.io/v1/65781668-602e-41a9-ac6a-ccbcb60964d4";


  constructor(public http : HttpClient) { }

 

  getUserDetails():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
