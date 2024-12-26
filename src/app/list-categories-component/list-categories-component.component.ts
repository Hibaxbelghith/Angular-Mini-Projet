import { Component } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent {
  categories : Category[] = [
    {"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager",
    "available":true, "prix":150},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Petit électroménager",
    "available":true,"prix":110},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Produits informatiques",
    "available":true,"prix":100},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"Smart Phones", "available":true,"prix":190},
    {"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"TV images et son",
    "available":true,"prix":150},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"Produits voiture","available":false,"prix":170},
    ]

    f(description:string){
      alert(description);
    }

    titre : string = " ";
}
