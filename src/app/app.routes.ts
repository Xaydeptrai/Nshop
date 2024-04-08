import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {NgModule} from "@angular/core";
import {BodyComponent} from "./body/body.component";
import {SignupComponent} from "./signup/signup.component";

export const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: '', component: BodyComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
