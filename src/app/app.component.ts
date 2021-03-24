import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "newpracticeOutput";

  pText: string = "";

  poText: string = "";

  receiveMessage(msg: string) {
    this.poText = msg;
  }
}
