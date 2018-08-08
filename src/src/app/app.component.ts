import { Component, Output, EventEmitter} from '@angular/core';


import { SampleService } from './sample.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  message:any;
  subscription: Subscription;
  
  constructor(private sampleService:SampleService){
     
       this.subscription = sampleService.getMessage().subscribe(
      val => {console.log('get');
        this.message = val;  console.log(val)
     });
  }

  callParent(val:string){
      console.log(val)
  }

 
}
