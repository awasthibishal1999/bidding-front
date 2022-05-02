import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from './product';
import { Category } from './category';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiServerUrl = 'http://localhost:8080/v1/products';
  // private categoryUrl ="http://localhost:8080/v1/categories";

  // public getProducts():Observable<Product>{

  //   return this.http.get<Product>("http://localhost:8080/v1/products");

  //           }

  /* Getting product list from backend application server */
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiServerUrl);
  }

  getDetails(productId:number):Observable<Product>{

    const productDetailsUrl=`${this.apiServerUrl}/${productId}`;
    return this.http.get<Product>(productDetailsUrl);

  }























  // get(id: any): Observable<Product> {
  //   return this.http.get(`${this.apiServerUrl}/${id}`);
  // }
  // create(data: any): Observable<any> {
  //   return this.http.post(this.apiServerUrl, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
}
