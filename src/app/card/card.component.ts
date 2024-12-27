import { Component, Input, Output } from '@angular/core';
import { shortList } from '../models/shortList';
import { EventEmitter } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  
  @Input() id : number;
  @Input() title : string;
  @Input() image: string;
  @Input() description : string;
  @Input() available : boolean;
  @Input() prix : number;
  btn : String = "add  to shortlist";
  @Input() category : Category;
  @Output() add = new EventEmitter<shortList>();

  addToShortList() {
    if(this.category && this.category.id){
      let x: shortList = {
        id: this.category.id,           // ID de la catégorie
        idUser: 1,                      // ID de l'utilisateur (fixe ou dynamique)
        idElement: this.category.id,    // ID de l'élément à ajouter
        typeElement: 'category'         // Type de l'élément (ici 'category')
      };
    this.add.emit(x); // Émet l'objet shortList vers le parent
  }else{
    alert("La catégorie est undefined ou invalide");
  }
}

  f(description:string){
    alert(description);
  }

}
