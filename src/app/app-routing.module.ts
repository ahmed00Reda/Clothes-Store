import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';

const routes: Routes = [
  //{ path:'products', component: LandingComponent, canActivate: [AuthGuard]},
  {path: "products", component:AllProductsComponent},
  {path:'product/:id', component:ProductsDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path: "**", redirectTo:"products", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [AllProductsComponent, ProductsDetailsComponent, CartComponent]
