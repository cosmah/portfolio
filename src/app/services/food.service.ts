import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //import food
  getAll():Food[]{
    return sample_foods;
  }

  //add search bar to the page
  getAllFoodsBySearchTerm(searchTerm:string){
    //we resolve everything to lower case to make it case insensitive
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
