import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Store } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSizes = [500, 1000, 2000, 3000, 5000, 10000];
  data$ = this.store.select('data');
  selectedSize$ = this.store.select('dataSize');

  constructor(private store: Store, private dataService: DataService) {}

  onSelectionChange(value: number) {
    this.dataService.setDataSize(value);
  }
}
