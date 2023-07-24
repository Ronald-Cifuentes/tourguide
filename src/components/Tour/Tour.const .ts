export const stepId = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
  'thirteenth',
  'fourteenth',
  'fifteenth',
  'sixteenth',
  'seventeenth',
  'eighteenth',
  'nineteenth',
]
const tens = ['twentie', 'thirtie', 'fortie', 'fiftie', 'sixtie', 'seventie', 'eightie', 'ninetie']
const ones = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth']
for (let i = 0; i < tens.length; i++) {
  stepId.push(tens[i] + 'th')
  for (let j = 0; j < ones.length; j++) {
    stepId.push(tens[i] + '-' + ones[j])
  }
}
