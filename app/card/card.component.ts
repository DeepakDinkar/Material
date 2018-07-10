import { Component, OnInit } from "@angular/core";
import { Color } from "../color";
import { DataService } from "../data.service";
import { Card } from "./card";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  data: any[];
  color: any;
  constructor(private dataService: DataService) {
    this.color = new Color().getRandomColor('Violet');
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
