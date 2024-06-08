import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ncc } from '../models/Ncc';

@Injectable({
  providedIn: 'root'
})
export class AdminNccService {


  constructor(private http: HttpClient) { }

  lists(): Observable<any> {
    return this.http.get('/api/admin/ncc/list');
  }

  detail(id: number): Observable<any> {
    return this.http.get('/api/admin/ncc/detail/' + id);
  }

  create(Ncc: Ncc): Observable<any> {
    return this.http.post('/api/admin/ncc/create', Ncc);
  }


  update(Ncc: Ncc): Observable<any> {
    return this.http.post('/api/admin/ncc/update', Ncc);
  }

  delete(Ncc: Ncc): Observable<any> {
    return this.http.post('/api/admin/ncc/delete', Ncc);
  }

  upload(formData: FormData): Observable<any> {
    return this.http.post('/api/admin/ncc/upload', formData);
  }
}
