import { Component, EventEmitter } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class SidebarComponent {
  theme = 'indigo';
  active = 'main';
  gridSize = 6;
  isHandset: Observable<boolean>;

  constructor(
    private dataService: DataService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  changeGridSize(event: any) {
    this.gridSize = event.value;
    this.dataService.gridObject.next(this.gridSize);
  }

  changeTheme(theme: string) {
    this.theme = theme;
    DataService.themeEmitter.emit(theme);
  }
  private route(routeTo: string) {
    this.active = routeTo;
    this.router.navigate(['/home/' + routeTo]);
  }

  getPage(outlet) {}
}
