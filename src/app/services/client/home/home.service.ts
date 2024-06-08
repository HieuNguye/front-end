import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/product/home/list');
  }

  listCategories(): Observable<any> {
    return this.http.get('/api/product/home/list/categories');
  }


  categorieshang(): Observable<any> {
    return this.http.get('/api/product/home/list/categorieshang');
  }
  
}
