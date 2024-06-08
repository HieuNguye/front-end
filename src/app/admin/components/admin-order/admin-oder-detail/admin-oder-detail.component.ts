import { Component } from '@angular/core';
import { AdminOrderDetailService } from 'src/app/services/admin-order-detail.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-oder-detail',
  templateUrl: './admin-oder-detail.component.html',
  styleUrls: ['./admin-oder-detail.component.css']
})
export class AdminOderDetailComponent {
  constructor(
    private OrderDetailServices: AdminOrderDetailService,
    private route: ActivatedRoute) {
  }
  list: any;
  p: number = 1;
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  status: any;
  id: number = 0;


  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    if (this.id > 0) {
      this.getList();

    }

  }

  getList() {
    this.OrderDetailServices.lists(this.id).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  delete(item: any) {
    const del = confirm("Bạn có muốn xóa chi tiết hoá đơn này ko ?");
    if (del == true){
    this.OrderDetailServices.delete(item).subscribe((data) => {
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
