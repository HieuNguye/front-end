import { Component } from '@angular/core';
import { AdminOrderNhapService } from 'src/app/services/admin-order-nhap.service';
import { ordernhap } from 'src/app/models/ordernhap';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { AdminEmployeeService } from 'src/app/services/admin-employee.service';
import { AdminNccService } from 'src/app/services/admin-ncc.service';
@Component({
  selector: 'app-admin-order-nhap-create',
  templateUrl: './admin-order-nhap-create.component.html',
  styleUrls: ['./admin-order-nhap-create.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',

]
})
export class AdminOrderNhapCreateComponent {

  constructor(
    private OrderNhapServices: AdminOrderNhapService,
    private employeeService:AdminEmployeeService,
    private nccService:AdminNccService,
    private route: ActivatedRoute
  ) {
  }

  ///base 
  id: any;
  type: any;
  status: any;
  employees:any;
  nccs:any;

  //
  //
  ckeditorData: any;
  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;
 

  OrderNhap: ordernhap = {
    id: 0,
    MaNV:0,
    TinhTrang: 0,
    NgayNhap: '',
    TongTien: 0,
    MaNCC: 0

  }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.type = routeParams.get('type');

    if (this.id > 0) {
      this.getDetail();

    }

    this.getListEmployee();
    this.getListBrand();
  }

  getListBrand() {
    this.nccService.lists().subscribe((data) => {
      this.nccs = data.data;
      console.log(this.nccs);
    });
  }

  getListEmployee() {
    this.employeeService.lists().subscribe((data) => {
      this.employees = data.data;
      console.log(this.employees);
    });
  }

  getDetail() {
    this.OrderNhapServices.detail(this.id).subscribe((data) => {
      this.OrderNhap = data.data;
      console.log(this.OrderNhap);
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
     
      this.OrderNhapServices.create(this.OrderNhap).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert(this.status);
        }

      });
    }

  

  update() {
   
  
    
      this.OrderNhapServices.update(this.OrderNhap).subscribe((data) => {
        this.status = data.data;

        if (this.status == true) {
          alert(this.status);
        }

      });
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
