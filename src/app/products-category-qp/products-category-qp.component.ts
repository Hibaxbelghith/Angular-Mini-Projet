import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-category-qp',
  templateUrl: './products-category-qp.component.html',
  styleUrls: ['./products-category-qp.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {

  constructor(private ac:ActivatedRoute){} //injection de service Activated route : c un design pattern 
  id : number = 0 ;

  listProducts : Product[]=[
     {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
     {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
     {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
     {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
     {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
     {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
    ]

list : Product[]=[];
ngOnInit(){ 
  this.ac.queryParamMap.subscribe(res=>this.id=Number(res.get('id'))) 
  for(let p of this.listProducts){ 
    if (p.categoryId == this.id){
      this.list.push(p);
      }
  }
  
    console.log(this.ac.snapshot.queryParamMap.get("id"));

    // Autre methide pour Filtrer les produits en une seule ligne
    //this.list = this.listProducts.filter(product => product.categoryId === this.id);
  }
  
  
}
