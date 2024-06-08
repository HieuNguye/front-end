import { Component } from '@angular/core';
import { AdminOrderService } from 'src/app/services/admin-order.service';
@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',

]
})
export class AdminOrderComponent {
  constructor(private OrderServices: AdminOrderService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }
   //xử lý dữ liệu phản hồi từ một Observable
  getList() {
    this.OrderServices.lists().subscribe((data) => {
      this.list = data.data;     
      console.log(this.list);
    });
  }

}
