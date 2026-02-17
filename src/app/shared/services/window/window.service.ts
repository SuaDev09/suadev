import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private _windowHeight: BehaviorSubject<number> = new BehaviorSubject<number>(
    window.innerHeight
  );

  windowHeight$ = this._windowHeight.asObservable();

  updateWindowHeight(size: number) {
    this._windowHeight.next(size);
  }
}
