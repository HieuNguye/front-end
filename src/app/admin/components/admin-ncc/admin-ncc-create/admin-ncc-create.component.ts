import { Component } from '@angular/core';
import { AdminNccService } from 'src/app/services/admin-ncc.service';
import { Ncc } from 'src/app/models/Ncc';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-admin-ncc-create',
  templateUrl: './admin-ncc-create.component.html',
  styleUrls: ['./admin-ncc-create.component.css',
  '../../../../../assets/css/bootstrap.min.css',
  '../../../../../assets/css/AdminLTE.min.css',
  '../../../../../assets/css/dataTables.bootstrap.css',
  '../../../../../assets/css/_all-skins.min.css',]
})
export class AdminNccCreateComponent {
  constructor(
    private NccServices: AdminNccService,
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
 

  Ncc: Ncc = {
    MaNCC: 0,
    TenNCC: '',
    DiaChi: '',
    Sdt: ''
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
    this.NccServices.detail(this.id).subscribe((data) => {
      this.Ncc = data.data;
      console.log(this.Ncc);
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
     
      this.NccServices.create(this.Ncc).subscribe((data) => {
        this.status = data.data;
        if (this.status == true) {
          alert(this.status);
        }

      });
    }

  

  update() {
   
  
    
      this.NccServices.update(this.Ncc).subscribe((data) => {
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
      this.NccServices.upload(formData).subscribe((data) => {
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
