import { Component } from '@angular/core';
import { AdminEmployeeService } from 'src/app/services/admin-employee.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',
]
})
export class AdminEmployeeListComponent {

  constructor(private EmployeeServices: AdminEmployeeService) {
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
    this.EmployeeServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


  delete(item: any) {
    const del = confirm("Bạn có muốn xóa Nhà cung cấp này ko ?");
    if (del == true) {
      this.EmployeeServices.delete(item).subscribe((data) => {
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
