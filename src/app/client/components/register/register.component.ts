import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/client/account/account.service';
import { nguoidung } from 'src/app/models/nguoidung';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private accountService: AccountService,

  ) { }

  status: any;

  rePass: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    Quyen: '',
  };

  register() {
    if (this.user.Email !== '' && this.user.MatKhau !== '') {
      if (this.user.MatKhau == this.rePass) {
        this.accountService.register(this.user).subscribe((data) => {

          this.status = data.data;

          if (this.status == true) {
            alert('Đã đăng ký thành công');

          } else {
            alert('Đã đăng ký không thành công');
          }
        });
      }

    } else {
      console.log('Nhập đủ thông tin');
    }
  }
}
