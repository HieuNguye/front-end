import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nguoidung } from 'src/app/models/nguoidung';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  register(user: nguoidung): Observable<any> {
    return this.http.post('/api/account/register',  user );
  }

  login(user: nguoidung): Observable<any> {
    return this.http.post('/api/account/login', user );
  }
  getUser():Observable<any> {
    return this.http.get('/api/account/get-user');
  }

  getCustomer(id:any):Observable<any> {
    return this.http.get('/api/account/get-customer/'+id);
  }

  logout():Observable<any> {
    return this.http.post('/api/account/logout' , {});
  }

  
} 
  