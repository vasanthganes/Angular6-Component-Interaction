import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

import { SampleService } from './sample.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildComponent implements OnInit  {
  name:string;
  subscription: Subscription;
  @Output() valueChange = new EventEmitter();

  constructor(private sampleService: SampleService) {
   this.name = "CHILD";
  }
  ngOnInit(){
    console.log('sdf');
  }

 callfromChild(agreed: string) {
    console.log('call from child');
    this.valueChange.emit('child');
  }

}
