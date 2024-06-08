import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/client/home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private homeServices: HomeService) {
  }

  listCat: any;

  drop: any = false;
  ngOnInit() {

    this.getListCategories();

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
