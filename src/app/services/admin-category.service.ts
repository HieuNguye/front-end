import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loaigiay } from '../models/loaigiay';


@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {


  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/category/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/category/detail/' + id);
  }

  create(loaigiay: loaigiay): Observable<any> {
    return this.http.post('/api/admin/category/create', loaigiay);
  }


  update(loaigiay: loaigiay): Observable<any> {
    return this.http.post('/api/admin/category/update', loaigiay);
  }

  delete(loaigiay: loaigiay): Observable<any> {
    return this.http.post('/api/admin/category/delete', loaigiay);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/category/upload', formData);
  }

}
