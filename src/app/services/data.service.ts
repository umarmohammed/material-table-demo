import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { generateDataArray } from '../util/data-utils';

@Injectable({ providedIn: 'root' })
export class DataService {
  numData = 10000;

  getData(): Observable<any[]> {
    return of(generateDataArray(this.numData));
  }
}
