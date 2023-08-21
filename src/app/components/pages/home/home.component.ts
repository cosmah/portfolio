import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = [];
  //inject foodservice in home component, we inject activeted routes in this component
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {  
   //listen to activated routes, whenever the params change, function in th subscribe is called
   activatedRoute.params.subscribe((params)=> {
    //filter results
    if(params.searchTerm)
    this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm)
    //if there is no search term  we use an else containing default foods
    else
      //foods filled with data from foodservices that use sample food data
    this.foods = foodService.getAll(); 
  })
   
   
  }
}
