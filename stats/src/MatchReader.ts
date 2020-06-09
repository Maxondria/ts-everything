import { dateStringToDate } from "./utils";
import { matchResult } from "./matchResult";

type MatchData = [Date, string, string, number, number, matchResult, string];

export interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  public matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  public load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6],
      ]
    );
  }
}

export { MatchReader as default };
