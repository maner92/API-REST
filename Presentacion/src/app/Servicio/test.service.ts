import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // constructor( private http_C: HttpClient) { 
  //   /**
  //    * getTest
  //    */
  // }
  // public getTest() : Observable<any> {
  //   return this.http_C.get("http://localhost:8000/test/")
  // }
    constructor(private http: HttpClient) { }
    post(body:any){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      console.log(body);
      
      return this.http.post('http://127.0.0.1:8000/test/',body)
    }
}
