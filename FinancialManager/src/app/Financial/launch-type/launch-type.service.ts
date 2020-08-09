import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaunchType } from './launch-type';

@Injectable({
    providedIn: 'root'
  })
  export class LaunchTypeService {
  
    private readonly API: string = `${environment.ApiUrl}LaunchTypes/`;
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {     
      console.log(this.API);
     }
  
     get(id: number): Observable<LaunchType>{
      return this.http.get<LaunchType>(this.API + id)
    }
  
    gets(): Observable<LaunchType[]>{
      return this.http.get<LaunchType[]>(this.API)
    }
  
    update(launchType: LaunchType): Observable<LaunchType> {
      return this.http.put<LaunchType>(this.API, launchType);
    }
  
    add(launchType: LaunchType): Observable<LaunchType> {   
      return this.http.post<LaunchType>(this.API, launchType);
    }
  
    delete(id: number): Observable<LaunchType> {
      return this.http.delete<LaunchType>(this.API + id);
    }
  
  }