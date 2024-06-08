import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  showCart(): Observable<any> {
    return this.http.get('/api/cart/product/list');
  }

  totalMoney(): Observable<any> {
    return this.http.get('/api/cart/product/totalmoney');
  }

  addCart(cart: any): Observable<any> {
    return this.http.post('/api/cart/product/addCart', cart);
  }

  deleteItem(item: any): Observable<any> {
    return this.http.post('/api/cart/product/delete', item);
  }

  payment(bill: any): Observable<any> {
    return this.http.post('/api/payment/payment', bill);
  }

}
