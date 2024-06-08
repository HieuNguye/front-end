import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/client/home/home.service';

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: []
})
export class ClientProductComponent {
  constructor(private homeServices: HomeService) {
  }
  list: any;
  listCat: any;
  drop: any = false;
  categorieshang: any


  ngOnInit() {
    this.getList();
    this.getListCategories();
    this.getListcategorieshang();
  }

  getList() {
    this.homeServices.lists().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  getListcategorieshang() {
    this.homeServices.categorieshang().subscribe((data) => {
      this.categorieshang = data.data;
      console.log(this.categorieshang);
    });
  }

  getListCategories() {
    this.homeServices.listCategories().subscribe((data) => {
      this.listCat = data.data;
      console.log(this.listCat);
    });
  }

  showCate() {
    if (this.drop == true) {
      this.drop = false
    }
    else {
      this.drop = true
    }
  }
}
