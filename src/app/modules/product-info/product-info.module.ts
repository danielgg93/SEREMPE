import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductInfoComponent } from './product-info.component';
import { ProductImageComponent } from './component/product-image/product-image.component';

import { SharedModule } from './../../../shared/shared.module';
import { ProductFeaturesComponent } from './component/product-features/product-features.component';
import { ProductSpecificationsComponent } from './component/product-specifications/product-specifications.component';

@NgModule({
  declarations: [ProductInfoComponent, ProductImageComponent, ProductFeaturesComponent, ProductSpecificationsComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductInfoComponent]
})
export class ProductInfoModule {}
