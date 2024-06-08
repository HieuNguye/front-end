import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { khachhang } from '../models/khachhang';
@Injectable({
  providedIn: 'root'
})

export class AdminCustomerService {

  
  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/customer/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/customer/detail/' + id);
  }

  create(khachhang: khachhang): Observable<any> {
    return this.http.post('/api/admin/customer/create', khachhang);
  }


  update(khachhang: khachhang): Observable<any> {
    return this.http.post('/api/admin/customer/update', khachhang);
  }

  delete(khachhang: khachhang): Observable<any> {
    return this.http.post('/api/admin/customer/delete', khachhang);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/customer/upload', formData);
  }
}
