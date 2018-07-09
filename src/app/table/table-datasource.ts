import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableItem {
  id: number;
  status: string;
  name: string;
  seats: number;
  trunks: number;
  DID: number;
  location: string;
  edit: string;
  delete: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {
    id: 1,
    status: 'active',
    name: 'Hydrogen',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 2,
    status: 'active',
    name: '',
    seats: null,
    trunks: 20,
    DID: 2738907,
    location: '',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 3,
    status: 'active',
    name: 'Lithium',
    seats: 15,
    trunks: null,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 4,
    status: '',
    name: 'Beryllium',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 5,
    status: '',
    name: 'Boron',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 6,
    status: 'active',
    name: 'Carbon',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 7,
    status: 'active',
    name: 'Nitrogen',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 8,
    status: '',
    name: '',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 9,
    status: 'active',
    name: 'Fluorine',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: '',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 10,
    status: 'active',
    name: 'Neon',
    seats: 15,
    trunks: 20,
    DID: null,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 11,
    status: 'active',
    name: 'Sodium',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 12,
    status: 'active',
    name: 'Magnesium',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 13,
    status: 'active',
    name: 'Aluminum',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 14,
    status: 'active',
    name: 'Silicon',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 15,
    status: 'active',
    name: 'Phosphorus',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 16,
    status: 'active',
    name: 'Sulfur',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 17,
    status: 'active',
    name: 'Chlorine',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 18,
    status: 'active',
    name: 'Argon',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 19,
    status: 'active',
    name: 'Potassium',
    seats: 15,
    trunks: 20,
    DID: 2738907,
    location: 'newyork',
    edit: 'edit customer',
    delete: 'delete'
  },
  {
    id: 20,
    status: 'active',
    name: 'Calcium',
    seats: 15,
    trunks: 20,
    DID: 239823,
    location: 'japan',
    edit: 'edit customer',
    delete: 'delete'
  }
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
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
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'seats':
          return compare(+a.seats, +b.seats, isAsc);
        case 'trunks':
          return compare(+a.trunks, +b.trunks, isAsc);
        case 'DID':
          return compare(+a.DID, +b.DID, isAsc);
        case 'location':
          return compare(a.location, b.location, isAsc);
        case 'edit':
          return compare(a.edit, b.edit, isAsc);
        case 'delete':
          return compare(a.delete, b.delete, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
