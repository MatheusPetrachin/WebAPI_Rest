import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = `${environment.ApiUrl}Users/`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {     
    console.log(this.API);
   }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.API)
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.API, user);
  }

  add(user: User): Observable<User> {   
    return this.http.post<User>(this.API, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(this.API + id);
  }

}