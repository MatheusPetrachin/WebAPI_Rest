import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    API: string = environment.ApiUrl;
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void { }

    updateUser(id: number, user: User) : Observable<User> {
        return this.http
              .put<User>(this.API + 'users', user);
      }
    
      addUser(user: User): Observable<User>{
        return this.http
              .post<User>(this.API + 'users', user);
      }
     
      delete(id: number): Observable<User>  {
        return this.http
              .delete<User>(this.API + 'users/' + id);    
      }

}