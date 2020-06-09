import MatchReader from "./MatchReader";
import CSVFileReader from "./CSVFileReader";
import { matchResult } from "./matchResult";

const csvReader = new CSVFileReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

let arsWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Arsenal" && match[5] === matchResult.HomeWin) {
    arsWins++;
  } else if (match[2] === "Arsenal" && match[5] === matchResult.AwayWin) {
    arsWins++;
  }
}

console.log(arsWins);
