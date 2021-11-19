/*
console.log("hello");
let a = 'hello';
let b: any = null;
b.text = '';
a = 'wefwe';

type User = {
    name: string;
    age?: number;
};

let u: User = {
    name: 'zouhir',
    // 'age': 37
};

function calcul(a: number, b: number): number {
    return 0;
}

type AddFunction = (x: number, y: number) => number;
const add: AddFunction= (a, b) => 0;
const sub = (a: number, b: number): number => 0;

class Employe {
    private name: string;
    protected salary: number;
    age: number;

    constructor(name: string, salary: number, age?: number) {
        this.name = name;
        this.salary = salary;
        this.age = age || 20;
    }
}

let e = new Employe('zouhir', 1000)
// e.name = 'aefa'; // error
e.age = 30;



class Eutidant {
    constructor(private name: string, protected cne: string, public age?: number) {
        this.name = name;
        this.cne = cne;
        this.age = age || 20;
        // this.cin = '2esd'; // error
    }
}

//*/


//*
const sommeBtn = document.querySelector("#sommeBtn");
const nb1 = document.querySelector<HTMLInputElement>("#nb1");
const nb2 = document.querySelector<HTMLInputElement>("#nb2");
const resultat = document.querySelector<HTMLSpanElement>("#resultat");

function convert(value: string | undefined): number {
    return value ? parseInt(value) : 0;
}

const somme = (e: Event) => {
  console.log("calcul somme");
  const n1: number = convert(nb1?.value);
  const n2: number = convert(nb2?.value);
  if (resultat) {
      resultat.textContent = `${n1 + n2}`;
  }
};

sommeBtn?.addEventListener("click", somme);
//*/


type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return "swimee" in pet;
}

function identity<T>(x: T): T {
    return x;
} 

let a = identity<number>(4);

const first = <T>(t: T[]): T => {
    return t[0];
}

const xy = first(['wfwef', 'wef', 9]);


class CustomElement<T, U> {
    constructor(public readonly value: T, public target: U) {
        this.value = value;
        this.target = target;
    }
}

const ce = new CustomElement<number, string>(34, '12');


function reverse<T>(tab: readonly T[]): T[] {
    return [...tab].reverse();
}



interface CatInfo {
    age: number;
    breed?: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16 },
  };
   
  cats.boris;