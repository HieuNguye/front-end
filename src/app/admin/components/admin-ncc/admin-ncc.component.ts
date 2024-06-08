import { Component } from '@angular/core';
import { AdminNccService } from 'src/app/services/admin-ncc.service';

@Component({
  selector: 'app-admin-ncc',
  templateUrl: './admin-ncc.component.html',
  styleUrls: ['./admin-ncc.component.css',
  '../../../../assets/css/bootstrap.min.css',
  '../../../../assets/css/AdminLTE.min.css',
  '../../../../assets/css/dataTables.bootstrap.css',
  '../../../../assets/css/_all-skins.min.css',
]
})
export class AdminNccComponent {
  constructor(private NccServices: AdminNccService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.NccServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

}
