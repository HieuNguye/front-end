import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nhanvien } from '../models/nhanvien';

@Injectable({
  providedIn: 'root'
})
export class AdminEmployeeService {

  
  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/employee/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/employee/detail/' + id);
  }

  create(nhanvien: nhanvien): Observable<any> {
    return this.http.post('/api/admin/employee/create', nhanvien);
  }


  update(nhanvien: nhanvien): Observable<any> {
    return this.http.post('/api/admin/employee/update', nhanvien);
  }

  delete(nhanvien: nhanvien): Observable<any> {
    return this.http.post('/api/admin/employee/delete', nhanvien);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/employee/upload', formData);
  }
}
