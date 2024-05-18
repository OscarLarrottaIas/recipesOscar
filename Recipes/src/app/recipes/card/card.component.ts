import { Component, Input } from '@angular/core';
import { recipe } from '../../core/models/recipe.model';
import { CommonModule } from '@angular/common';
import { CardDirective } from '../../shared/card.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,CardDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  favorite : boolean = false

  @Input() recipe! : recipe

  fav(){
    this.favorite = !this.favorite
  }
}
