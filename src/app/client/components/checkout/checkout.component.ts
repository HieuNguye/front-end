import { Component } from '@angular/core';
import { CartService } from 'src/app/services/client/cart/cart.service';
import { bill } from 'src/app/models/bill';
import { AccountService } from 'src/app/services/client/account/account.service';
import { nguoidung } from 'src/app/models/nguoidung';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(

    private cartServices: CartService,
    private accountServices: AccountService,

  ) {
  }

  list: any; status: any;
  totalmoney: any;
  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };
  customer: any;

  bill: bill = {
    id: 0,
    MaKH: 0,
    NgayLap: '',
    DiaChi: '',
    TinhTrang: 0,
    TongTien: 0,
    GhiChu: ''
  }


  ngOnInit() {
    this.getListCart();
    this.getTotalMoney();
    this.getUser();

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
      this.bill.TongTien = data.data
    });
  }

  getUser() {
    this.accountServices.getUser().subscribe((data) => {
      this.user = data.data;
      if (this.user.MaNguoiDung > 0) {
        this.getCustomer();
      }

    });
  }

  getCustomer() {
    console.log(this.user.MaNguoiDung)
    this.accountServices.getCustomer(this.user.MaNguoiDung).subscribe((data) => {
      this.customer = data.data; 
      console.log(this.customer);
      if (this.customer != undefined) {
        this.bill.MaKH = this.customer.MaKH;
        this.bill.DiaChi = this.customer.DiaChi;
        console.log(this.customer);
      }
    });
  }



  payment() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3/$2/$1');



    this.bill.NgayLap = formattedDate;

    this.cartServices.payment(this.bill).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        alert("Thanh cong")
      }

    });
  }
}
