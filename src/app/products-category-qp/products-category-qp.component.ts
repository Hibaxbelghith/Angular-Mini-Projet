import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {

  constructor(private sc : CategoryService , private ac:ActivatedRoute){} //injection de service Activated route : c un design pattern 
  id : number = 0 ;

  /*
  listProducts : Product[]=[
     {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
     {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
     {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
     {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
     {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
     {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
    ]*/

list : Product[]=[];
ngOnInit(){ 
  this.ac.queryParamMap.subscribe(res=>this.id=Number(res.get('id'))) 
  this.sc.getListProductsByCategory(this.id).subscribe(
    (res) => (this.list = res),
    error => console.error('Error:', error)
  );
}

deleteProduct(id : number) {
  this.sc.deleteProduct(id).subscribe(
    () => {
      // Update the local list to remove the deleted product
      this.list = this.list.filter(product => product.id !== id);
      alert('Produit supprimé avec succès.');
    },
    (error) => {
      console.error('Erreur lors de la suppression du produit:', error);
      alert('Une erreur est survenue lors de la suppression du produit.');
    }
  );
}
  
  
}
