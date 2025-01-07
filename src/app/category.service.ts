import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //Api qui retourner categories / produits depuis db.json
  private apiUrlCategory = 'http://localhost:3000/categories';
  private apiUrlProduct = 'http://localhost:3000/products';


  constructor(private http: HttpClient) {} 

  //Cette méthode effectue une requête HTTP pour récupérer 
  // les catégories depuis un backend JSON.
  getAllCategoriesFromBackend(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrlCategory);
  }

  //Suppression d’une catégorie
  deleteCategoryFromBackend(category: Category): Observable<Category> {
    return this.http.delete<Category>(this.apiUrlCategory +'/'+
      category.id);
  }

  //Ajout d’une catégorie
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrlCategory,category);}

    getCategoryById(id: number): Observable<Category> {
      return this.http.get<Category>(`${this.apiUrlCategory}/${id}`);
    }
  
    updateCategory(category: Category): Observable<Category> {
      return this.http.put<Category>(`${this.apiUrlCategory}/${category.id}`, category);
    }
  //Récupérer tous les produits d'une catégorie spécifique
  getListProductsByCategory(id:number) : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlProduct + "?categoryId="+ id);//?categoryId= : utilisée pour filtrer les produits en fonction de la catégorie.
  }

 //Ajouter un nouveau produit au backend via form add-product.componment.html
 addProduct(p:Product):Observable<Product>{
  return this.http.post<Product>(this.apiUrlProduct,p);
}

deleteProduct(id:number):Observable<Product>{
  return this.http.delete<Product>(this.apiUrlProduct + "/" + id);
}

}
