import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

  // Initialisation du produit
  p: Product = new Product();

  // Liste des produits
  list: Product[] = [];

  // Fonction pour ajouter un produit
  addProduct() {
    // Création d'une nouvelle instance avec les valeurs de `p`
    const newProduct = { ...this.p };
    this.list.push(newProduct);

    // Réinitialisation de l'objet `p` pour le prochain produit
    this.p = new Product();
    console.log(this.list);
  }

  

}
