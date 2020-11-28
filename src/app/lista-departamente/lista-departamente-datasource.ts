import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListaDepartamenteItem {
  NumesiPrenume: string;
  id: number;
  punctaj: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListaDepartamenteItem[] = [
  {id: 1, NumesiPrenume: 'Paun Mihai', punctaj: 10},
  {id: 2, NumesiPrenume: 'Enache Andrei', punctaj: 10},
  {id: 3, NumesiPrenume: 'David Mihai', punctaj: 10},
  {id: 4, NumesiPrenume: 'Marginean Matei', punctaj: 10},
  {id: 5, NumesiPrenume: 'Edy Marin', punctaj: 10}
];

/**
 * Data source for the ListaDepartamente view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListaDepartamenteDataSource extends DataSource<ListaDepartamenteItem> {
  data: ListaDepartamenteItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ListaDepartamenteItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListaDepartamenteItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListaDepartamenteItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'NumesiPrenume': return compare(a.NumesiPrenume, b.NumesiPrenume, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'punctaj': return compare(+a.punctaj, +b.punctaj, isAsc)
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
