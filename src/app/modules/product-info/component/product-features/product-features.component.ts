import { Component, OnInit } from '@angular/core';

import { ComponentService } from 'src/shared/Components/services/component.service';


@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent  {


  constructor(private componentService:ComponentService) {

   }

   selectedFeature(value:number){

    this.componentService.onSelectedFeature.emit(value);

   }
  

}
