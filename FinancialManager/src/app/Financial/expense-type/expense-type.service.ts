import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from './expense-type';

@Injectable({
    providedIn: 'root'
  })
  export class ExpenseTypeService {
  
    private readonly API: string = `${environment.ApiUrl}ExpenseTypes/`;
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {     
      console.log(this.API);
     }
  
     get(id: number): Observable<ExpenseType>{
      return this.http.get<ExpenseType>(this.API + id)
    }
  
    gets(): Observable<ExpenseType[]>{
      return this.http.get<ExpenseType[]>(this.API)
    }
  
    update(expenseType: ExpenseType): Observable<ExpenseType> {
      return this.http.put<ExpenseType>(this.API, expenseType);
    }
  
    add(expenseType: ExpenseType): Observable<ExpenseType> {   
      return this.http.post<ExpenseType>(this.API, expenseType);
    }
  
    delete(id: number): Observable<ExpenseType> {
      return this.http.delete<ExpenseType>(this.API + id);
    }
  
  }