# TypeScript

## Qu'est ce que le TypeScript
TypeScript est un superset du javascript (du code JavaScript valide est du code TypeScript valide) où on aura la possibilité de spécifier les type attendus lorsque l'on va créer des fonctions ou des variables.



## Les avantages du TypeScript

### Moins d'erreurs
TypeScript va nous permettre de limiter les erreurs dans notre code et notamment un type d'erreur que l'on rencontre trop souvent.
```javascript
Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
```

une autre situation de l'incohérence de type
```javascript
resultat.innerText = 'Le prix TTC est : ' + ((amount.value + addons.value) * 1.2).toFixed(2)
```

### Une meilleur documentation
Du code écrit en TypeScript permettra aussi d'avoir une meilleure auto-complétion et une meilleure documentation (à travers le typage on saura quel type de paramètre est attendu par les fonctions). Cette documentation des types est beaucoup plus exhaustive que ce qu'il est possible de faire avec JSDoc.

### Une cible unique
Un autre avantage est que l'on peut facilement cibler une version spécifique de TypeScript et lui demander d'exporter le code pour n'importe quelle version de JavaScript (depuis ES3 jusqu'à ESNext).


## Les inconvénients

### Un outil en plus
TypeScript va représenter un outil supplémentaire entre notre code et le navigateur / serveur. Nous ne pourrons plus directement coller une fonction dans notre navigateur pour la tester par exemple. Cependant, dans le pire des cas on peut toujours convertir notre code en JavaScript pour le faire fonctionner avec l'outil de notre choix.

### L'écosystème JavaScript
Pour que TypeScript fonctionne pleinement il a besoin de connaitre le type de tous les éléments. Ce qui peut poser un problème lorsque l'on choisit d'utiliser une librairie qui n'est écrite qu'en JavaScript. Il faudra donc être plus attentif aux librairies que l'on va choisir et si possible chercher des librairies qui disposent de fichiers de types (un petit logo apparait maintenant sur npmjs pour nous informer de la présence d'un fichier de déclaration).

Aussi, le projet [Definitely Typed](https://definitelytyped.org/), offre de nombreux fichiers de déclaration pour certains paquets npm.



### Diffculté pour écrire du code dynamique
Les types étant statiques, ils se marient difficilement avec un code trop dynamique et il faudra parfois repenser sa manière d'écrire


### Lisibilité du code
Le dernier problème réside dans le mélange entre le code et les types. Parfois ce mélange peut rendre le code moins lisible.
```typescript
function push<T, U>(items: readonly T[], item: U): (T | U)[] {
    return [...items, item]
}
```

## Installation et outils
- [Editeur en ligne](https://www.typescriptlang.org/play)
- [tsconfig](https://www.typescriptlang.org/tsconfig)
- [types](https://www.typescriptlang.org/dt/search?search=)

## Types de base
[documetation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

string, number, boolean, null, undefined, any, object type, Function, union, unknown



## [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
Le Narrowing peut se faire grâce à plusieurs méthodes :
- typeof
- instanceof
- l'égalité entre 2 union type qui ont des types en commun
- L'opérateur in
- Certaines méthodes qui permettent de prédire le type : Array.isArray par exemple.

## [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics)


## [class & readonly]()

## type ou interface

### Un type peut utiliser un type primaire
```typescript
type DateString = string
type Id = string | number
```

### Une interface peut être fusionnée
```typescript
interface Point {
    x: number
}
interface Point {
    y: number
}
// Point aura maintenant la forme {x:number, y:number}
```

### Une interface peut être implémentée par une classe
```
class TwoDimensionalPoint implements Point {
    constructor (private x: number, private y: number) {}
}
```






## Types utilitaires
- [Utilitaires](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Types conditionnels](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Utility Type]()
- [TypeScript Challenge](https://github.com/type-challenges/type-challenges)