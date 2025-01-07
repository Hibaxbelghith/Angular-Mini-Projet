import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ReactiveFormProductComponent } from './reactive-form-product/reactive-form-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';

//Routage
const routes: Routes = [
  { path: "home", component: HomeComponentComponent, children: [
      { path: "details/:id", component: DetailsCategoryComponent} //child route
  ] },
  { path: "products/:id", component: ProductsCategoryComponent }, //PathParam
  { path: "products", component: ProductsCategoryQPComponent}, //QueryParam + produits par categorie de db.json
  { path: "add-product", component: FormProductComponent}, //Template driven form
  { path: "add-product-reactive", component: ReactiveFormProductComponent}, //Reactive form + ajout dans db.json
  {path: "add-category", component:AddCategoryComponent}, //service ajout categorie
  { path: 'edit-category/:id', component: AddCategoryComponent }, // service modifier categorie
  {path:"contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)}, //lazy loading
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
