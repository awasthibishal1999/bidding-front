import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient){}

  private apiServerUrl ="http://localhost:8080/v1/products";



  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiServerUrl}/category/all`);
}
public addCategory(category: Category): Observable<Category>{
  return this.http.post<Category>(`${this.apiServerUrl}/category/add`, category);
}
public updateCategory(category: Category): Observable<Category>{
  return this.http.put<Category>(`${this.apiServerUrl}/category/update`, category);
}
public deleteCategory(categoryId: number): Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/category/delete/${categoryId}`);
}
}
