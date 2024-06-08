import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/client/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/client/home/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(
    private cateServices: CategoryService,
    private homeServices : HomeService,
    private route: ActivatedRoute
  ) {
  }

  list: any;
  id: any;
  listCat: any;
  drop: any = false;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.getList();
    this.getListCategories();

  }

  getList() {
    this.cateServices.listProduct(this.id).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
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
