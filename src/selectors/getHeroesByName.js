import { heroes } from "../data/heroes"
import { HeroScreen } from "../components/heroes/HeroScreen"

export const getHeroesByName = (name = '') => {
    if (name === '') return [];
    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}