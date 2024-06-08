import { Component } from '@angular/core';
import { AdminCustomerService } from 'src/app/services/admin-customer.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',

]
})
export class AdminCustomerListComponent {
  constructor(private CustomerServices: AdminCustomerService) {
  }
  list: any;
  status: any;

  //
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.CustomerServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


  delete(item: any) {
    const del = confirm("Bạn có muốn xóa Khách hàng này ko ?");
    if (del == true) {
      this.CustomerServices.delete(item).subscribe((data) => {
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
