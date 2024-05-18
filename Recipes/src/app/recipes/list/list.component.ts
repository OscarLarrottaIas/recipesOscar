import { Component } from '@angular/core';
import { RecipesService } from '../../core/services/recipes.service';
import { recipe } from '../../core/models/recipe.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RecipePipe } from '../../shared/recipe.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, RecipePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  recipes:any = []

  constructor(private recService:RecipesService){
   
  }

  // get recipes() : recipe[] {
  //   return this.recService.recipes;
  // }

  ngOnInit(): void {
    this.recService.fetchRecipes().subscribe(recipes =>{
      this.recipes = recipes.recipes
    } )
    
  }

  
}
