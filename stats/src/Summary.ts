import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReport } from "./reportTargets/HTMLReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  public static WinsAnalysisWithHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  public static WinsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  public buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyser.run(matches);
    this.outputTarget.print(report);
  }
}
