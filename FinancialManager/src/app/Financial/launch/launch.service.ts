import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from './launch';

@Injectable({
    providedIn: 'root'
  })
  export class ExpenseTypeService {
  
    private readonly API: string = `${environment.ApiUrl}Launches/`;
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {     
      console.log(this.API);
     }
  
     get(id: number): Observable<Launch>{
      return this.http.get<Launch>(this.API + id)
    }
  
    gets(): Observable<Launch[]>{
      return this.http.get<Launch[]>(this.API)
    }
  
    update(launch: Launch): Observable<Launch> {
      return this.http.put<Launch>(this.API, launch);
    }
  
    add(launch: Launch): Observable<Launch> {   
      return this.http.post<Launch>(this.API, launch);
    }
  
    delete(id: number): Observable<Launch> {
      return this.http.delete<Launch>(this.API + id);
    }
  
  }