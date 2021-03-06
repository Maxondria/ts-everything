import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const HTML = `
    <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
    </div>`;
    fs.writeFileSync("report.html", HTML);
  }
}
