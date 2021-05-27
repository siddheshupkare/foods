import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private http: HttpClient) {

   }





  getFoods(name: any)
  {
    return this.http.get<any>("https://api.edamam.com/api/nutrition-data?app_id=1b2025d9&app_key=585267243998a78862221ea0bb9bc519&ingr="+name)
  }

  getRecipe(name: any)
  {
    return this.http.get<any>("https://api.edamam.com/search?q="+name+"&app_id=360ff598&app_key=12d3b8d96597b11aede39a054b566551&hits=recipe").pipe
    (map((data:any)=>data.hits))
  }


}
