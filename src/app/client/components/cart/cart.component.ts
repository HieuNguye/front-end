import { Component } from '@angular/core';
import { CartService } from 'src/app/services/client/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(

    private cartServices: CartService,
    private router: Router,
  ) {
  }

  list: any;
  cart: any;
  status: any;
  resStatus: any;
  totalmoney: any;



  ngOnInit() {
    this.getListCart();
    this.getTotalMoney();
  }


  addCart(detail: any, soluong: any, status: any) {


    this.cart = {
      id: detail.id,
      TenGiay: detail.TenGiay,
      HinhAnh: detail.HinhAnh,
      GiaTB: detail.GiaTB,
      SoLuong: Number(soluong),
      Status: status
    }

    this.cartServices.addCart(this.cart).subscribe((data) => {
      this.resStatus = data.data;
      if (this.resStatus == true) {
        this.getListCart();
        this.getTotalMoney();
      }


    });
  }


  getListCart() {
    this.cartServices.showCart().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);

    });
  }

  getTotalMoney() {
    this.cartServices.totalMoney().subscribe((data) => {
      this.totalmoney = data.data;
      
    });
  }

  deleteCart(item: any) {

    const del = confirm("Bạn có muốn xóa giày ko ?");
    if (del == true) {
      this.cartServices.deleteItem(item).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {

          alert("Xóa sản phẩm thành công!!!")
          this.getListCart();
          this.getTotalMoney();
        }

      });
    }
    else {
      alert("Xoá không thành công!");
    }


  }




}

