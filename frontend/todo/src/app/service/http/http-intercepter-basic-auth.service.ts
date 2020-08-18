import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username= 'hector'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticateToken();
    let username = this.basicAuthenticationService.getAuthenticateUser();

    if( basicAuthHeaderString && username ){
      request = request.clone({
        setHeaders : {
          Authorization: basicAuthHeaderString
        }
      }
      )
    }

    return next.handle(request);
  }
}
