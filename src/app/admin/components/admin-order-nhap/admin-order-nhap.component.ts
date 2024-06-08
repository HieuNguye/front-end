import { Component } from '@angular/core';
import { AdminOrderNhapService } from 'src/app/services/admin-order-nhap.service';
@Component({
  selector: 'app-admin-order-nhap',
  templateUrl: './admin-order-nhap.component.html',
  styleUrls: ['./admin-order-nhap.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',

]
})
export class AdminOrderNhapComponent {
  constructor(private OrderNhapServices: AdminOrderNhapService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.OrderNhapServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

}
