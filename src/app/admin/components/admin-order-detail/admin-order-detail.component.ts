import { Component } from '@angular/core';
import { AdminOrderDetailService } from 'src/app/services/admin-order-detail.service';
@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',

]
})
export class AdminOrderDetailComponent {
  constructor(private OrderDetailServices: AdminOrderDetailService) {
  }
  list: any;


  // ngOnInit() {
  //   this.getList();
  // }

  // getList() {
  //   this.OrderDetailServices.lists().subscribe((data) => {
  //     this.list = data.data;
  //     console.log(this.list);
  //   });
  // }
}
