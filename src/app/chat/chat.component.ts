import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  cards: any[];
  cols: number;
  constructor(
    private dataService: DataService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe(['(min-width:550px)']).subscribe(result => {
      this.cols = result.matches ? 2 : 1;
    });
  }

  ngOnInit() {
    this.cards = this.dataService.getData();
  }
}
