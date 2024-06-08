import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  detail(id: number): Observable<any> {
    return this.http.get('/api/product/detail/' + id);
  }
  

  listSame(id: number): Observable<any> {
    return this.http.get('/api/product/same/products/' + id);
  } 

  comments(id: number): Observable<any> {
    return this.http.get('api/comment/list/product/' + id);
  } 


  createComment(comment:any): Observable<any> {
    return this.http.post('api/comment/create',comment );
  } 

  delete(id:any): Observable<any> {
    return this.http.delete('api/comment/delete/'+id);
  } 
}
