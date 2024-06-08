import { Component } from '@angular/core';
import { SanphamService } from 'src/app/services/sanpham.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/css/AdminLTE.min.css',
    '../../../../assets/css/dataTables.bootstrap.css',
    '../../../../assets/css/_all-skins.min.css',
  ]
})
export class AdminProductComponent {
  constructor(private spServices: SanphamService) {
  }
  list: any;


  ngOnInit() {
    this.getList();
  }

  getList() {
    this.spServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


}
