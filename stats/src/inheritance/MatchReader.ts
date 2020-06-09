import CSVFileReader from "./CSVFileReader";
import { dateStringToDate } from "../utils";
import { matchResult } from "../matchResult";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  matchResult,
  string
];

export default class MatchReader extends CSVFileReader<MatchData> {
  public constructor(public filename: string) {
    super(filename);
  }

  public mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResult,
      row[6],
    ];
  }
}
