import { Component } from '@angular/core';
import { SanphamService } from 'src/app/services/sanpham.service';
import { giay } from 'src/app/models/giay';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';



@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css',
    '../../../../../assets/css/bootstrap.min.css',
    '../../../../../assets/css/AdminLTE.min.css',
    '../../../../../assets/css/dataTables.bootstrap.css',
    '../../../../../assets/css/_all-skins.min.css',]
})
export class AdminProductCreateComponent {

  constructor(
    private spServices: SanphamService,
    private route: ActivatedRoute
  ) {
  }

  ///base 
  id: any;
  type: any;
  status: any;

  listCate: any;

  //
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

  giay: giay = {
    id: 0,
    TenGiay: '',
    MaLGiay: 0,
    HinhAnh: '',
    MoTa: '',
    GiaTB: 0
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.type = routeParams.get('type');

    if (this.id > 0) {
      this.getDetail();

    }
    this.getCategories();
  }

  getDetail() {
    this.spServices.detail(this.id).subscribe((data) => {
      this.giay = data.data;
      console.log(this.giay);
    });
  }

  getCategories() {
    this.spServices.listCategories().subscribe((data) => {
      this.listCate = data.data;
      console.log(this.listCate);
    });
  }


  submit(type: any) {
    if (type == 'create') {
      this.create();
    }
    else {
      this.update();
    }
  }

  create() {
    if (this.giay.GiaTB > 0) {
      if (this.imageUrl) {
        this.giay.HinhAnh = this.imageUrl;
        this.giay.MoTa = this.ckeditorData;
        this.spServices.create(this.giay).subscribe((data) => {
          this.status = data.data;

          if (this.status == true) {
            alert(this.status);
          }
          this.giay = {
            id: 0,
            TenGiay: '',
            MaLGiay: 0,
            HinhAnh: '',
            MoTa: '',
            GiaTB: 0
          }
          this.imageUrl = '';
        });
      }
    }
    else {
      alert("Giá sản phẩm không hợp lệ")
    }

  }

  update() {
    if (this.giay.GiaTB > 0) {
      if (this.imageUrl) {
        this.giay.HinhAnh = this.imageUrl;
        this.giay.MoTa = this.ckeditorData;
        this.spServices.update(this.giay).subscribe((data) => {
          this.status = data.data;

          if (this.status == true) {
            alert(this.status);
          }

        });
      }
      else {
        this.spServices.update(this.giay).subscribe((data) => {
          this.status = data.data;

          if (this.status == true) {
            alert("Thành công");
          }

        });
      }
    }
    else {
      alert("Giá sản phẩm không hợp lệ")
    }

  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.spServices.upload(formData).subscribe((data) => {
        this.imageUrl = data.fileurl;
        console.log(this.imageUrl);
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      console.log(this.selectedFile);
    }
  }
  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
  }

}
