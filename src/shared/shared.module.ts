import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './Components/header/header.component';
import { CardComponent } from './Components/card/card.component';
import { IconTextComponent } from './Components/icon-text/icon-text.component';
import { TextComponent } from './Components/text/text.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ButtonComponent } from './Components/button/button.component';
import { TabComponent } from './Components/tabs/tab/tab.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    IconTextComponent,
    TextComponent,
    TabsComponent,
    FooterComponent,
    ButtonComponent,
    TabComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    CardComponent,
    IconTextComponent,
    TextComponent,
    TabsComponent,
    FooterComponent,
    ButtonComponent,
    TabComponent,
  ]
})
export class SharedModule { 
}
