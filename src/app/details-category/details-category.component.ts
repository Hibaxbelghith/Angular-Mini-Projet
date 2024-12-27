import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../models/category';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

    constructor(private ac:ActivatedRoute){} 
    id : number = 0 ;

  
  
  ngOnInit(){ 
    
    this.ac.params.subscribe(res=>{this.id=res['name']; console.log(res)});
    
  }


}
