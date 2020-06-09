import fs from "fs";

export default abstract class CSVFileReader<T> {
  public data: T[] = [];

  constructor(public filename: string) {}

  public abstract mapRow(row: string[]): T;

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
