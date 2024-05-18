import { Pipe, PipeTransform } from '@angular/core';
import { recipe } from '../core/models/recipe.model';

@Pipe({
  name: 'recipe',
  standalone: true
})
export class RecipePipe implements PipeTransform {

  transform(value: recipe[]): recipe[] {

    return value.sort((a:recipe,b:recipe) => {
      const order = a.name.localeCompare(b.name)
      return order
    });
  }

}
