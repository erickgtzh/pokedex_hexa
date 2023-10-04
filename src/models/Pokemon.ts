class Pokemon {
  name: string;
  imageUrl: string;
  types: string[];
  firstType: string;
  firstMove: string;
  lastMove: string;
  lastFiveMoves: string[];

  constructor(
    name: string,
    number: number,
    types: string[],
    firstMove: string,
    lastMove: string,
    lastFiveMoves: string[],
  ) {
    this.name = name;
    this.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${number}.svg`;
    this.types = types;
    this.firstType = types[0];
    this.firstMove = firstMove;
    this.lastMove = lastMove;
    this.lastFiveMoves = lastFiveMoves;
  }
}

export default Pokemon;
