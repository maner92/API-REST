import { Component } from '@angular/core';
import { TestService } from './Servicio/test.service';


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
      alert('All fields are required');
    }else{
      let body = {"nick_name": this.nick_name,"full_name":this.full_name}
      console.log("success");
      
      
      this.testService.post(body).subscribe(
        (error)=> {
          console.log(error);
          
        }
      )
    }
  }
}


