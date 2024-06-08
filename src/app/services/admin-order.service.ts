import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from '../models/order';
@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

   
  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/order/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/order/detail/' + id);
  }

  delete(order: order): Observable<any> {
    return this.http.post('/api/admin/order/delete', order);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/order/upload', formData);
  }
}
