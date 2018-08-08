import { Component, Input } from '@angular/core';

import { SampleService } from './sample.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  subscription: Subscription;
  constructor(private sampleService: SampleService) {
    this.addObsVal();
  }

   addObsVal(){ console.log('call Observable');
    this.sampleService.setMessage('value injected');
  }
}
