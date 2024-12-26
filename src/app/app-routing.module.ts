import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

//Routage
const routes: Routes = [
  { path: "home", component: HomeComponentComponent, children: [
      { path: "category/:id", component: DetailsCategoryComponent}
  ] },
  { path: "products/:id", component: ProductsCategoryComponent }, //PathParam
  { path: "products", component: ProductsCategoryQPComponent}, //QueryParam
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
