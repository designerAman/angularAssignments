import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-1';
  username: String;
  password: String;

  usernameRequired = false;
  passwordRequired = false;
  sucessfullLogin = false;

  login() {
    if(!this.username) {
      this.usernameRequired = true;
    } else {
      this.usernameRequired= false;
    }
    if(!this.password) {
      this.passwordRequired = true;
    } else {
      this.passwordRequired = false;
    }

    if(this.password && this.username) {
      this.sucessfullLogin = true;
    } else {
      this.sucessfullLogin = false;
    }
  }
}
