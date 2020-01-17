import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  public getUser(): Observable<any> {
    return this.http.get(`http://localhost:3000/users/me`);
  }
  public register(data): Observable<any> {
    return this.http.post(`http://localhost:3000/users`, data);
  }
  public login(data): Observable<any> {
    return this.http.post(`http://localhost:3000/users/login`, data);
  }
}
