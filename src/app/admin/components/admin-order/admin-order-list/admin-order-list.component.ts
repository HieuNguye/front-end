import { Component } from '@angular/core';
import { AdminOrderService } from 'src/app/services/admin-order.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',
]
})
export class AdminOrderListComponent {
  constructor(private OrderServices: AdminOrderService) {
  }
  list: any;
  status: any;
  p:any = 1;

  //
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.OrderServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


  delete(item: any) {
    const del = confirm("Bạn có muốn xóa Hoá đơn này ko ?");
    if (del == true) {
      this.OrderServices.delete(item).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert("Xóa thành công!!!")
          this.getList();
          
        }
      });
    }
    else {
      alert("Xoá không thành công!")
    }


  }
}
