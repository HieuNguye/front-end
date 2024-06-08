import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { orderdetail } from '../models/orderdetail';
@Injectable({
  providedIn: 'root'
})
export class AdminOrderDetailService {

   
  constructor(private http: HttpClient) { }

  lists(id:any): Observable<any> {
    return this.http.get('/api/admin/orderdetail/list/'+id);
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/orderdetail/detail/' + id);
  }

  delete(orderdetail: orderdetail): Observable<any> {
    return this.http.post('/api/admin/orderdetail/delete', orderdetail);
  }

 
}
