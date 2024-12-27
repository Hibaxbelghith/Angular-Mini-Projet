import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsCategoryQPComponent } from './products-category-qp/products-category-qp.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ReactiveFormProductComponent } from './reactive-form-product/reactive-form-product.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    //composants et pipes personnalisés
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    ContainsPipe,
    HighlightDirective,
    PageNotFoundComponentComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponent,
    DetailsCategoryComponent,
    FormProductComponent,
    ReactiveFormProductComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //pour utiliser les formulaires
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
