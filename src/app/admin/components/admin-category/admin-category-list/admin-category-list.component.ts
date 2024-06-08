import { Component } from '@angular/core';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',]
})
export class AdminCategoryListComponent {
  constructor(private CatServices: AdminCategoryService) {
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
    this.CatServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }


  delete(item: any) {
    const del = confirm("Bạn có muốn xóa giày ko ?");
    if (del == true) {
      this.CatServices.delete(item).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert("Xóa thành công!!!")
          this.getList();
        }
      });
    }
    else {
      alert("Xoá không thành công")
    }


  }
}
