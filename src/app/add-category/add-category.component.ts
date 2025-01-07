import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Category } from '../models/category';
import { CategoryService } from '../category.service';
import { Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private ac:ActivatedRoute, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      image: new FormControl(''),
      description: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      available: new FormControl(true, Validators.required)
    });
  
  //Dans ngOnInit
  const categoryId = this.ac.snapshot.params['id'];
  if (categoryId) {
    this.categoryService.getCategoryById(categoryId).subscribe((category) => {
      this.categoryForm.patchValue(category); //données récupérées 
      // et injectées dans le formulaire
    });
  }}

  // Getters pour un accès simplifié dans le HTML
  get title() {
    return this.categoryForm.get('title');
  }

  get image() {
    return this.categoryForm.get('image');
  }

  get description() {
    return this.categoryForm.get('description');
  }

  get price() {
    return this.categoryForm.get('price');
  }

  get available() {
    return this.categoryForm.get('available');
  }

  saveCategory() {
    if (this.categoryForm.valid) {
      const newCategory: Category = this.categoryForm.value;
      //id catégorie pour la modification
      const categoryId = this.ac.snapshot.params['id'];

      if (categoryId) {
        // Modifier categorie
        newCategory.id = categoryId;
        this.categoryService.updateCategory(newCategory).subscribe(
          (res) => {
            console.log('Category updated successfully:', res);
          },
          (err) => {
            console.error('Error updating category:', err);
          }
        );
      } else {
        // Ajouter une catégorie
      this.categoryService.addCategory(newCategory).subscribe(
        (res) => {
          console.log('Catégorie ajoutée avec succès :', res);
          this.categoryForm.reset(); // Réinitialisation du formulaire
          this.categoryForm.patchValue({ available: true }); // Par défaut, "disponible" est vrai
        },
        (err) => {
          console.error('Erreur lors de l\'ajout de la catégorie :', err);
        }
      );
    }
  }
  }
}
