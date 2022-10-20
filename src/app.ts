// Importáld be a HumanHero és TransformerHero osztályokat.
import {HumanHero} from "./hero";
import {TransformerHero} from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {id: 1, name: "A", sex: "male", age: 23, health: 1},
    {id: 2, name: "B", sex: "male", age: 33, health: 2},
    {id: 3, name: "C", sex: "female", age: 43, health: 3}
]


/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {id: 1, name: "X", wings: 2, wheels: 4, clan: "Clan1"},
    {id: 2, name: "Y", wings: 2, wheels: 0, clan: "Clan2"},
    {id: 3, name: "Z", wings: 2, wheels: 4, clan: "Clan3"}
];
