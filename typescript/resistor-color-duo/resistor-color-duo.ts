let ResistanceValue: { [char: string]: number } = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}


export function decodedValue(resistents: string[]): any {
  let firstBand = ResistanceValue[resistents[0]]
  let secondBand = ResistanceValue[resistents[1]]

  return Number(`${firstBand}${secondBand}`);
}
