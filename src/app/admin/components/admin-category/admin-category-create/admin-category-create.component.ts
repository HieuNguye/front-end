import { Component } from '@angular/core';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { loaigiay } from 'src/app/models/loaigiay';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',]
})
export class AdminCategoryCreateComponent {
  constructor(
    private AdminCatServices: AdminCategoryService,
    private route: ActivatedRoute
  ) {
  }

  ///base 
  id: any;
  type: any;
  status: any;

  //
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;

 

  loaigiay: loaigiay = {
    id: 0,
    TenLGiay: '',
    MoTa: '',
    HinhAnh: ''
  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.type = routeParams.get('type');

    if (this.id > 0) {
      this.getDetail();

    }
  }

  getDetail() {
    this.AdminCatServices.detail(this.id).subscribe((data) => {
      this.loaigiay = data.data;
      console.log(this.loaigiay);
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
    if (this.imageUrl) {
      this.loaigiay.HinhAnh = this.imageUrl;
      this.loaigiay.MoTa = this.ckeditorData;
      this.AdminCatServices.create(this.loaigiay).subscribe((data) => {
        this.status = data.data;

        if (this.status == true) {
          alert(this.status);
        }

      });
    }

  }

  update() {
    if (this.imageUrl) {
      this.loaigiay.HinhAnh = this.imageUrl;
      this.loaigiay.MoTa = this.ckeditorData;
      this.AdminCatServices.update(this.loaigiay).subscribe((data) => {
        this.status = data.data;

        if (this.status == true) {
          alert(this.status);
        }

      });
    }
    else {
      this.AdminCatServices.update(this.loaigiay).subscribe((data) => {
        this.status = data.data;

        if (this.status == true) {
          alert(this.status);
        }

      });
    }

  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.AdminCatServices.upload(formData).subscribe((data) => {
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
