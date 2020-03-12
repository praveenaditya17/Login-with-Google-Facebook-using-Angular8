import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-google-signin';
  user: any;

  constructor(private _socioAuthServ: AuthService) { }
 
  // Method to sign in with google.
  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
      //  console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
  }
  singInFacebook(): void {
   // platform = FacebookLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (response) => {
       // console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
  }
  // Method to log out.
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }
}
