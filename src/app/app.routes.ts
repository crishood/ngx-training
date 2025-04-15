import {Router, Routes} from '@angular/router';
import {StoreViewComponent} from './store-view/store-view.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';
import {LoginService} from './login/login.service';
import {inject} from '@angular/core';
import {LoginComponent} from './login/login.component';

const isLoggedIn = () => inject(LoginService).isUserLoggedIn() ||
  inject(Router).navigateByUrl('login');

export const routes: Routes = [
  {path: "", component: StoreViewComponent, title: "Welcome to our store"},
  {path: "login", component: LoginComponent, title: "Login"},
  {path: "cart", loadComponent: () => import("./cart-view/cart-view.component").then(m => m.CartViewComponent)},
  {path: "checkout", component: CheckoutViewComponent, canActivate: [isLoggedIn]}
];
