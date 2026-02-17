import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  _breadcrumbItems: BehaviorSubject<MenuItem[]> = new BehaviorSubject<
    MenuItem[]
  >([]);

  currentBreadcrumbItems$ = this._breadcrumbItems.asObservable();

  setBreadcrumbItems(items: MenuItem[]) {
    this._breadcrumbItems.next(items);
  }
}
