import MatchReader from "./MatchReader";

import Summary from "./Summary";

const matches = MatchReader.FromCSVFile("football.csv");

const summaryConsole = Summary.WinsAnalysisWithConsoleReport("Man United");
summaryConsole.buildAndPrintReport(matches);

const summaryHTML = Summary.WinsAnalysisWithHTMLReport("Man United");
summaryHTML.buildAndPrintReport(matches);
