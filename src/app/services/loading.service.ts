import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isBoolean$ = new BehaviorSubject<boolean>(false);
  isBooleanObservable = this.isBoolean$.asObservable();

  constructor() { }

  openLoading(){
    this.isBoolean$.next(true)
  }

  closeLoading(){
    this.isBoolean$.next(false)
  }
}
