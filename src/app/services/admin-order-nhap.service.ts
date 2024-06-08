import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ordernhap } from '../models/ordernhap';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderNhapService {


  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/ordernhap/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/ordernhap/detail/' + id);
  }

  create(ordernhap: ordernhap): Observable<any> {
    return this.http.post('/api/admin/ordernhap/create', ordernhap);
  }


  update(ordernhap: ordernhap): Observable<any> {
    return this.http.post('/api/admin/ordernhap/update', ordernhap);
  }

  delete(ordernhap: ordernhap): Observable<any> {
    return this.http.post('/api/admin/ordernhap/delete', ordernhap);
  }
  
}
