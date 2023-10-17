import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  email: string = '';
  password: string = '';
  isDisabled: boolean = false;  
  formFill : boolean = false;
  isDisplay: boolean = false;

  onInputChange(){
    this.formFill = this.email.trim()  !== '' && this.password.trim() !== ''
  }

  onSubmit(){
    if(this.email && this.password){
      this.formFill = true
      this.isDisplay= true;
      console.log(this.isDisplay)
      console.log('Login details:' + this.email,this.password)
      const logins = { email: this.email, password: this.password}
      localStorage.setItem('logins', JSON.stringify(logins))
    }else{
      this.formFill = false
      console.log('Login failed')
    }
  }
}
