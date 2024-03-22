import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
//Clase es una representacion de un objeto real

// Version larga
// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("constructor");
//   }
// }

// Version corta
export class Pokemon {
  // Metodo Getter
  get imageUrl(): string {
    // el this toma la instancia de la clase creada new Pokemon(2, "Charmander")
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  // todo lo que no privado, es publico por defecto
  // private no me deja acceder si esta por fuera de la clase
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    return data.moves;
  }
}

export const charmander = new Pokemon(2, "Charmander");

console.log(charmander);
// charmander.speak();
// charmander.scream();

console.log(await charmander.getMoves());
