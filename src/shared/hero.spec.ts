import {Hero} from './hero';

const HERO_NAME = 'Super Cat';

export const test = describe('Hero model', () => {
  it('has a name', () => {
    const hero: Hero = {id: 1, name: HERO_NAME};
    expect(hero.name).toBe(HERO_NAME);
  });

  it('has an id', () => {
    const hero: Hero = {id: 1, name: HERO_NAME};
    expect(hero.id).toBe(1);
  })
});