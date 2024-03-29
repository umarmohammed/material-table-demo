import { Component, OnInit, OnDestroy } from '@angular/core';
import { getColumnNames } from 'src/app/util/data-utils';
import { Store } from 'src/app/store/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-mat-table',
  templateUrl: './demo-mat-table.component.html',
  styleUrls: ['./demo-mat-table.component.scss']
})
export class DemoMatTableComponent implements OnInit, OnDestroy {
  data: any[];
  filterData: any[];

  displayedColumns = getColumnNames();
  filterValue = '';
  dataSub: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.dataSub = this.store.select('data').subscribe(d => {
      this.data = d;
      this.filterData = d;
    });
  }

  applyFilter() {
    this.filterData = this.data.filter(d => {
      const values = Object.values(d).join('');
      return values.includes(this.filterValue);
    });
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
