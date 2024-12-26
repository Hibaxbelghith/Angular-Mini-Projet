import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(categories: any[], titre:string): any[] {
    if (!titre) return categories;
    if(!categories) return [];
    titre = titre.toLowerCase();
    return categories.filter(
      cat => cat.title.toLowerCase().includes(titre));
  }

}

