import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminProductListComponent } from './components/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductCreateComponent } from './components/admin-product/admin-product-create/admin-product-create.component';

import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminCategoryListComponent } from './components/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryCreateComponent } from './components/admin-category/admin-category-create/admin-category-create.component';

import { AdminNccComponent } from './components/admin-ncc/admin-ncc.component';
import { AdminNccListComponent } from './components/admin-ncc/admin-ncc-list/admin-ncc-list.component';
import { AdminNccCreateComponent } from './components/admin-ncc/admin-ncc-create/admin-ncc-create.component';

import { AdminEmployeeComponent } from './components/admin-employee/admin-employee.component';
import { AdminEmployeeListComponent } from './components/admin-employee/admin-employee-list/admin-employee-list.component';
import { AdminEmployeeCreateComponent } from './components/admin-employee/admin-employee-create/admin-employee-create.component';

import { AdminCustomerComponent } from './components/admin-customer/admin-customer.component';
import { AdminCustomerListComponent } from './components/admin-customer/admin-customer-list/admin-customer-list.component';
import { AdminCustomerCreateComponent } from './components/admin-customer/admin-customer-create/admin-customer-create.component';

import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminOrderListComponent } from './components/admin-order/admin-order-list/admin-order-list.component';


import { AdminOrderDetailComponent } from './components/admin-order-detail/admin-order-detail.component';

import { AdminOrderNhapComponent } from './components/admin-order-nhap/admin-order-nhap.component';
import { AdminOrderNhapListComponent } from './components/admin-OrderNhap/admin-order-nhap-list/admin-order-nhap-list.component';
import { AdminOrderNhapCreateComponent } from './components/admin-OrderNhap/admin-order-nhap-create/admin-order-nhap-create.component';
import { AdminOderDetailComponent } from './components/admin-order/admin-oder-detail/admin-oder-detail.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'product',
        component: AdminProductComponent,
        children: [
          {
            path: 'list',
            component: AdminProductListComponent
          },
          {
            path: 'tools/:type',
            component: AdminProductCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminProductCreateComponent
          },

        ]
      },
      {
        path: 'category',
        component: AdminCategoryComponent,
        children: [
          {
            path: 'list',
            component: AdminCategoryListComponent
          },
          {
            path: 'tools/:type',
            component: AdminCategoryCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminCategoryCreateComponent
          },

        ]
      },
      {
        path: 'provider',
        component: AdminNccComponent,
        children: [
          {
            path: 'list',
            component: AdminNccListComponent
          },
          {
            path: 'tools/:type',
            component: AdminNccCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminNccCreateComponent
          },

        ]
      },


      {
        path: 'employee',
        component: AdminEmployeeComponent,
        children: [
          {
            path: 'list',
            component: AdminEmployeeListComponent
          },
          {
            path: 'tools/:type',
            component: AdminEmployeeCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminEmployeeCreateComponent
          },

        ]
      },



      {
        path: 'customer',
        component: AdminCustomerComponent,
        children: [
          {
            path: 'list',
            component: AdminCustomerListComponent
          },
          {
            path: 'tools/:type',
            component: AdminCustomerCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminCustomerCreateComponent
          },

        ]
      },


      
      {
        path: 'order',
        component: AdminOrderComponent,
        children: [
          {
            path: 'list',
            component: AdminOrderListComponent
          },
         
          {
            path: 'detail/:id',
            component: AdminOderDetailComponent
          },    
        ]
      },


      {
        path: 'orderdetail',
        component: AdminOrderDetailComponent,
        children: [
        
        
                  
        ]
      },




      {
        path: 'ordernhap',
        component: AdminOrderNhapComponent,
        children: [
          {
            path: 'list',
            component: AdminOrderNhapListComponent
          },
          {
            path: 'tools/:type',
            component: AdminOrderNhapCreateComponent
          },
          {
            path: 'tools/:type/:id',
            component: AdminOrderNhapCreateComponent
          },

        ]
      },
    ]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
