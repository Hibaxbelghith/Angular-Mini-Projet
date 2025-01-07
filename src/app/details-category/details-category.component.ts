import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../models/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  category : Category = new Category ;
  id : number ;
  constructor(private ac:ActivatedRoute , private cs:CategoryService ){
    console.log("je suis le constructor");
  }

  ngOnInit(){
    console.log("je suis le ngOnInit");
  //  this.id= this.ac.snapshot.params['id'];
  //  console.log(this.ac.snapshot.params);
    this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.cs.getCategoryById(this.id).subscribe(
      res=>this.category=res);
   });
   
  //  this.ac.params.subscribe(res=>{this.id=res['name']; console.log(res)});
  }

}
