const Purple = [
  '#CE93D8',
  '#AB47BC',
  '#8E24AA',
  '#E040FB',
  '#4A148C',
  '#7B1FA2'
];

const Violet = [
  '#B39DDB',
  '#6200EA',
  '#4A148C',
  '#7C4DFF',
  '#512DA8',
  '#4527A0'
];

const Amber = [
  '#FFA000',
  '#FFAB00',
  '#FFD740',
  '#FFD54F',
  '#FFCA28',
  '#FF8F00'
];
export class Color {
  colorMap = new  Map<string, Array<string>>();
  constructor() {
    this.colorMap
      .set('Violet', Violet)
      .set('Amber', Amber)
      .set('Purple', Purple);
  }
  getRandomColor(color: string): any {
    const colorArray = this.colorMap.get(color);
    return colorArray[Math.floor(colorArray.length * Math.random())];
  }
}
