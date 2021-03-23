import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  showParagraph: boolean = false;
  log: number[] = [];
  username: string = "";

  OnClick(): void {
    this.showParagraph = !this.showParagraph;
    this.log[this.log.length] = this.log.length + 1;
  }

  getBColor(i) {
    if (i > 4) {
      return "green";
    }
    return "transparent";
  }

  onClickB() {
    this.username = "HelloWorld";
  }
}
