import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { generateDataArray } from '../util/data-utils';

const initialState: State = {
  data: generateDataArray(500),
  dataSize: 500
};

@Injectable({ providedIn: 'root' })
export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  select(name: string): Observable<any> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
