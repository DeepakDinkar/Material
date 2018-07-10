import { Injectable, EventEmitter } from '@angular/core';
import { Card } from './card/card';
import { CardComponent } from './card/card.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static showLogin = new EventEmitter();
  static themeEmitter = new EventEmitter();
  gridObject = new Subject<any>();
  gridSize = this.gridObject.asObservable();
  constructor() {
    this.gridObject.next(6);
  }

  public getData(): Card[] {
    return [
      new Card('assets/images/Chrysanthemum.jpg', 'Chrysanthemum', 1),
      new Card('assets/images/Desert.jpg', 'Desert', 2),
      new Card('assets/images/Hydrangeas.jpg', 'Hydrangeas', 3),
      new Card('assets/images/Jellyfish.jpg', 'Jellyfish', 4),
      new Card('assets/images/Penguins.jpg', 'Penguins', 5)
    ];
  }
}
