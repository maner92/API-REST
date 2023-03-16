import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  constructor(private http: HttpClient) { }

  post(formData:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post('http://127.0.0.1:8000/test/',formData)
  }
}
