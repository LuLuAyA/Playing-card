import { MonsterType } from '../utils/monster.utils';

export class Monster {
  id: number = -1;
  name: string = 'Monster';
  type: MonsterType = MonsterType.ELECTRIC;
  image: string = 'assets/img/pikachu.png';
  hp: number = 40;
  figureCaption: string = 'N°001 Monster';
  attackName: string = 'Vive attaque';
  attackStrength: number = +10;
  attackDescription: string =
    "Lancer un pièce si c'est face, cette attaque fait 10 dégats de plus";

  copy(): Monster {
    return Object.assign(new Monster(), this);
  }
}
