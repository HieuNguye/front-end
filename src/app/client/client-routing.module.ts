import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientProductComponent } from './components/client-product/client-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: ClientProductComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'category/:id', component: CategoryComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path: 'news', component: NewsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
