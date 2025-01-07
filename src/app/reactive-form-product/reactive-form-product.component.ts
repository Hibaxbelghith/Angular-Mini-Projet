import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Product } from '../models/product';
@Component({
  selector: 'app-reactive-form-product',
  templateUrl: './reactive-form-product.component.html',
  styleUrls: ['./reactive-form-product.component.css']
})
export class ReactiveFormProductComponent {

  myForm: FormGroup;

  nametest = new FormControl('text');

  constructor(private cs: CategoryService){}
  ngOnInit(){
    this.myForm = new FormGroup(
      {
        namep : new FormControl("text",[Validators.required,Validators.minLength(5)]),
        pricep : new FormControl(),
        descriptionp : new FormControl("",Validators.required)
      }  
  
    )
  }

  get name(){
    return this.myForm.get('namep');
  }

  get price(){
    return this.myForm.get('pricep');
  }
  get description(){
    return this.myForm.get('descriptionp');
  }

  saveProduct() {
    if (this.myForm.valid) {
      const newProduct: Product = this.myForm.value;
      this.cs.addProduct(newProduct).subscribe(
        (res) => console.log('Produit ajouté avec succès :', res),
        (err) => console.error('Erreur lors de l\'ajout :', err)
      );
    }
  }
  

}
