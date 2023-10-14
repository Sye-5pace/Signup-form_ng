import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('loginForm') loginForm: ElementRef;

  email: string = '';
  password: string = '';

  onSubmit(loginForm: NgForm){
    if(loginForm.form.valid){
      console.log('Email Address:' + this.email)
      console.log('Password:' + this.password)
    }else{
      console.log('Login failed')
    }
  }
}
