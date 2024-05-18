import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipe } from '../models/recipe.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  url:string = 'https://dummyjson.com/recipes'

  private _recipes: recipe[]  =[]
  private recipes$ = new BehaviorSubject<any>([]);

  get recipes(){
    return  [...this._recipes]
  }

  constructor(private http : HttpClient) { }



  fetchRecipes():Observable<any>{
    return  this.http.get<any>(this.url)
  }

  fillInitalRecipes(recipes: any){
    this._recipes = recipes;
  }


  setrecipes(recipes: any) {
    this.recipes$.next(recipes);
  }
  getrecipes() {
    return this.recipes$.asObservable();
  }



  
}
