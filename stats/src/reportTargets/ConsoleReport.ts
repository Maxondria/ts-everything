import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}
