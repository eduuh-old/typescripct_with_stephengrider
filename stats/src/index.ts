import fs from 'fs';
import { CsVFileReader } from './CsvFileReader';

const reader = new CsVFileReader('football.csv');
reader.read();

console.log(reader.data);
//Enum use to store related fixed values
enum MatchResult {
  HomeWin = 'H',
  AwayWin ='A',
  Draw='D'
};
let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`man united wons ${manUnitedWins}`);