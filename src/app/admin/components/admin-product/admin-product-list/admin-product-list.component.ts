import { Component } from '@angular/core';
import { SanphamService } from 'src/app/services/sanpham.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css',
    '../../../../../assets/css/bootstrap.min.css',
    '../../../../../assets/css/AdminLTE.min.css',
    '../../../../../assets/css/dataTables.bootstrap.css',
    '../../../../../assets/css/_all-skins.min.css',]
})
export class AdminProductListComponent {
  constructor(private spServices: SanphamService) {
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
    this.spServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


  delete(item: any) {
    const del = confirm("Bạn có muốn xóa giày ko ?");
    if (del == true) {
      this.spServices.delete(item).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert("Xóa sản phẩm thành công!!!")
          this.getList();
          
        }
      });
    }
    else {
      alert("Xoá không thành công!")
    }


  }
}



