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
}

export const charmander = new Pokemon(2, "Charmander");

console.log(charmander);
