import { Component, Input } from '@angular/core';

import { Images } from '../../../../Core/Entities/images';
import {Icons} from '../../../../Core/Entities/icons';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {
  @Input() images: Images[] = [];
  @Input() icons : Icons[] = [];

  public imageSelected: number = 0;

  imageSelector(imagePosition: number) {
    console.log(this.images[this.imageSelected])
    this.imageSelected = imagePosition;
  }
}
