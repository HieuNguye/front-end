import { Component } from '@angular/core';
import { DetailService } from 'src/app/services/client/detail/detail.service';
import { CartService } from 'src/app/services/client/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/client/account/account.service';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(
    private detailServices: DetailService,
    private cartServices: CartService,
    private route: ActivatedRoute,
    private accountSer:AccountService
  ) {
  }

  detail: any;
  id: any;
  status: any;
  cart: any;
  soluong: any = 1;

  listSame: any;
  comments:any;

  user:any;

  comment:any= {
    maSanPham:0,
    comment_text:"",
    userId:0,
    created_at:''
  }

  threedot:any = faEllipsisVertical;

  deleteButtonStatus:any = false;
  commentDeleteNumber:any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    if (this.id > 0) {
      this.getDetail();
      this.getRecommend();
    }
    this.getUser()
  }

  getDateNow():string{
    const now = new Date();
    const yearNow: number = now.getFullYear();
    const monthNow: number = now.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
    const dateNow: number = now.getDate();

    return yearNow + "-"+monthNow + "-"+ dateNow;
  }

  getUser(){
    this.accountSer.getUser().subscribe((data) => {
      console.log(data)
      this.user = data.data;
    });
  }

  getDetail() {
    this.detailServices.detail(this.id).subscribe((data) => {
      this.detail = data.data;
      console.log(this.detail);
      this.getComments();
    });
  }

  getComments() {
    this.detailServices.comments(this.id).subscribe((data) => {
      this.comments = data.data;
     
    });
  }

  getRecommend() {
    this.detailServices.listSame(this.id).subscribe((data) => {
      this.listSame = data.data;
      console.log(this.listSame);
    });
  }

  createComment(){

    this.comment.maSanPham = this.id;
    this.comment.userId = this.user.MaNguoiDung;
    this.comment.created_at = this.getDateNow();
    
    console.log(this.comment)
    this.detailServices.createComment(this.comment).subscribe((data) => {
      //this.comment = "";
      this.getComments();
    });
  }

  updateQuantity(type: any) {

    if (type == "add") {
      if (this.soluong == 0) {
        this.soluong = 0;

      }
      else {
        this.soluong += 1;

      }

    }
    else {

      if (this.soluong == 0) {
        this.soluong = 0;

      }
      else {
        this.soluong -= 1;


      }

    }
  }

  addCart() {

    this.cart = {
      id: this.detail.id,
      TenGiay: this.detail.TenGiay,
      HinhAnh: this.detail.HinhAnh,
      GiaTB: this.detail.GiaTB,
      SoLuong: Number(this.soluong),
      Status: "Add"
    }

    this.cartServices.addCart(this.cart).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        alert("Đã thêm vào giỏ hàng thành công");
        const goCart = confirm("Bạn có muốn đến trang giỏ hàng ?");
        if (goCart == true) {
          window.location.href = "/cart"

        }
      }

    });
  }

  changeStatus(id:any,commentId:any){

    if(id == this.user.MaNguoiDung){
      this.deleteButtonStatus = !this.deleteButtonStatus;

    }
    else{
      this.deleteButtonStatus = false;

    }

    this.commentDeleteNumber = commentId;
    

  }


  delete(id:any){
    this.detailServices.delete(id).subscribe((data) => {
      this.getComments();
    });
  }

}
