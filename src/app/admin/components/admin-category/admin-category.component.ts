import { Component } from '@angular/core';
import { AdminCategoryService } from 'src/app/services/admin-category.service';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/css/AdminLTE.min.css',
    '../../../../assets/css/dataTables.bootstrap.css',
    '../../../../assets/css/_all-skins.min.css',]
})
export class AdminCategoryComponent {
  constructor(private CatServices: AdminCategoryService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.CatServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

}
