import { Component } from '@angular/core';
import { nguoidung } from 'src/app/models/nguoidung';

import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/client/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ],
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  userLoginData: any;
  statusLogin: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  login() {
    if (this.user.Email !== '' && this.user.MatKhau !== '') {
      this.accountService.login(this.user).subscribe((data) => {
        this.userLoginData = data.data;
        console.log(this.userLoginData);
        this.statusLogin = data.status;
        console.log(this.statusLogin);
        if (this.statusLogin) {
          alert('Đã đăng nhập thành công');
         this.navigateToHome();
        } else {
          alert('Đã đăng nhập không thành công');
        }
      });
    } else {
      console.log('Nhập đủ thông tin');
    }
  }

  navigateToHome() {
    window.location.href = '/';
  }
}