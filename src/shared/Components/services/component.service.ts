import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  onSelectedFeature: EventEmitter <number> =  new EventEmitter();


  constructor() { }
}
