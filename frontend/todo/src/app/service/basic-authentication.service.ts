import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService{

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    if(username === 'hector' && password === 'dummy'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  executeBasicAuthenticationBeanService(username, password){
   
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    {
      Authorization: basicAuthHeaderString
    }

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {
      headers
    }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticateUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticateToken(){
    if(this.getAuthenticateUser()){
      return sessionStorage.getItem('token');
    }
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}


export class AuthenticationBean{
  constructor(public message: string){

  }
}

