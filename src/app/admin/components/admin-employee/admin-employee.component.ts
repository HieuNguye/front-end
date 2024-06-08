import { Component } from '@angular/core';
import { AdminEmployeeService } from 'src/app/services/admin-employee.service';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',
]
})
export class AdminEmployeeComponent {
  constructor(private EmployeeServices: AdminEmployeeService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.EmployeeServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

}
