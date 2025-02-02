import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipesService } from './core/services/recipes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';


  constructor(private serRecip: RecipesService){

  }

  
}
