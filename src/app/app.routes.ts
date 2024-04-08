import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./body/body.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: '', component: BodyComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
