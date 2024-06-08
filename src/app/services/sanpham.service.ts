import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { giay } from '../models/giay';


@Injectable({
  providedIn: 'root'
})
export class SanphamService {


  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/product/list');
  }

  listCategories(): Observable<any> {
    return this.http.get('/api/admin/product/list/categories');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/product/detail/' + id);
  }

  create(giay: giay): Observable<any> {
    return this.http.post('/api/admin/product/create', giay);
  }


  update(giay: giay): Observable<any> {
    return this.http.post('/api/admin/product/update', giay);
  }

  delete(giay: giay): Observable<any> {
    return this.http.post('/api/admin/product/delete', giay);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/product/upload', formData);
  }

}
