import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { generateDataArray } from '../util/data-utils';

@Injectable({ providedIn: 'root' })
export class DataService {
  numData = 10000;

  getData(): Observable<any[]> {
    return of(generateDataArray(this.numData)).pipe(delay(1000));
  }
}
