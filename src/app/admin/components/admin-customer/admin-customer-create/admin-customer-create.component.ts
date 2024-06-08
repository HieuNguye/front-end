import { Component } from '@angular/core';
import { AdminCustomerService } from 'src/app/services/admin-customer.service';
import { khachhang } from 'src/app/models/khachhang';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
@Component({
  selector: 'app-admin-customer-create',
  templateUrl: './admin-customer-create.component.html',
  styleUrls: ['./admin-customer-create.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',

]
})
export class AdminCustomerCreateComponent {

  
  constructor(
    private CustomerServices: AdminCustomerService,
    private route: ActivatedRoute
  ) {
  }

  ///base 
  id: any;
  type: any;
  status: any;

  //
  //
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;
 

  Customer : khachhang = {
    MaKH: 0,
    TenKH: '',
    Email: '',
    SDT: '',
    DiaChi: ''
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
    this.CustomerServices.detail(this.id).subscribe((data) => {
      this.Customer = data.data;
      console.log(this.Customer);
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
     
      this.CustomerServices.create(this.Customer).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert("Thêm Khách hàng thành công ");
        }

      });
    }

  

  update() {
   
  
    
      this.CustomerServices.update(this.Customer).subscribe((data) => {
        this.status = data.data;

        if (this.status == true) {
          alert(this.status);
        }

      });
    }

  

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.CustomerServices.upload(formData).subscribe((data) => {
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
