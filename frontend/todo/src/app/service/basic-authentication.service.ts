import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService{

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    if(username === 'hector' && password === 'dummy'){
      sessionStorage.setItem(AUTHENTICATED_USER, username);
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

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {
      headers
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticateUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticateToken(){
    if(this.getAuthenticateUser()){
      return sessionStorage.getItem(TOKEN);
    }
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}


export class AuthenticationBean{
  constructor(public message: string){

  }
}

