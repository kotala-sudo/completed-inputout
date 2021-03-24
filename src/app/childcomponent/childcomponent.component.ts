import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-childcomponent",
  templateUrl: "./childcomponent.component.html",
  styleUrls: ["./childcomponent.component.css"]
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText = "";
  @Output() outputEvent: EventEmitter<string> = new EventEmitter();
  message: string = "";

  sendMessage() {
    this.outputEvent.emit(this.message);
  }

  constructor() {}

  ngOnInit() {}
}
