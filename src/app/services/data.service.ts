import { Injectable } from '@angular/core';
import { generateDataArray } from '../util/data-utils';
import { Store } from '../store/store';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private store: Store) {}

  setDataSize(dataSize: number) {
    this.store.set('dataSize', dataSize);
    const data = generateDataArray(dataSize);
    this.store.set('data', data);
  }
}
