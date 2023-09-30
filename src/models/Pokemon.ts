class Pokemon {
  name: string;
  imageUrl: string;

  constructor(name: string, number: number) {
    this.name = name;
    this.imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${number}.svg`;
  }
}

export default Pokemon;
