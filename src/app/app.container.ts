import { Component } from '@angular/core';
import { ComponentService } from 'src/shared/Components/services/component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss']
})
export class AppComponent {
  title = 'serempe';
  total = 295.5;
  coverage = 0;
  feature = 0;
  productValue = 295.5;

  constructor(private componentService:ComponentService){
    
    this.componentService.onSelectedFeature.subscribe(data=>{

      this.featureSelected(data);

    })
  }



  coverageSelected(value: number) {
    this.coverage = value;

    this.getTotal();
  }

  featureSelected(value: number) {
    this.feature = value;
    this.getTotal();
  }

  getTotal() {
    this.total = this.productValue + this.feature + this.coverage;
  }
}
