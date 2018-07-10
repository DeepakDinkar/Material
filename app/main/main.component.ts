import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { CardDirective } from "../card.directive";
import { Card } from "../card/card";
import { CardComponent } from "../card/card.component";
import { DataService } from "../data.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent {
  }

