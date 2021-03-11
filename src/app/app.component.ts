import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  showParagraph: boolean = false;
  strings = [];
  count = 0;

  OnClick(): void {
    this.showParagraph = !this.showParagraph;
    this.strings[this.count] = this.count + 1;
    this.count++;
  }

  getBColor(i) {
    if (i >= 5) {
      return "green";
    }
    return "transparent";
  }

  whiteText(i) {
    if (i >= 5) {
      return true;
    }
    return false;
  }
}
