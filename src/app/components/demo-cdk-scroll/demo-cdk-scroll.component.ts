import { Component, OnInit, OnDestroy } from '@angular/core';
import { getColumnNames } from 'src/app/util/data-utils';
import { Store } from 'src/app/store/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-cdk-scroll',
  templateUrl: './demo-cdk-scroll.component.html',
  styleUrls: ['./demo-cdk-scroll.component.scss']
})
export class DemoCdkScrollComponent implements OnInit, OnDestroy {
  displayedColumns = getColumnNames();
  data: any[];
  filterData: any[];
  dataSub: Subscription;
  filterValue = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.dataSub = this.store.select('data').subscribe(d => {
      this.data = d;
      this.filterData = this.data;
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
