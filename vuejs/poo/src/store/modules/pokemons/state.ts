export interface IPokemons {
  pokemons: string[];
}

function state(): IPokemons {
  return {
    pokemons: [],
  };
}

export default state;
