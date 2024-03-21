export const pokemonIds: number[] = [1, 2, 3, 4, 5, 6];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
  age: 25,
};
export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
  age: 12,
};

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, pikachu);
