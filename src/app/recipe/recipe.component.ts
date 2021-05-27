import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../service/foods.service';
import {Recipe} from '../models/nutrition.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  food=""
  recipeData:Recipe[]=[];
  constructor(private foodservice:FoodsService) { }

  ngOnInit(): void {
  }


  onSubmit2()
  {
    this.foodservice.getRecipe(this.food).subscribe
    ((data)=>{
      this.recipeData=data
      console.log(this.recipeData)
    }

    )
  }
}
