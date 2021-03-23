import { Component, Input } from '@angular/core';

import {Icons} from '../../../app/Core/Entities/icons';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss']
})
export class IconTextComponent  {

@Input() imageIconUrl : any="";
@Input() textIcon :any ="";
  

}
