import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../service/foods.service';
import {Recipe} from '../models/nutrition.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value="";
  food="banana";
  mydata: any;
  recipeData: Recipe[]=[];
  constructor(private foodservice: FoodsService) {

  }

  ngOnInit(): void {

  }



  onSubmit()
  {
    console.log(this.value)
    this.foodservice.getFoods(this.value).subscribe
    ((data)=>
    this.mydata=data

    )
  }


}
