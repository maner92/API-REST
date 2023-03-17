import { Component } from '@angular/core';
import {  TestService } from './Servicio/test.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // response: any ;
  nick_name = "";
  full_name = "";

  constructor(private testService : TestService ){}
  title = 'Presentacion';
  public onSubmit(){
    if(this.nick_name === '' || this.full_name === ''){
      Swal.fire('Error!', 'Please enter all data', 'error');
    }else{
      let body = {"nick_name": this.nick_name,"full_name":this.full_name}
      Swal.fire('Success!', 'Saved correctly', 'success');
      this.testService.post(body).subscribe()
      this.nick_name = "";
      this.full_name = "";

    }
  }
}


