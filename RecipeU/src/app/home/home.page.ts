import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ItemData } from '../data/item-data';
import { RecipeData } from '../data/recipe-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public lowInStock:ItemData[] = [];
  public recipes:RecipeData[] = []

  constructor(public recipeService:RecipeService) {

  }

  ngOnInit() {
      this.lowInStock = this.recipeService.getAllItems();
      this.recipes = this.recipeService.getAllRecipes();
  }
  
}
