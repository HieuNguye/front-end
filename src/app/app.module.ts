import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin/components/admin-product/admin-product.component';
import { ClientComponent } from './client/client.component';
import { ClientProductComponent } from './client/components/client-product/client-product.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminProductListComponent } from './admin/components/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductCreateComponent } from './admin/components/admin-product/admin-product-create/admin-product-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './client/components/detail/detail.component';
import { CategoryComponent } from './client/components/category/category.component';
import { CartComponent } from './client/components/cart/cart.component';

import { AdminCategoryComponent } from './admin/components/admin-category/admin-category.component';
import { AdminCategoryCreateComponent } from './admin/components/admin-category/admin-category-create/admin-category-create.component';
import { AdminCategoryListComponent } from './admin/components/admin-category/admin-category-list/admin-category-list.component';

import { AdminNccComponent } from './admin/components/admin-ncc/admin-ncc.component';
import { AdminNccCreateComponent } from './admin/components/admin-ncc/admin-ncc-create/admin-ncc-create.component';
import { AdminNccListComponent } from './admin/components/admin-ncc/admin-ncc-list/admin-ncc-list.component';

import { CheckoutComponent } from './client/components/checkout/checkout.component';

import { AdminEmployeeComponent } from './admin/components/admin-employee/admin-employee.component';
import { AdminEmployeeCreateComponent } from './admin/components/admin-employee/admin-employee-create/admin-employee-create.component';
import { AdminEmployeeListComponent } from './admin/components/admin-employee/admin-employee-list/admin-employee-list.component';

import { HeaderComponent } from './client/components/layout/header/header.component';
import { AdminCustomerComponent } from './admin/components/admin-customer/admin-customer.component';
import { AdminCustomerListComponent } from './admin/components/admin-customer/admin-customer-list/admin-customer-list.component';
import { AdminCustomerCreateComponent } from './admin/components/admin-customer/admin-customer-create/admin-customer-create.component';
import { LoginComponent } from './client/components/login/login.component';

import { AngularToastifyModule ,ToastService} from 'angular-toastify';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './client/components/register/register.component';

import { AdminOrderComponent } from './admin/components/admin-order/admin-order.component';
import { AdminOrderListComponent } from './admin/components/admin-order/admin-order-list/admin-order-list.component';

import { AdminOrderDetailComponent } from './admin/components/admin-order-detail/admin-order-detail.component';


import { AdminOrderNhapComponent } from './admin/components/admin-order-nhap/admin-order-nhap.component';
import { AdminOrderNhapListComponent } from './admin/components/admin-OrderNhap/admin-order-nhap-list/admin-order-nhap-list.component';
import { AdminOrderNhapCreateComponent } from './admin/components/admin-OrderNhap/admin-order-nhap-create/admin-order-nhap-create.component';
import { AdminOderDetailComponent } from './admin/components/admin-order/admin-oder-detail/admin-oder-detail.component';
import { NewsComponent } from './client/components/news/news.component';



@NgModule({
  declarations: [   
    AppComponent,
    AdminComponent,
    AdminProductComponent,
    AdminCategoryComponent,
    ClientComponent,
    ClientProductComponent,
    AdminProductListComponent,
    AdminProductCreateComponent,
    DetailComponent,
    CategoryComponent,
    CartComponent,
    AdminCategoryCreateComponent,
    AdminCategoryListComponent,
    AdminNccComponent,
    AdminNccCreateComponent,
    AdminNccListComponent,
    CheckoutComponent,
    AdminEmployeeComponent,
    AdminEmployeeCreateComponent,
    AdminEmployeeListComponent,
    HeaderComponent,
    AdminCustomerComponent,
    AdminCustomerListComponent,
    AdminCustomerCreateComponent,
    LoginComponent,
    RegisterComponent,
    AdminOrderComponent,
    AdminOrderListComponent,
    AdminOrderDetailComponent,
    AdminOrderNhapComponent,
    AdminOrderNhapListComponent,
    AdminOrderNhapCreateComponent,
    AdminOderDetailComponent,
    NewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientRoutingModule,
    AdminRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CKEditorModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularToastifyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


