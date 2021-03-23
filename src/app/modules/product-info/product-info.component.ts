import { Component, EventEmitter, Output } from '@angular/core';

import { Images } from '../../Core/Entities/images';
import {Icons} from '../../Core/Entities/icons';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent{
  constructor() {}
  @Output() onSelectedCoverage: EventEmitter <number> = new EventEmitter();

  public images: Images[] = [
    {  url: '../../../assets/img/earphones1.png', name: 'earphones1' },
    {  url: '../../../assets/img/earphones2.png', name: 'earphones2' },
    {  url: '../../../assets/img/earphones3.png', name: 'earphones3' }
  ];

  public icons: Icons[] = [
    { url:'../../../assets/img/icon1.png', description: 'Customizable Touch Controls'},
    { url:'../../../assets/img/icon2.png', description: 'Built-in Equalizer'},
    { url:'../../../assets/img/icon3.png', description: 'Active Noise Cancellation'}, 
  ]

  selectedCoverage(value:number){

    this.onSelectedCoverage.emit(value);

  }
}
