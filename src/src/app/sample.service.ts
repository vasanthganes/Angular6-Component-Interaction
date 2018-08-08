import { Injectable } from '@angular/core';
import { Subject, Observable }    from 'rxjs';

@Injectable()
export class SampleService {

  // Observable string sources
  private message = new Subject<any>();

  // Service message commands
  setMessage(val: string) { console.log('set message');
    this.message.next(val);
  }

   getMessage(): Observable<any> { console.log('get message');
        return this.message.asObservable();
    }

}
