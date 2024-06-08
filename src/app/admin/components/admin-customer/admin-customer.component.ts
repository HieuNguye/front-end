import { Component } from '@angular/core';
import { AdminCustomerService } from 'src/app/services/admin-customer.service';
@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',
]
})
export class AdminCustomerComponent {

  constructor(private CustomerServices: AdminCustomerService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.CustomerServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }
}
